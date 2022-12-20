import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('react') as Record<string, any>),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));
