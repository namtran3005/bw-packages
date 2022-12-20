import { Countries } from '../../misc/lib/countries';

export enum NoTinReasons {
  NOT_ASSIGNED_YET = 'NOT_ASSIGNED_YET',
  NOT_ASSIGNED_BY_COUNTRY = 'NOT_ASSIGNED_BY_COUNTRY',
  OTHER = 'OTHER',
}

export interface TaxIdentificationInput {
  country: Countries;
  number?: string;
  primary: boolean;
  reasonNoTin?: NoTinReasons;
  reasonDescription?: string;
}

export interface TaxIdentification extends TaxIdentificationInput {
  solarisId: string;
}
