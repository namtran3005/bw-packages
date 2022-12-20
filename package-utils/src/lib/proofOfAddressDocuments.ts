import { Countries } from '@bitwala-cryptobank-squad/package-solaris';

export const nonLatinAlphabetCountries = [Countries.GR, Countries.BG];

export const isNonLatinAlphabetCountry = (country: Countries) =>
  nonLatinAlphabetCountries.includes(country);
