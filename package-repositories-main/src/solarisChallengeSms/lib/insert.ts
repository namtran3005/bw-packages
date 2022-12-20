import { SolarisChallengeSmsModel } from '../model';

export const insert = (input: {
  userId: string;
  solarisId: string;
  requestedAt: Date;
}) => {
  return SolarisChallengeSmsModel.create(input);
};
