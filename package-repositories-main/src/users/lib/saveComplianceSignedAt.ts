import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

// save compliance accepted compliance wording from compliance
export const saveComplianceSignedAt = (
  userId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { complianceSignedAt: new Date() } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
