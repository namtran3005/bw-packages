import { DocumentDefinition } from "mongoose";
import {
  SolarisRecentScaDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisRecentScaModel } from "../model";
export const findByOwnerAndDeviceId = (
  owner: string,
  deviceId: string,
): Promise<DocumentDefinition<SolarisRecentScaDoc> | null> => {
  return SolarisRecentScaModel.findOne({
    owner,
    deviceId
  }).lean().exec();
};
