import {
  render as rtlRender,
  waitFor,
  RenderOptions as RTLRenderOptions,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { WebAppThemeProvider } from '../theme';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

type RenderOptions = RTLRenderOptions;

function renderWithTestHarness(
  ui: React.ReactElement,
  renderOptions: RenderOptions = {}
) {
  function Wrapper({ children }: any) {
    return (
      <MemoryRouter>
        <WebAppThemeProvider>{children}</WebAppThemeProvider>
      </MemoryRouter>
    );
  }

  return rtlRender(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
}

// Use if you're in a hurry (better than nothing)
// be sure to verify no memory leak from implicit
// waitFor by adding these flags to jest: --runInBand --detectOpenHandles
async function renderAct(ui: React.ReactElement, options: RenderOptions = {}) {
  const view = renderWithTestHarness(ui, options);
  return await waitFor(() => view, {
    timeout: 5000,
    onTimeout: (e) => {
      // eslint-disable-next-line no-console
      console.error(e);
      return e;
    },
  });
}

export * from '@testing-library/react';

export { renderWithTestHarness, renderAct, userEvent };
