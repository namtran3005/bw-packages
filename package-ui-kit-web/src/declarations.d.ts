declare module 'react-sizes';
declare module 'qrious';
declare module 'victory';
declare module 'test-utils';
declare module 'jest-styled-components/serializer';
declare module 'jest-specific-snapshot';

declare module '@material-ui/styles/makeStyles' {
  export type StylesHook<X> = any;
}

declare module '@material-ui/core/styles' {
  export type WithStyles<X, Y = true> = any;
  export type StyledComponentProps<X> = any;
  export type Theme = any;
}

declare module 'global' {
  interface Array<T> {
    includes(x: any): boolean;
  }

  namespace jest {
    interface Matchers<R, T> {
      toMatchDiffSnapshot(
        valueB: any,
        options?: {
          expand?: boolean;
          colors?: boolean;
          contextLines?: number;
          stablePatchmarks?: boolean;
          aAnnotation?: string;
          bAnnotation?: string;
        },
        testName?: string
      ): R;
    }
  }
}
