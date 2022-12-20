import * as IconComponents from './components';
import * as Icons_ from './index';

type IconsGeneric<T> = {
  [key in keyof typeof IconComponents]: T;
};

declare module '@bitwala-cryptobank-squad/package-ui-kit-web/icons' {
  export import Icons = Icons_;
  export interface Icons extends IconsGeneric<Icons_.Icon> {
    Icon: Icons_.Icon;
  }
}
