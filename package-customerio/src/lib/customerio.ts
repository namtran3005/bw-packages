import axios from 'axios';

const CUSTOMER_IO_PUSH_NOTIFICATION_TRACKING_URL =
  'https://track.customer.io/push/events';

// docs: https://customer.io/docs/push-developer-guide/
export const trackOpenedNotifications = async (data: {
  [key: string]: string;
}) => {
  const delivery_id: string = data['CIO-Delivery-ID'];
  const device_id: string = data['CIO-Delivery-Token'];
  const timestamp: number = Math.floor(Date.now() / 1000);

  // check if the notification is coming from customer.io
  if (delivery_id || device_id) {
    try {
      await axios.post(CUSTOMER_IO_PUSH_NOTIFICATION_TRACKING_URL, {
        delivery_id,
        event: 'opened',
        device_id,
        timestamp,
      });
    } catch (error) {
      throw new Error('Error while sending event to customer.io');
    }
  }
};
