import { PostboxHandler } from '../postbox';
import { solarisClientFactory } from '../../..';
import { Handler } from '../../handler';

const client = solarisClientFactory({
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
});
const postbox = new PostboxHandler(client);
const itemId = 'itemId';

describe('Postbox handlers', () => {
  beforeAll(() => {
    jest.spyOn(client, 'get');
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be an instance of Handler class', () => {
    expect(postbox).toBeInstanceOf(Handler);
  });

  it('should GET from /postbox/items/:itemId', () => {
    postbox.getOne(itemId);
    expect(client.get).toBeCalledWith({
      url: '/postbox/items/itemId',
    });
  });

  it('should GET from /postbox/items/:itemId/document', () => {
    postbox.getDocument(itemId);
    expect(client.get).toBeCalledWith({
      responseType: 'arraybuffer',
      responseEncoding: 'binary',
      url: '/postbox/items/itemId/document',
    });
  });
});
