import { PriceAlertsModel } from '../model';

export const drop = (): Promise<boolean> => PriceAlertsModel.collection.drop();
