import { isContainEmoji } from '../emojiValidation';

describe('passwordContainsEmojis', () => {
  it('should return true for passwords containing emojis', () => {
    const password = 'pbGiCFEyatX51D2S!😅';
    const result = isContainEmoji(password);
    expect(result).toEqual(true);
  });

  it('should return false for passwords not containing emojis', () => {
    const password = 'pbGiCFEyatX51D2S!';
    const result = isContainEmoji(password);
    expect(result).toEqual(false);
  });
});
