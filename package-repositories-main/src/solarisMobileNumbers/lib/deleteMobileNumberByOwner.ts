import { SolarisMobileNumberModel } from '../model';

export const deleteMobileNumberByOwner = async (
  owner: string
): Promise<void> => {
  await SolarisMobileNumberModel.remove({ owner });
};
