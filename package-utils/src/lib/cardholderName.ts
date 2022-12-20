import { latinize } from '@bitwala-cryptobank-squad/package-latinize';

export enum CardholderNamePatterns {
  FIRST_AND_MIDDLE_AND_LAST = 'FIRST_AND_MIDDLE_AND_LAST', // Full first, middle and last name(s), e.g. Jose Luis Rodriguez Zapatero
  FIRST_AND_LAST = 'FIRST_AND_LAST', // First name and last name(s), e.g. Jose Rodriguez Zapatero
  MIDDLE_AND_LAST = 'MIDDLE_AND_LAST', // Middle name and full last name(s), e.g. Luis Rodriguez Zapatero
  SHORTENED_FIRST_AND_LAST = 'SHORTENED_FIRST_AND_LAST', // Short first name and full last name(s), e.g. J. Rodriguez Zapatero
  SHORTENED_FIRST_AND_FIRST_PART_OF_LAST = 'SHORTENED_FIRST_AND_FIRST_PART_OF_LAST', // Short first name and first of the last name(s), e.g. J. Rodriguez
  SHORTENED_FIRST_AND_LAST_PART_OF_LAST = 'SHORTENED_FIRST_AND_LAST_PART_OF_LAST', // Short first name and last of the last name, e.g. J. Zapatero
  SHORTENED_FIRST_AND_CUT_OFF_LAST = 'SHORTENED_FIRST_AND_CUT_OFF_LAST', // Short first name and cut off last name to max 18 characters, e.g. John WithAVeryLongLastN
}

const MAX_NAME_LENGTH = 21; // Max name length allowed on VISA cards

const isAllowed = (first: string, last: string) =>
  `${first} ${last}`.length <= MAX_NAME_LENGTH;

const getResult = (
  first: string,
  last: string,
  pattern: CardholderNamePatterns
): CardholderNamePatternDescriptor => ({
  label: `${first} ${last}`,
  value: `${first}/${last}`,
  pattern,
});

export interface CardholderNamePatternDescriptor {
  label: string;
  value: string;
  pattern: CardholderNamePatterns;
}

interface Props {
  firstName: string; // Contains first name and potential middle names
  lastName: string;
}

/**
 * Returns an array of naming options for VISA card which all are 21 characters or less long.
 * If entire name is less than 21 character long, return only this option.
 */
export const getAvailableCardholderNamePatterns = (
  props: Props
): CardholderNamePatternDescriptor[] => {
  const firstName = latinize(props.firstName).toUpperCase();
  const lastName = latinize(props.lastName).toUpperCase();
  const result: CardholderNamePatternDescriptor[] = [];

  // Entire name is below max character count
  if (isAllowed(firstName, lastName)) {
    result.push(
      getResult(
        firstName,
        lastName,
        CardholderNamePatterns.FIRST_AND_MIDDLE_AND_LAST
      )
    );

    return result; // End process since entire name fits on card
  }

  // If the entire names doesn't fit, add additional options

  const firstNameArr = firstName.split(' ');
  const firstNameWithoutMiddleName = firstNameArr[0];
  const hasMultipleFirstNames = firstNameArr.length > 1;

  // User multiple first names
  if (hasMultipleFirstNames) {
    const middleName = firstNameArr[firstNameArr.length - 1]; // Last middle name

    // First name without any middle names
    if (isAllowed(firstNameWithoutMiddleName, lastName)) {
      result.push(
        getResult(
          firstNameWithoutMiddleName,
          lastName,
          CardholderNamePatterns.FIRST_AND_LAST
        )
      );
    }

    // Last middle name
    if (isAllowed(middleName, lastName)) {
      result.push(
        getResult(middleName, lastName, CardholderNamePatterns.MIDDLE_AND_LAST)
      );
    }
  }

  const shortFirstName = `${firstNameWithoutMiddleName.substring(0, 1)}.`;

  // Name with shortened first name
  if (isAllowed(shortFirstName, lastName)) {
    result.push(
      getResult(
        shortFirstName,
        lastName,
        CardholderNamePatterns.SHORTENED_FIRST_AND_LAST
      )
    );
  }

  const lastNameArr = lastName.split(' ');
  const lastPartOfLastName = lastNameArr[lastNameArr.length - 1];
  const hasMultipleLastNames = lastNameArr.length > 1;

  if (hasMultipleLastNames) {
    const firstPartOfLastName = lastNameArr[0];

    // First of the last names
    if (isAllowed(shortFirstName, firstPartOfLastName)) {
      result.push(
        getResult(
          shortFirstName,
          firstPartOfLastName,
          CardholderNamePatterns.SHORTENED_FIRST_AND_FIRST_PART_OF_LAST
        )
      );
    }

    // Last of the last names
    if (isAllowed(shortFirstName, lastPartOfLastName)) {
      result.push(
        getResult(
          shortFirstName,
          lastPartOfLastName,
          CardholderNamePatterns.SHORTENED_FIRST_AND_LAST_PART_OF_LAST
        )
      );
    }
  }

  // If last name is too long, cut it off (none of the above criteria were satisfied)
  if (result.length === 0) {
    const cutOffLastName = lastPartOfLastName.substring(0, 18);

    result.push(
      getResult(
        shortFirstName,
        cutOffLastName,
        CardholderNamePatterns.SHORTENED_FIRST_AND_CUT_OFF_LAST
      )
    );
  }

  return result;
};
