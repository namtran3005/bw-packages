import {
  BulkDestination as BulkDestinationType,
} from './types/interfaces';

export type BulkDestination = BulkDestinationType;

export { EmailCommunications } from './emailCommunication';
export { PushCommunications } from './pushCommunications';
export * from './types'
