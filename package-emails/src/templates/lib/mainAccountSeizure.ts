import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { Seizure } from '@bitwala-cryptobank-squad/package-solaris';
import { intl } from '../../locales';
import { NuriImages } from '../images';

export interface MainAccountSeizureVariables {
  firstName: string;
  seizureType: string;
  seizureId: string;
  deliveryDate: string;
  enactmentDate: string;
  authorityName: string;
  resolutionCaseNumber: string;
  amount?: string;
  additionalCost?: string;
  debtor?: Seizure['debtor'];
  debtorAddress?: string;
  customerId?: string;
  customerIban: string;
  availableBalance?: string;
  creditor: Seizure['creditor'];
  creditorAddress?: string;
  creditorRepresentative: Seizure['creditorRepresentative'];
  creditorRepresentativeAddress?: string;
}

export const mainAccountSeizure = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.Locked
}" alt="delivery"></mj-image>
<mj-text mj-class="h2" padding-top="24px">${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.title' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.textPart1' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.textPart2' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.textPart3' },
  locale
)}</mj-text>
<mj-text mj-class="left" padding-bottom="0"><b>${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.seizureInformation' },
  locale
)}</b></mj-text>
<mj-text mj-class="left" padding-bottom="0">${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.seizure.title' },
  locale
)}</mj-text>
<mj-text mj-class="left" padding-bottom="0" padding-top="0">
  <ul style="margin-bottom: 0;margin-top: 0;">
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.seizure.id' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.seizure.notifyDate' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.seizure.decisionDate' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.seizure.authorityName' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.seizure.fileNumber' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.seizure.type' },
      locale
    )}</li>
    {{#if amount}}
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.seizure.amount' },
      locale
    )}</li>
    {{/if}}
    {{#if additionalCost}}
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.seizure.additionalCost' },
      locale
    )}</li>
    {{/if}}
  </ul>
</mj-text>
<mj-text mj-class="left" padding-bottom="0">${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.customerInformation.title' },
  locale
)}</mj-text>
<mj-text mj-class="left" padding-bottom="0" padding-top="0">
  <ul style="margin-bottom: 0;margin-top: 0;">
    {{#if debtor.name}}
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.customerInformation.name' },
      locale
    )}</li>
    {{/if}}
    {{#if debtorAddress}}
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.customerInformation.address' },
      locale
    )}</li>
    {{/if}}
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.customerInformation.customerId' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.customerInformation.iban' },
      locale
    )}</li>
    {{#if availableBalance}}
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountSeizure.customerInformation.availableBalance' },
      locale
    )}</li>
    {{/if}}
  </ul>
</mj-text>
<mj-text mj-class="left">
  {{#if creditor}}
  <mj-text mj-class="left" padding-bottom="0">${intl.formatMessage(
    { id: 'emails.mainAccountSeizure.creditorInformation.title' },
    locale
  )}</mj-text>
  <mj-text mj-class="left" padding-bottom="0" padding-top="0">
    <ul style="margin-bottom: 0;margin-top: 0;">
      {{#if creditor.name}}
      <li>${intl.formatMessage(
        { id: 'emails.mainAccountSeizure.creditorInformation.name' },
        locale
      )}</li>
      {{/if}}
      {{#if creditorAddress}}
      <li>${intl.formatMessage(
        { id: 'emails.mainAccountSeizure.creditorInformation.address' },
        locale
      )}</li>
      {{/if}}
      {{#if creditor.iban}}
      <li>${intl.formatMessage(
        { id: 'emails.mainAccountSeizure.creditorInformation.iban' },
        locale
      )}</li>
      {{/if}}
    </ul>
  </mj-text>
  {{/if}}
</mj-text>
<mj-text mj-class="left">
  {{#if creditorRepresentative}}
  <mj-text mj-class="left" padding-bottom="0">${intl.formatMessage(
    { id: 'emails.mainAccountSeizure.creditorRepresentation.title' },
    locale
  )}</mj-text>
  <mj-text mj-class="left" padding-top="0">
    <ul style="margin-bottom: 0;margin-top: 0;">
      {{#if creditorRepresentative.name}}
      <li>${intl.formatMessage(
        { id: 'emails.mainAccountSeizure.creditorRepresentation.name' },
        locale
      )}</li>
      {{/if}}
      {{#if creditorRepresentativeAddress}}
      <li>${intl.formatMessage(
        { id: 'emails.mainAccountSeizure.creditorRepresentation.address' },
        locale
      )}</li>
      {{/if}}
      {{#if creditorRepresentative.caseNumber}}
      <li>${intl.formatMessage(
        { id: 'emails.mainAccountSeizure.creditorRepresentation.fileNumber' },
        locale
      )}</li>
      {{/if}}
      {{#if creditorRepresentative.iban}}
      <li>${intl.formatMessage(
        { id: 'emails.mainAccountSeizure.creditorRepresentation.iban' },
        locale
      )}</li>
      {{/if}}
    </ul>
  </mj-text>
  {{/if}}
</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.anyQuestions' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" href="mailto:support@nuri.com">${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.cta' },
  locale
)}</mj-button>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountSeizure.thanks' },
  locale
)}</mj-text>`;
