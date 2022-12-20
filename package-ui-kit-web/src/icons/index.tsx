import { ThemeInterfaceType } from '@bitwala-cryptobank-squad/package-theme';
import { useTheme } from '../theme';
import * as IconComponents from './components/index';
import { Icon, IconComponentProps, SvgProps } from './types';
import './index';

const wrapIcon = (WrappingIcon: React.FC<SvgProps>) => (
  props: IconComponentProps
): JSX.Element => {
  const { palette } = useTheme();
  return (
    <WrappingIcon
      {...mapProps(palette, props)}
      {...(props.className ? { className: props.className } : {})}
    />
  );
};

const mapProps = (
  palette: ThemeInterfaceType['palette'],
  props: IconComponentProps
): SvgProps => ({
  ...sizeToProps[props.size || 'L'],
  color: props.foreground ? palette.get(props.foreground) : 'currentColor',
});

const Icons = Object.fromEntries(
  Object.entries(IconComponents).map(([k, C]) => [k, wrapIcon(C)])
);

const sizeToProps = {
  L: {
    height: 32,
    width: 32,
    strokeWidth: 1.6,
  },
  M: {
    height: 24,
    width: 24,
    strokeWidth: 1.6,
  },
  S: {
    height: 16,
    width: 16,
    strokeWidth: 1.3,
  },
  XS: {
    height: 8,
    width: 8,
    strokeWidth: 1,
  },
};

export { Icons, Icon };

export default Icons;
