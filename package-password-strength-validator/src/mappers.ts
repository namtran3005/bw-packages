import { ZXCVBNScore } from 'zxcvbn';
import { ValidationErrors, PasswordStrength, Configs } from './types';

export function owaspErrorValidationToError(
  owaspError: string,
  configs: Configs
): ValidationErrors {
  const errorsMap = {
    [`The password must be at least ${configs.minLength} characters long.`]: ValidationErrors.PASSWORD_IS_TOO_SHORT,
    [`The password must be fewer than ${configs.maxLength} characters.`]: ValidationErrors.PASSWORD_IS_TOO_LONG,
    ['The password may not contain sequences of three or more repeated characters.']:
      ValidationErrors.CONTAINS_REPEATED_SEQUENCES,
    'The password must contain at least one lowercase letter.':
      ValidationErrors.MISSING_LOWERCASE_LETTER,
    'The password must contain at least one uppercase letter.':
      ValidationErrors.MISSING_UPPERCASE_LETTER,
    'The password must contain at least one number.':
      ValidationErrors.MISSING_NUMBER,
    'The password must contain at least one special character.':
      ValidationErrors.MISSING_SPECIAL_CHAR,
  };

  return errorsMap[owaspError] || ValidationErrors.WEAK_PASSWORD;
}

export function zxcvbnScoreToPasswordStrength(score: ZXCVBNScore) {
  const scoreMap: Record<ZXCVBNScore, PasswordStrength> = {
    0: PasswordStrength.VERY_WEAK,
    1: PasswordStrength.VERY_WEAK,
    2: PasswordStrength.WEAK,
    3: PasswordStrength.STRONG,
    4: PasswordStrength.VERY_STRONG,
  };

  return scoreMap[score];
}
