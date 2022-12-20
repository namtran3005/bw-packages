import { SepaCreditTransfer } from './sepaCreditTransfers';

export interface TransferBatch {
  solarisId: string;
  status: string; // TODO: figure out transfer batch statuses and use enum
  sepaCreditTransfers: SepaCreditTransfer[];
}
