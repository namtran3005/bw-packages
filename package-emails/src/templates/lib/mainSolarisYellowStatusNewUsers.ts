import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainSolarisYellowStatusNewUsersVariables {
  firstName: string;
}

export const mainSolarisYellowStatusNewUsers = (locale: Locales): string => {
  const content = (key: string) =>
    intl.formatMessage(
      { id: `emails.mainSolarisYellowStatusNewUsers.${key}` },
      locale
    );

  return `<mj-image mj-class="top-icon" src="${
    NuriImages.ClipBoard
  }"></mj-image>
    <mj-text mj-class="h2">${content('subject')}</mj-text>

    <mj-text mj-class="left">${content('hi')}</mj-text>

    <mj-text mj-class="left">${content('intro.paragraphs.1')}</mj-text>
    <mj-text mj-class="left">${content('intro.paragraphs.2')}</mj-text>

    <mj-text mj-class="left">
      <ul>
        <li>${content('questions.1')}</li>
        <li>${content('questions.2')}</li>
        <li>${content('questions.3')}</li>
        <li>${content('questions.4')}</li>
        <li>${content('questions.5')}</li>
        <li>${content('questions.6')}</li>
        <li>${content('questions.7')}</li>
        <li>${content('questions.8')}</li>
      </ul>
    </mj-text>

  <mj-text mj-class="left">${content('support')}</mj-text>

  <mj-text mj-class="left">${content('thanks')}</mj-text>`;
};
