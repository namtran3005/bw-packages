import { Document, Schema } from 'mongoose';
import { RoleDoc } from './csdRoles';

export interface UserEmail {
  address: string;
  verified: boolean;
}

export interface AgentDoc extends Document {
  id: string;
  email: string;
  password: string;
  roles: RoleDoc[];
  emails: UserEmail[];
  deletedAt?: Date;
  // Key used by accounts-js to store services
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services: any;
}

export const agentSchema: Schema = new Schema(
  {
    deletedAt: {
      type: Date,
      index: true,
    },
    emails: {
      type: [
        {
          address: {
            type: String,
            index: true,
            required: true,
          },
          verified: {
            type: Boolean,
            index: true,
            required: true,
          },
        },
      ],
    },
    roles: {
      type: Array,
      index: true,
      required: false,
    },
  },
  { timestamps: true }
);
