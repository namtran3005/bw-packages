/* eslint-disable @typescript-eslint/no-explicit-any */
import { CoinfirmAmlReport } from '../model';

export const upsert = (data: any): Promise<any> => {
  return CoinfirmAmlReport.findOneAndUpdate(
    { report_id: data.report_info_section.report_id },
    { $set: data },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  )
    .lean()
    .exec();
};
