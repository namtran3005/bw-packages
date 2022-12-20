import * as React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider';
import { default as DateFnsUtils } from '@date-io/date-fns';

// eslint-disable-next-line import/default
import enLocale from 'date-fns/locale/en-US';
// eslint-disable-next-line import/default
import deLocale from 'date-fns/locale/de';

const localeMap: { [key: string]: Locale } = {
  en: enLocale,
  de: deLocale,
};

interface PickersUtilsProviderProps {
  locale?: string;
  children: MuiPickersUtilsProviderProps['children'];
  utils?: MuiPickersUtilsProviderProps['utils'];
}

const PickersUtilsProvider: React.FunctionComponent<PickersUtilsProviderProps> = ({
  locale,
  ...cleanProps
}) => (
  <MuiPickersUtilsProvider
    utils={DateFnsUtils}
    locale={locale ? localeMap[locale] : enLocale}
    {...cleanProps}
  />
);

export { PickersUtilsProvider, PickersUtilsProviderProps };
