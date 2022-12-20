import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainReferralTransactionVariables {
  firstName: string;
  referredUserFirstName: string;
  reward: string;
}

export const mainReferralTransaction = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.SendPlain
}" alt="email"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainReferralTransaction.friendJoined' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainReferralTransaction.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainReferralTransaction.greatJob' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainReferralTransaction.weAim' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainReferralTransaction.youWillBeNotified' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainReferralTransaction.thanks' },
  locale
)}</mj-text>
`;
