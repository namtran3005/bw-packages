import * as React from 'react';
import { Root, RootProps as IconProps } from './Icon.styled';

const Icon: React.FunctionComponent<IconProps> = (props) => <Root {...props} />;

export { Icon, IconProps };
