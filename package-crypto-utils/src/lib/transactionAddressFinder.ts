import {
  BitgoEntry,
  BitcoinTransaction,
  BitcoinTransactionDoc,
  EthereumTransactionDoc,
  EthereumTransaction,
} from '@bitwala-cryptobank-squad/package-schemas';

/**
 * Retrieves sender or receiver address.
 */
export const getOtherAddressFromTx = (
  bitcoinTxnDoc: BitcoinTransactionDoc | BitcoinTransaction
) => {
  return isIncomingTxn(bitcoinTxnDoc)
    ? getSenderEntryAddress(bitcoinTxnDoc)
    : getRecipientEntryAddress(bitcoinTxnDoc);
};

export const getEthAddressFromTx = (
  transaction: EthereumTransaction | EthereumTransactionDoc
) => {
  return isIncomingTxn(transaction) ? transaction.from : transaction.to;
};

export const isIncomingTxn = (
  bitcoinTxnDoc:
    | BitcoinTransactionDoc
    | BitcoinTransaction
    | EthereumTransaction
    | EthereumTransactionDoc
) => bitcoinTxnDoc.value >= 0;

export const getSenderEntryAddress = (
  bitcoinTxnDoc: BitcoinTransactionDoc | BitcoinTransaction
): string | null => {
  const isIncoming = isIncomingTxn(bitcoinTxnDoc);
  // if txn is incoming then the sender entry may not contain wallet field (sent to not a Bitgo wallet)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const senderEntry: BitgoEntry = bitcoinTxnDoc.entries.find(
    (entry: BitgoEntry) =>
      entry.value < 0 &&
      !entry.isChange &&
      (isIncoming
        ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          entry.wallet! !== bitcoinTxnDoc.walletId
        : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          entry.wallet! === bitcoinTxnDoc.walletId)
  )!;
  return senderEntry ? senderEntry.address : null;
};

export const getRecipientEntryAddress = (
  bitcoinTxnDoc: BitcoinTransactionDoc | BitcoinTransaction
): string | null => {
  const isIncoming = isIncomingTxn(bitcoinTxnDoc);
  // We need to remove all the entries that have `isPayGo` (bitgo fees)
  const entries = bitcoinTxnDoc.entries.filter(entry => !entry.isPayGo);
  // if txn is outgoing then the recipient entry may not contain wallet field (sent not from a Bitgo wallet)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  let recipientEntry: BitgoEntry | null = entries.find(
    entry =>
      entry.value >= 0 &&
      !entry.isChange &&
      (isIncoming
        ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          entry.wallet! === bitcoinTxnDoc.walletId
        : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          entry.wallet! !== bitcoinTxnDoc.walletId)
  )!;
  // Try to see if user is sending transaction to his wallet
  if (!recipientEntry) {
    const wallet = entries[0].wallet;
    if (wallet) {
      const notAllSameWallet = entries.find(entry => entry.wallet !== wallet);
      recipientEntry = !notAllSameWallet ? entries[entries.length - 1] : null;
    }
  }
  return recipientEntry ? recipientEntry.address : null;
};
