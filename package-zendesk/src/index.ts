import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { logger } from '@bitwala-cryptobank-squad/package-logger';
import zendeskAPI, { PatchedClient } from 'node-zendesk';

export type CreateRequestInput = zendeskAPI.Requests.CreatePayload['request'];
export type CategoryOption = zendeskAPI.TicketFields.ResponsePayload['custom_field_options'][number];

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ZENDESK_API_URL: string;
      ZENDESK_API_TOKEN: string;
      ZENDESK_API_EMAIL: string;
      ZENDESK_CATEGORY_FIELD_ID: string;
      ZENDESK_LOCALE_EN_ID: string;
      ZENDESK_LOCALE_DE_ID: string;
    }
  }
}

interface Category {
  id: string;
  value?: string;
  label: string;
  children: Category[];
}

const getSupportCategoryField = async (
  zd: PatchedClient,
  fieldId: number
): Promise<Category[]> => {
  const data = await zd.ticketfields.show(fieldId);

  const makeOption = (
    collection: Category[],
    id: string,
    label: string,
    value?: number
  ): Category => {
    const option: Category = {
      id,
      value: value?.toString(),
      label,
      children: [],
    };
    collection.push(option);

    return option;
  };

  return data.custom_field_options.reduce<Category[]>((acc, field) => {
    const { id, name, raw_name } = field;
    const [label1, label2, label3] = raw_name.split(/:: +/);
    const [group1, group2, group3] = name.split(/:: +/);

    if (label1) {
      const option1 =
        acc.find((e) => e.label === label1) ||
        makeOption(acc, group1, label1, !group2 ? id : undefined);

      if (label2) {
        const option2 =
          option1.children.find((e) => e.label === label2) ||
          makeOption(
            option1.children,
            [group1, group2].join('-'),
            label2,
            !group3 ? id : undefined
          );

        if (label3 && !option2.children.find((e) => e.label === label3)) {
          makeOption(
            option2.children,
            [group1, group2, group3].join('-'),
            label3,
            id
          );
        }
      }
    }

    return acc;
  }, []);
};

type Translations = Record<string, string>;

const getTranslations = async (
  zd: PatchedClient,
  tree: Category[],
  localeId: number
): Promise<Translations> => {
  const matchPlaceholder = new RegExp(/^\{\{dc\./);

  const walk = (values: Category[], list: string[] = []): string[] => {
    values.forEach((c) => {
      if (matchPlaceholder.test(c.label)) {
        list.push(c.label);
      }

      walk(c.children, list);
    });

    return list;
  };

  const translationTokens = [...new Set(walk(tree))];

  const allTranslations = await zd.dynamiccontent.listAllItems();

  return allTranslations.reduce<Translations>((acc, translation) => {
    if (
      !acc[translation.placeholder] &&
      translationTokens.includes(translation.placeholder)
    ) {
      const translationVariants = translation.variants.filter(
        (v) => v.locale_id === localeId
      );

      if (translationVariants.length) {
        acc[translation.placeholder] = translationVariants[0].content;
      }
    }

    return acc;
  }, {});
};

const applyTranslations = (tree: Category[], translations: Translations) => {
  const walk = (values = tree): void => {
    values.forEach((c) => {
      if (Object.keys(translations).includes(c.label)) {
        c.label = translations[c.label];
      }

      walk(c.children);
    });
  };

  walk();

  return tree;
};

export const getZendesk = () => {
  const {
    ZENDESK_API_URL: API_URL,
    ZENDESK_API_TOKEN: API_KEY,
    ZENDESK_API_EMAIL: API_EMAIL,
    ZENDESK_CATEGORY_FIELD_ID: CATEGORY_FIELD_ID,
    ZENDESK_LOCALE_EN_ID: LOCALE_EN_ID,
    ZENDESK_LOCALE_DE_ID: LOCALE_DE_ID,
  } = process.env;

  const log = logger('PACKAGE.ZENDESK');

  let zd: PatchedClient;

  if (API_KEY) {
    try {
      zd = zendeskAPI.createClient({
        remoteUri: API_URL,
        token: API_KEY,
        username: API_EMAIL,
      });
    } catch (e) {
      log.error('Zendesk failed to be instantiated');
    }
  }

  const createRequest = async (
    request: CreateRequestInput
  ): Promise<zendeskAPI.Requests.ResponsePayload | void> => {
    if (!zd) {
      log.info('Create Zendesk Request', request);
      return;
    }

    return zd.requests.create({ request });
  };

  const getSupportCategories = async (locale: Locales): Promise<Category[]> => {
    const tree = await getSupportCategoryField(
      zd,
      Number.parseInt(CATEGORY_FIELD_ID)
    );
    const translations = await getTranslations(
      zd,
      tree,
      Number.parseInt(locale === Locales.en ? LOCALE_EN_ID : LOCALE_DE_ID)
    );

    return applyTranslations(tree, translations);
  };

  const getSupportCategoryOption = async (
    optionId: number
  ): Promise<CategoryOption | undefined> => {
    const data = await zd.ticketfields.show(Number.parseInt(CATEGORY_FIELD_ID));
    if (!data) {
      return;
    }

    const supportCategoryOption = data.custom_field_options.find(
      (o) => o.id === optionId
    );
    if (!supportCategoryOption) {
      return;
    }

    const supportCategoryNamesArray = supportCategoryOption.name.split(/:: +/);
    const finalCategoryName =
      supportCategoryNamesArray[supportCategoryNamesArray.length - 1];
    supportCategoryOption.name = finalCategoryName;

    return supportCategoryOption;
  };

  return {
    createRequest,
    getSupportCategories,
    getSupportCategoryOption,
  };
};
