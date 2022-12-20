import { latinize } from '@bitwala-cryptobank-squad/package-latinize';

export enum CardholderNamePatternsDeprecated {
  FIRST_LAST = 'FIRST_LAST',
  FIRST_FULL_LAST = 'FIRST_FULL_LAST',
  FIRST_MIDDLE_LAST = 'FIRST_MIDDLE_LAST',
  FIRST_MIDDLE_MIDDLE_LAST = 'FIRST_MIDDLE_MIDDLE_LAST',
  F_LAST = 'F_LAST',
}

export interface CardholderNamePatternDescriptorDeprecated {
  label: string;
  value: string;
  pattern: CardholderNamePatternsDeprecated;
}

/**
 * File only added to ensure backwards compatibility until native app is released
 */
export const getAvailableCardholderNamePatternsDeprecated = (args: {
  firstName: string;
  lastName: string;
}): CardholderNamePatternDescriptorDeprecated[] => {
  const firstName = latinize(args.firstName).toUpperCase();
  const lastName = latinize(args.lastName).toUpperCase();
  const availableCardholderNamePatterns: CardholderNamePatternDescriptorDeprecated[] = [];
  // Check if firstName have spaces in the name and is <= 20 (max length is 21, 1 is reserved for /)
  const firstNameHasSpaces = /\s/.test(firstName);
  const nameLengthOk = (firstName + lastName).length <= 20;

  const firstNameChunks = firstName.split(/\s/);

  // case 1, the best
  // no and yes - FIRST_LAST option available, return only 1 option
  if (!firstNameHasSpaces && nameLengthOk) {
    return [
      {
        value: `${firstName}/${lastName}`,
        label: `${firstName} ${lastName}`,
        pattern: CardholderNamePatternsDeprecated.FIRST_LAST,
      },
    ];
  }

  // case 2, the worst
  // no and no or (first chunk of firstName + lastName) still > 20 then
  // F_LAST option available, return only 1 option
  if (
    (!firstNameHasSpaces && !nameLengthOk) ||
    (firstNameHasSpaces && (firstNameChunks[0] + lastName).length > 20)
  ) {
    return [
      {
        value: `${firstName.slice(0, 1)}/${lastName.slice(0, 19)}`,
        label: `${firstName.slice(0, 1)} ${lastName.slice(0, 19)}`,
        pattern: CardholderNamePatternsDeprecated.F_LAST,
      },
    ];
  }

  // case 3, several options available

  // add to options FIRST_LAST if available
  const fName = `${firstNameChunks[0]}`;
  if (
    firstNameChunks[1] &&
    (fName + lastName).length <= 20 &&
    fName !== firstName
  ) {
    availableCardholderNamePatterns.push({
      value: `${firstNameChunks[0]}/${lastName}`,
      label: `${firstNameChunks[0]} ${lastName}`,
      pattern: CardholderNamePatternsDeprecated.FIRST_LAST,
    });
  }

  // add to options FIRST_MIDDLE_LAST if available
  const fmName = `${firstNameChunks[0]} ${firstNameChunks[1]}`;
  if (
    firstNameChunks[1] &&
    (fmName + lastName).length <= 20 &&
    fmName !== firstName
  ) {
    availableCardholderNamePatterns.push({
      value: `${firstNameChunks[0]} ${firstNameChunks[1]}/${lastName}`,
      label: `${firstNameChunks[0]} ${firstNameChunks[1]} ${lastName}`,
      pattern: CardholderNamePatternsDeprecated.FIRST_MIDDLE_LAST,
    });
  }

  // add to options FIRST_MIDDLE_MIDDLE_LAST if available
  const fmmName = `${firstNameChunks[0]} ${firstNameChunks[1]} ${firstNameChunks[2]}`;
  if (
    firstNameChunks[2] &&
    (fmmName + lastName).length <= 20 &&
    fmmName !== firstName
  ) {
    availableCardholderNamePatterns.push({
      value: `${firstNameChunks[0]} ${firstNameChunks[1]} ${firstNameChunks[2]}/${lastName}`,
      label: `${firstNameChunks[0]} ${firstNameChunks[1]} ${firstNameChunks[2]} ${lastName}`,
      pattern: CardholderNamePatternsDeprecated.FIRST_MIDDLE_MIDDLE_LAST,
    });
  }

  // yes and yes - FIRST_FULL_LAST option available, add to options
  if (firstNameHasSpaces && nameLengthOk) {
    availableCardholderNamePatterns.push({
      value: `${firstName}/${lastName}`,
      label: `${firstName} ${lastName}`,
      pattern: CardholderNamePatternsDeprecated.FIRST_FULL_LAST,
    });
  }

  return availableCardholderNamePatterns;
};
