import { randomBytes } from 'crypto';
import { UserModel } from '../model';

// attaches pseudorandom string to a doc to be used as salt for wallet pw

export const attachSecret = (userId: string) => {
  return UserModel.update(
    {
      _id: userId,
      clientSecret: { $exists: false },
    },
    {
      $set: {
        clientSecret: randomBytes(8).toString('hex'),
      },
    }
  ).exec();
};
