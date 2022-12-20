import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface CsdMissingTaxInfoDaysVariables {
  days: number;
  missingDays: number;
  firstName: string;
  controlCentreTaxUrl: string;
}

export const csdMissingTaxInfoDays = (locale: Locales): string => {
  const content = (key: string) =>
    intl.formatMessage({ id: `emails.csdMissingTaxInfoDays.${key}` }, locale);

  return `<mj-image mj-class="top-icon" src="${
    NuriImages.ClipBoard
  }"></mj-image>
    <mj-text mj-class="h2">${content('title')}</mj-text>

    <mj-text mj-class="left">${content('hi')}</mj-text>

    <mj-text mj-class="left">${content('intro.paragraphs.1')}</mj-text>
    <mj-text mj-class="left">${content('intro.paragraphs.2')}</mj-text>

    <mj-text mj-class="h3">${content('why.heading')}</mj-text>
    <mj-text mj-class="left">${content('why.paragraph')}</mj-text>        

    <mj-text mj-class="h3">${content('how.heading')}</mj-text>
    <mj-text mj-class="left">
      1. ${content('how.steps.1')}<br>
      2. ${content('how.steps.2')}<br>
      3. ${content('how.steps.3')}<br>
      4. ${content('how.steps.4')}
    </mj-text>

    <mj-button mj-class="primary-button" href="{{controlCentreTaxUrl}}">${content(
      'cta'
    )}</mj-button>

  <mj-text mj-class="left">${content('contactSupport')}</mj-text>

  <mj-text mj-class="left">${content('thanks')}</mj-text>`;
};
