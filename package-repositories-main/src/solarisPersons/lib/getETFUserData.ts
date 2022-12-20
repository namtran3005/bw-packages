import { SolarisPersonDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisPersonModel } from '../model';

export type GetETFUserDataType = Pick<
  SolarisPersonDoc,
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'salutation'
  | 'address'
  | 'birthCity'
  | 'birthCountry'
  | 'birthDate'
  | 'nationality'
  | 'solarisId'
>;

export const getETFUserData = async (
  userID: string
): Promise<GetETFUserDataType[] | null> => {
  return SolarisPersonModel.find(
    {
      owner: userID,
    },
    {
      firstName: 1,
      lastName: 1,
      email: 1,
      salutation: 1,
      address: 1,
      birthCountry: 1,
      birthCity: 1,
      birthDate: 1,
      nationality: 1,
      solarisId: 1,
    }
  );
};
