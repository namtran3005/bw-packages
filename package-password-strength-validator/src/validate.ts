import owasp from 'owasp-password-strength-test';
import zxcvbn from 'zxcvbn';
import {
  ValidationResult,
  Configs,
  PasswordStrength,
  ValidationErrors,
} from './types';
import {
  owaspErrorValidationToError,
  zxcvbnScoreToPasswordStrength,
} from './mappers';

export const defaultConfigs: Configs = {
  minLength: owasp.configs.minLength,
  // do not limit password length (almost)
  maxLength: 1000,
};

export const validate = (
  password: string,
  configs = defaultConfigs
): ValidationResult => {
  const owaspRes = owasp.test(password);

  if (owaspRes.errors.length) {
    const errors = owaspRes.errors.map(e =>
      owaspErrorValidationToError(e, configs)
    );

    return {
      strength: PasswordStrength.VERY_WEAK,
      errors,
    };
  }

  const zxcvbnRes = zxcvbn(password);

  const strength = zxcvbnScoreToPasswordStrength(zxcvbnRes.score);

  if (
    [PasswordStrength.STRONG, PasswordStrength.VERY_STRONG].includes(strength)
  ) {
    return {
      strength,
      errors: [],
    };
  }

  return {
    strength,
    // all zxcvbn warnings can be classified as 'common password'
    errors: [ValidationErrors.COMMON_PASSWORD],
  };
};
