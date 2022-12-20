import { ChainalysisAmlReportModel } from "../model";

/**
 * @param {string} userId The Chainalysis userId
 * @param {string} transferReference The Chainalysis transferReference
 */
export const findOneReport = ({
  userId,
  transferReference,
}: {
  userId: string;
  transferReference: string;
}) => {
  return ChainalysisAmlReportModel.findOne({
    userId,
    transferReference,
  })
    .lean()
    .exec();
};
