export const bitcoinRegexMainnet = /^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$/;
export const bitcoinRegexTestnet = /^[2mn]/;

export const nativeSegwitRegexMainnet = /\bbc(0([ac-hj-np-z02-9]{39}|[ac-hj-np-z02-9]{59})|1[ac-hj-np-z02-9]{8,87})\b/;
export const nativeSegwitRegexTestnet = /\btb(0([ac-hj-np-z02-9]{39}|[ac-hj-np-z02-9]{59})|1[ac-hj-np-z02-9]{8,87})\b/;

export const ethereumRegexMainnet = /^0x[a-fA-F0-9]{40}$/;
export const ethereumRegexTestnet = /^0x[a-fA-F0-9]{40}$/;
