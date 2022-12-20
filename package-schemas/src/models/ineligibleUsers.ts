import { Document, Schema } from 'mongoose';
import { isEmail } from 'validator';

export const emailValidator = (email: string) => {
  return isEmail(email);
};

export interface VerificationToken {
  token: string;
  when: Date;
}

export interface IneligibleUser {
  email: string;
  emailVerified?: boolean;
  firstName: string;
  lastName: string;
  addressCountry: string;
  identificationDocumentType?: string;
  locale?: string;
  marketing?: boolean;
  verificationTokens?: VerificationToken[];
  ineligibleDocument?: string;
}

export interface IneligibleUserDoc extends Document, IneligibleUser {
  id: string;
  createdAt: Date;
}

export const verificationTokenSchema: Schema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    when: {
      type: Date,
      required: true,
    },
  },
  { _id: false }
);

export const ineligibleUsersSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    emailVerified: {
      type: Boolean,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    addressCountry: {
      type: String,
      required: true,
    },
    identificationDocumentType: {
      type: String,
      required: false,
    },
    ineligibleDocument: {
      type: String,
      required: false,
    },
    marketing: {
      type: Boolean,
      required: false,
    },
    locale: {
      type: String,
      required: false,
    },
    verificationTokens: {
      type: [
        {
          type: verificationTokenSchema,
          required: true,
        },
      ],
      required: false,
    },
  },
  { timestamps: true, collection: 'ineligible-users' }
);

ineligibleUsersSchema.index({
  emailVerified: 1,
  'verificationTokens.token': 1,
});
