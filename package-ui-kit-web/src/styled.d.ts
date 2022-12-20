import 'styled-components';
import { ThemeInterfaceType } from '@bitwala-cryptobank-squad/package-theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterfaceType {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
