import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const header = (locale: Locales) => `
<mj-section background-color="transparent" padding-top="70px" padding-bottom="49px">
<mj-column width="50%">
  <mj-image mj-class="nuri-logo" css-class="nuri-logo" src="${NuriImages.NuriLogo}" alt="Nuri Logo" width="100px"></mj-image>
</mj-column>
</mj-section>
`;
