import { Document, Schema } from 'mongoose';

export interface RoleDoc extends Document {
  id: string;
  name: string;
  permissions: string[];
}

export const roleSchema: Schema = new Schema(
  {
    name: {
      type: String,
      index: true,
      required: true,
    },
    permissions: [String],
  },
  { timestamps: true, collection: 'roles' }
);
