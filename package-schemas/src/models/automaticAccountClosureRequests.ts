import { Document, Schema } from 'mongoose';
import { AutomaticAccountClosureStatuses, AutomaticAccountClosureReason } from '@bitwala-cryptobank-squad/package-solaris';

export interface AutomaticAccountClosureRequests {
  isAcrRequestSuccessfull: boolean;
  solarisId: string;
  closureReason: AutomaticAccountClosureReason;
  status: AutomaticAccountClosureStatuses;
  accountId: string;
  technicalClosureDate?: string;
  legalClosureDate: string;
  payoutAllowed?: string;
  acrUpdatedAt: string;
  bookingsAssociated: boolean;
  openReservations: boolean;
}

export type AutomaticAccountClosureRequestsDoc = Document & AutomaticAccountClosureRequests;

const automaticAccountClosureRequestsShape = {
  isAcrRequestSuccessfull: {
    type: Boolean,
    required: true
  },
  solarisId: {
    type: String,
    required: true
  },
  closureReason: {
    type: String,
    enum: Object.values(AutomaticAccountClosureReason),
    required: true
  },
  status: {
    type: String,
    enum: Object.values(AutomaticAccountClosureStatuses),
    required: true
  },
  accountId: {
    type: String,
    required: true
  },
  technicalClosureDate: {
    type: String
  },
  legalClosureDate: {
    type: String,
    required: true
  },
  payoutAllowed: {
    type: String
  },
  /** acrUpdatedAtfrom Acr request which originally is updatedAt, but since mongo has the same updatedAt  */
  acrUpdatedAt: {
    type: String,
    required: true
  },
  bookingsAssociated: {
    type: Boolean,
    required: true
  },
  openReservations: {
    type: Boolean,
    required: true
  }
};

export const automaticAccountClosureRequestsSchema: Schema = new Schema(
  automaticAccountClosureRequestsShape,
  { timestamps: true, collection: 'automatic-account-closure-requests' }
);