import axios from 'axios';
import { trackOpenedNotifications } from '../lib/customerio';

jest.mock('axios');

const CUSTOMER_IO_PUSH_NOTIFICATION_TRACKING_URL =
  'https://track.customer.io/push/events';

const MOCK_REMOTE_CIO_NOTIFICATION_DATA: { [key: string]: string } = {
  'CIO-Delivery-ID': '',
  'CIO-Delivery-Token': 'da186',
};

const MOCK_REMOTE_NOTIFICATION_DATA: { [key: string]: string } = {
  title: 'hello',
  body: 'world!',
};

describe('track opened remote notification', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => 1635953161);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call customer.io with the correct payload', async () => {
    await trackOpenedNotifications(MOCK_REMOTE_CIO_NOTIFICATION_DATA);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      CUSTOMER_IO_PUSH_NOTIFICATION_TRACKING_URL,
      {
        delivery_id: '',
        event: 'opened',
        device_id: 'da186',
        timestamp: Math.floor(Date.now() / 1000),
      }
    );
  });

  it('should not call customer.io when the notification is not from there', async () => {
    await trackOpenedNotifications(MOCK_REMOTE_NOTIFICATION_DATA);
    expect(axios.post).toHaveBeenCalledTimes(0);
  });
});
