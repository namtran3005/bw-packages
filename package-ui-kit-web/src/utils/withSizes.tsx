/*
 * Util for external use
 * Might experience some performance slowdown due to using JS to
 * get media properties
 */

import * as React from 'react';
import reactSizes from 'react-sizes';

import {
  WithSizesConfigCallback,
  WithSizesPropsAny,
  WithSizesConfigSizes,
} from '../types/sizes';
import { defaultSizes } from './defaultSizes';

export function withDefaultSizes(
  callback?: WithSizesConfigCallback<WithSizesPropsAny>
): WithSizesConfigCallback<WithSizesPropsAny> {
  return (withSizesConfig: WithSizesConfigSizes) => {
    return {
      ...defaultSizes(withSizesConfig),
      ...(callback ? callback(withSizesConfig) : {}),
    };
  };
}

type ReactAnyComponent<T, S> =
  | React.Component<T, S>
  | React.FunctionComponent<T>;

export type ReactSizesReturnType<T, S> = (
  component: ReactAnyComponent<T, S>
) => ReactAnyComponent<T, S>;

export type ReactSizesType<T, S> = (
  configCallback: WithSizesConfigCallback<WithSizesPropsAny>
) => ReactSizesReturnType<T, S>;

export function withSizes<T = {}, S = {}>(
  callback?: WithSizesConfigCallback<WithSizesPropsAny>
) {
  const emptyCallback: WithSizesConfigCallback<WithSizesPropsAny> = () => ({});
  const userCallback = callback || emptyCallback;

  return (reactSizes as ReactSizesType<T, S>)(withDefaultSizes(userCallback));
}
