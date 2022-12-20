import { Document, Schema } from 'mongoose';

export interface Lock {
  key: string;
  expiresAt: Date;
}

export interface LockDoc extends Lock, Document {}

const lockSchemaDefinition = {
  key: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  expiresAt: {
    type: Date,
    required: true,
  },
};

export const lockSchema: Schema = new Schema(lockSchemaDefinition, {
  timestamps: true,
  collection: 'locks',
});

lockSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 1 });
