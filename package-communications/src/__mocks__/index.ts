let mockedPushInstance: Record<string, any>;
let mockedEmailInstance: Record<string, any>;

export const EmailCommunications = jest.fn(() => {
  if (mockedEmailInstance) return mockedEmailInstance;

  mockedEmailInstance = {
    sendEmail: jest.fn(),
    prepareEmail: jest.fn(),
    sendEmailAPI: jest.fn(),
  };

  return mockedEmailInstance;
});

export const PushCommunications = jest.fn(() => {
  if (mockedPushInstance) return mockedPushInstance;

  mockedPushInstance = {
    sendPush: jest.fn(),
  };

  return mockedPushInstance;
});
