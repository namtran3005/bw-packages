import { jest } from '@jest/globals';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import snapshotDiff from 'snapshot-diff';
import failOnConsole from 'jest-fail-on-console';
import 'jest-styled-components';
import 'snapshot-diff/extend-expect';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

jest.useFakeTimers();

const consoleFilter = (errorMessage: string) => {
  // allow deprecated bitwala code the spew out
  // error messages, but silence them.
  // noinspection UnnecessaryLocalVariableJS
  const deprecatedStackTrace = /__tests__/i.test(errorMessage);
  return deprecatedStackTrace;
};

failOnConsole({
  shouldFailOnWarn: true,
  shouldFailOnError: true,
  silenceMessage: consoleFilter,
});

expect.addSnapshotSerializer(snapshotDiff.getSnapshotDiffSerializer());
