import { Document, Schema } from 'mongoose';

export interface InvitationsConfigInput {
  date: string;
  availableIdNowSlots: number;
  availableIdNowSlotsAfternoon?: number;
}

export interface InvitationsConfigDoc extends Document, InvitationsConfigInput {
  sendingDone: boolean;
  sendingDoneAfternoon: boolean;
}

export const invitationsConfigsSchema: Schema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    availableIdNowSlots: {
      type: Number,
      required: true,
    },
    sendingDone: {
      type: Boolean,
      default: false,
    },
    availableIdNowSlotsAfternoon: {
      type: Number,
      required: false,
    },
    sendingDoneAfternoon: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, collection: 'invitations-configs' }
);
