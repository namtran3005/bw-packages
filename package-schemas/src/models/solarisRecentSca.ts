import { Document, Schema } from "mongoose";
export interface SolarisRecentScaDoc extends Document {
  owner: string;
  deviceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export const solarisRecentScaSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    deviceId: {
      type: String,
      required: true,
      index: true,
    },
  },
  { 
    timestamps: true,
    collection: "solaris-recent-sca",
  }
);
