import Axios from 'axios';

import { logger } from '@bitwala-cryptobank-squad/package-logger';
import { Images } from '../templates/images';
const log = logger('EMAILS_SCRIPTS');

interface ImageRequestResult {
  url: string;
  status: number | 'ERROR';
}

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
const assertImage = (image: string): image is keyof typeof Images =>
  // eslint-disable-next-line no-prototype-builtins
  Images.hasOwnProperty(image);

const checkRemoteImages = async () => {
  log.info('Checking remote images');
  const imagesRequests: ImageRequestResult[] = [];

  const fetchImageStatus = async (imageUrl: string) => {
    try {
      const req = await Axios.get(imageUrl);
      return req.status;
    } catch (e) {
      log.error(`Error getting image ${imageUrl}`);
      log.error(e);
      return 'ERROR';
    }
  };

  for (const image in Images) {
    if (assertImage(image)) {
      const imageUrl = Images[image];

      imagesRequests.push({
        url: imageUrl,
        status: await fetchImageStatus(imageUrl),
      });
    }
  }

  if (imagesRequests.some((obj: ImageRequestResult) => obj.status !== 200)) {
    log.error('Not all images returned 200 status');
    log.error(JSON.stringify(imagesRequests, null, 2));
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};

checkRemoteImages();
