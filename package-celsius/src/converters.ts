import {
  CelsiusTransactionState,
  CelsiusTxStateToBitwalaStatus,
} from './types';

export function toBitwalaTransactionStatus(state: string) {
  return CelsiusTxStateToBitwalaStatus[state as CelsiusTransactionState];
}
