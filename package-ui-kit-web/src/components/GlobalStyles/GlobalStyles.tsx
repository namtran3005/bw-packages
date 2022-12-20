import { createGlobalStyle } from 'styled-components';
import { Colors } from '@bitwala-cryptobank-squad/package-theme';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
    background-color: ${Colors.get('backgroundLight')};
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
  #root {
    height: 100%;
  }
`;

export { GlobalStyles };
