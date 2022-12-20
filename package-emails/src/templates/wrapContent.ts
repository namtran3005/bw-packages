import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { header, footer } from './shared';

export const wrapContent = (innerContent: string, locale: Locales) => `
<mjml>
  <mj-head>
    <mj-style inline="inline">a { text-decoration: none!important; color:#0038FF; }</mj-style>
    <mj-style inline="inline"> .footer-link { text-decoration: underlined!important; color:#abadb7; }</mj-style>
    <mj-style>
      @font-face {
        font-family: "Signifier";
        src: url("https://public.nuri.com/email-assets/fonts/signifier-web-extralight.woff2") format("woff2"),
          url("https://public.nuri.com/email-assets/fonts/signifier-web-extralight.woff") format("woff");
        font-weight: 200;
        font-style: normal;
        font-display: block;
        unicode-range: U+000-5FF;
      }
      @font-face {
        font-family: "Inter";
        src: url("https://public.nuri.com/email-assets/fonts/Inter-Black.ttf")
          format("woff");
        font-weight: regular;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("https://public.nuri.com/email-assets/fonts/Inter-Bold.ttf")
          format("woff");
        font-weight: bold;
        font-style: bold;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("https://public.nuri.com/email-assets/fonts/Inter-Regular.ttf")
          format("woff");
        font-weight: regular;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("https://public.nuri.com/email-assets/fonts/Inter-Medium.ttf")
          format("woff");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("https://public.nuri.com/email-assets/fonts/Inter-SemiBold.ttf")
          format("woff");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
    </mj-style>
    <mj-attributes>
      <mj-all font-family="'Inter', sans-serif" align="left" padding="0px"/>
      <!-- Sections!-->
      <mj-class name="content" border-radius="9px" background-color="#F0F0F0" padding-left="6%" padding-right="6%" padding-bottom="48px" padding-top="0px"></mj-class>
      <mj-class name="content" background-color="#F0F0F0" padding-left="6%" padding-right="6%" padding-bottom="48px" padding-top="0px"></mj-class>
      <mj-class name="contact-support" padding-bottom="32px" padding-top="42px"></mj-class>
      <!-- Titles!-->
      <mj-class name="h1" color="#000000" padding="10px 25px" font-size="44px" font-weight="800" letter-spacing="-1.5px" line-height="39px"/>
      <mj-class name="h2" color="#000000" font-family="'Signifier', 'Times New Roman', serif" padding="10px 25px 25px 25px" font-size="32px" font-weight="400" letter-spacing="-1.5px" line-height="36px" align="left"/>
      <mj-class name="h3" color="#000000" padding="10px 25px" font-size="24px" font-weight="800" letter-spacing="-1px" line-height="28px"/>
      <mj-class name="h4" color="#000000" padding="8px 24px 0" font-size="20px" font-weight="800" letter-spacing="-1px" line-height="28px" />
      <!-- Text!-->
      <mj-text padding="16px 25px" font-size="18px" line-height="24px" color="#000000"></mj-text>
      <mj-font name="Lato" href="https://fonts.googleapis.com/css?family=Inter" />
      <mj-class name="sub-text" font-size="12px" line-height="1.6" padding-top="30px"/>
      <mj-class name="support-help" font-size="14px" line-height="1.4" color="#2C232E" weight="bold" padding="0"/>
      <mj-class name="left" align="left"/>
      <mj-class name="bold" font-weight="700"/>
      <mj-class name="small-text" font-size="12px"/>
      <mj-class name="link-text" color="#0038FF"/>
      <!-- Images!-->
      <mj-class name="top-icon" width="150px" height="150px" alt="Icon" padding-top="24px" bottom-padding="0" align="center"/>
      <mj-class name="support-face" width="54px" height="54px" alt="Icon" padding-bottom="10px"/>
      <mj-class name="nuri-logo" width="180px" height="auto" alt="Nuri" padding-top="24px" bottom-padding="0" align="center" />
      <mj-class name="content-image" width="550px" height="auto" alt="Icon" padding="16px 0px" bottom-padding="0" align="center" />
      <!-- Buttons!-->
      <mj-class name="primary-button" align="left" background-color="#BEAAFF" color="#2C232E" border-radius="32px" font-size="18px" font-weight="500" line-height="24px" padding="10px" padding-left="20px" border-radius="0px"  inner-padding="12px 45px 12px 45px"/>
      <mj-class name="primary-button-preregister" background-color="#00ADEE" color="#FFFFFF" font-size="18px" font-weight="bold" line-height="24px" padding="10px 10px 48px 10px" border-radius="0px"  inner-padding="12px 45px 12px 45px"/>
      <mj-class name="secondary-button" border="2px solid #00ADEE;" background-color="transparent" color="#00ADEE" font-size="18px" font-weight="bold" line-height="24px" padding="10px" border-radius="0px"  inner-padding="12px 45px 12px 45px"/>
      <mj-social-element />
      <!-- All styles!-->
    </mj-attributes>
  </mj-head>


  <mj-body background-color="#D4D2D2">
  ${header(locale)}
    <mj-section mj-class="content">
      <mj-column>
        ${innerContent}
      </mj-column>
    </mj-section>
    ${
      innerContent.includes('Admin Message')
        ? ` <mj-section padding-bottom="160px"></mj-section>`
        : footer(locale)
    }
  </mj-body>
</mjml>
`;
