export const sameDigitsRegex = /^\d*(\d)\1\1\d*$/; // 3 or more repeating digits

export const isNonRepeatingString = (s: string) => !sameDigitsRegex.test(s);

export const numbers = '01234567890120987654321098';

export const isNonSequentialDigitsString = (s: string) => !numbers.includes(s);
