import mongoose from 'mongoose';
import { connectionFactory } from '@bitwala-cryptobank-squad/package-schemas';

export const mainConnection = connectionFactory(mongoose);
