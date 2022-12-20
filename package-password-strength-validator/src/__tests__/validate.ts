import { validate } from '../validate';
import { ValidationErrors, PasswordStrength } from '../types';

describe('validate', () => {
  it('should return very_weak password', () => {
    const res = validate('q');

    expect(res.strength).toEqual(PasswordStrength.VERY_WEAK);
    expect(res.errors).toContain(ValidationErrors.MISSING_NUMBER);
    expect(res.errors).toContain(ValidationErrors.MISSING_UPPERCASE_LETTER);
    expect(res.errors).toContain(ValidationErrors.MISSING_SPECIAL_CHAR);
    expect(res.errors).toContain(ValidationErrors.PASSWORD_IS_TOO_SHORT);
  });

  it('should return weak password', () => {
    const res = validate('Qwertyu123!');

    expect(res.strength).toEqual(PasswordStrength.WEAK);
    expect(res.errors).toContain(ValidationErrors.COMMON_PASSWORD);
  });

  it('should return strong password', () => {
    const res = validate('MyOnlyNam1!');

    expect(res.strength).toEqual(PasswordStrength.STRONG);
    expect(res.errors).toHaveLength(0);
  });

  it('should return very_strong password', () => {
    const res = validate('dsfnkasjfsddslfka;lkjdfhasdjfaljksdhfjlkasdf');

    expect(res.strength).toEqual(PasswordStrength.VERY_STRONG);
    expect(res.errors).toHaveLength(0);
  });
});
