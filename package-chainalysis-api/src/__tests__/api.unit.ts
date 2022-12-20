import { ChainalysisApi } from '../api';
import {
  AlertHandler,
  TransferHandler,
  UserHandler,
  WidthdrawalHandler,
} from '../handlers';

describe('ChainalysisApi', () => {
  it('Are the handlers available', () => {
    const api = new ChainalysisApi({ apiKey: 'TEST' });
    expect(api.alert).toBeInstanceOf(AlertHandler);
    expect(api.transfer).toBeInstanceOf(TransferHandler);
    expect(api.user).toBeInstanceOf(UserHandler);
    expect(api.withdrawal).toBeInstanceOf(WidthdrawalHandler);
  });
});
