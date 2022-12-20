import { Address } from '@bitwala-cryptobank-squad/package-solaris';

export const generateAddressAsOneString = ({
  line1,
  line2,
  postalCode,
  city,
  state,
  country,
}: Address) =>
  [line1, line2, postalCode, city, state, country]
    .filter(str => str)
    .join(' ')
    .trim();
