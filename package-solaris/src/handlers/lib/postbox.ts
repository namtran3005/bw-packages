import { PostboxItem } from '../../types';

import { Handler } from '../handler';

export class PostboxHandler extends Handler {
  public async getOne(itemId: string): Promise<PostboxItem> {
    return this.client.get({
      url: `/postbox/items/${itemId}`,
    });
  }

  public async getDocument(itemId: string): Promise<Buffer> {
    const res = await this.client.get({
      responseType: 'arraybuffer',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      responseEncoding: 'binary',
      url: `/postbox/items/${itemId}/document`,
    });
    return res.data;
  }
}
