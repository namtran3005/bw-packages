import { SolarisSeizureModel } from '../model';

export const deleteSeizureBySolarisId = async (
  solarisId: string
): Promise<void> => {
  await SolarisSeizureModel.remove({ solarisId });
};
