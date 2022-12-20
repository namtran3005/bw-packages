import { Schema, Document } from 'mongoose';
import {
  Seizure,
  Countries,
  SeizureType,
  SeizureStatus,
  SeizureCustomerType,
} from '@bitwala-cryptobank-squad/package-solaris';
import { addressShape } from './address';
import { moneyAmountSchema, MoneyAmountSubdoc } from './moneyAmount';

export interface SolarisSeizureInput extends Seizure {
  owner: string;
}
export interface SolarisSeizureDoc extends SolarisSeizureInput, Document {
  amount: MoneyAmountSubdoc;
  additionalCost?: MoneyAmountSubdoc;
  createdAt: Date;
  updatedAt?: Date;
}

export const solarisSeizureAddressShape = {
  name: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  city: {
    ...addressShape.city,
    required: false,
  },
  state: {
    ...addressShape.state,
    required: false,
  },
  country: {
    type: String,
    required: false,
    enum: (Object.values(Countries) as Array<string | null>).concat([null]),
  },
  postalCode: {
    ...addressShape.postalCode,
    required: false,
  },
};

const solarisCreditorShape = {
  ...solarisSeizureAddressShape,
  iban: {
    type: String,
    required: false,
  },
};

const solarisCreditorRepresentativeShape = {
  ...solarisCreditorShape,
  caseNumber: {
    type: String,
    required: false,
  },
};

export const solarisSeizureDebtorSchema = new Schema(
  solarisSeizureAddressShape
);

export const solarisSeizureCreditorSchema = new Schema(solarisCreditorShape);

export const solarisSeizureCreidtorRepresentativeSchema = new Schema(
  solarisCreditorRepresentativeShape
);

export const solarisSeizureSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    solarisId: {
      type: String,
      index: true,
      required: true,
    },
    enactmentDate: {
      type: String,
      required: true,
    },
    deliveryDate: {
      type: String,
      required: true,
    },
    authorityName: {
      type: String,
      required: false,
    },
    resolutionCaseNumber: {
      type: String,
      required: false,
    },
    seizureType: {
      type: String,
      enum: Object.values(SeizureType),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(SeizureStatus),
      required: true,
    },
    amount: {
      type: moneyAmountSchema,
      required: true,
    },
    additionalCost: {
      type: moneyAmountSchema,
      required: false,
    },
    debtor: {
      type: solarisSeizureDebtorSchema,
      required: false,
    },
    creditor: {
      type: solarisSeizureCreditorSchema,
      required: false,
    },
    creditorRepresentative: {
      type: solarisSeizureCreidtorRepresentativeSchema,
      required: false,
    },
    customerId: {
      type: String,
      required: false,
      index: true,
    },
    customerType: {
      type: String,
      enum: Object.values(SeizureCustomerType),
      required: false,
    },
    automaticPayoutDate: {
      type: String,
      required: false,
    },
    insolvency: {
      type: Boolean,
      required: false,
    },
    seizureProtected: {
      type: Boolean,
      required: false,
    },
    automated: {
      type: Boolean,
      required: false,
    },
    socialBenefits: {
      type: Boolean,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    multipleDrittschuldner: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-seizures' }
);
