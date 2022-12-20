import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';

export interface MainAccountSignupVariables {
  firstName: string;
  url: string;
}

export const mainAccountSignup = (locale: Locales) => `
<mj-text mj-class="left" line-height="140%" font-weight="500" font-size="16px" padding-top="70px" padding-bottom="22px">${intl.formatMessage(
  { id: 'emails.mainAccountSignup.hi' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" style="color: #2C232E;"><a style="color: #2C232E; font-family: Inter; font-weight: 500; font-size: 16px; line-height: 19px;" ses:no-track href={{url}} />${intl.formatMessage(
  { id: 'emails.mainAccountSignup.cta' },
  locale
)}</a></mj-button>
<mj-text mj-class="left" line-height="140%" font-weight="400" font-size="14px" color="#2C232E">${intl.formatMessage(
  { id: 'emails.mainAccountSignup.otherLink' },
  locale
)}<a style="font-family: Inter; color: #BEAAFF; font-weight: 400; font-size: 14px; line-height: 140%;" ses:no-track href="{{url}}&utm_source=CTAlink" />{{url}}</mj-text>
<mj-text mj-class="left" font-weight="500" font-size="16px">${intl.formatMessage(
  { id: 'emails.mainAccountSignup.attachedBelow' },
  locale
)}</mj-text>
<mj-text mj-class="left" font-weight="500" font-size="16px">${intl.formatMessage(
  { id: 'emails.mainAccountSignup.thanks' },
  locale
)}</mj-text>
<mj-text mj-class="left" padding-top="20" line-height="140%" font-size="12px" font-weight="normal" color="#2C232E">
  <mj-text mj-class="left" font-size="12px" font-weight="normal" color="#2C232E">
    ${intl.formatMessage(
      { id: 'emails.mainAccountSignup.warningTitle' },
      locale
    )}
  </mj-text></br>
  <mj-text mj-class="left" font-size="12px" font-weight="normal" color="#2C232E">
    ${intl.formatMessage(
      { id: 'emails.mainAccountSignup.warningBody' },
      locale
    )}
    <a style="color: #beaaff" href="${intl.formatMessage(
      { id: 'index.supportCenterUrl' },
      locale
    )}"
    target="_blank"
    rel="noopener noreferrer"
    >
      ${intl.formatMessage(
        { id: 'emails.mainAccountSignup.supportCenterText' },
        locale
      )}.
    </a>
  </mj-text>
</mj-text>
`;
