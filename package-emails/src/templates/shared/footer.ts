import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export const footer = (locale: Locales) => `
<mj-section background-color="transparent" padding="0px" padding-bottom="96px">
    <mj-column width="75%">
    <mj-social icon-size="30px" mode="horizontal" padding-bottom="32px" padding-top="60px" align="center">
    <mj-social-element name="[twitter]-noshare" src="${
      NuriImages.TwitterSocial
    }" href="https://twitter.com/nuribanking" padding="5px 8px" background-color="transparent" icon-size="48px">
    </mj-social-element>
    <mj-social-element name="[youtube]-noshare" src="${
      NuriImages.YoutubeSocial
    }" href="http://youtube.com/nuribanking" padding="5px 8px" background-color="transparent" icon-size="48px">
    </mj-social-element>
    <mj-social-element name="instagram" src="${
      NuriImages.InstagramSocial
    }" href="https://www.instagram.com/NuriBanking/" padding="5px 8px" background-color="transparent" icon-size="48px">
    </mj-social-element>
    <mj-social-element name="telegram" src="${
      NuriImages.TelegramSocial
    }" href="https://t.me/NuriBanking" padding="5px 8px" background-color="transparent" icon-size="48px">
    </mj-social-element>
    </mj-social>
    <mj-text mj-class="support-help" padding="0" align="center">
      ${intl.formatMessage(
        { id: 'footer.gettingThisMessage' },
        locale
      )}<br/><br/>
      ${intl.formatMessage({ id: 'footer.aBrandOf' }, locale)}<br/>
      ${intl.formatMessage({ id: 'footer.streetName' }, locale)}<br/>
      ${intl.formatMessage({ id: 'footer.postal' }, locale)}<br/>
      ${intl.formatMessage({ id: 'footer.boardOfManagement' }, locale)}<br/>
      ${intl.formatMessage({ id: 'footer.commercialRegister' }, locale)}<br/>
        EU VAT ID | DE305362792
    </mj-text>
    </mj-column>
</mj-section>
`;
