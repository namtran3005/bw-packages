import parsePhoneNumber from 'libphonenumber-js';

export const formatPhoneNumber = (phoneNumber: string) => {
  const parsedPhoneNumber = parsePhoneNumber(phoneNumber);
  if (parsedPhoneNumber) {
    return parsedPhoneNumber.formatInternational();
  }
  return phoneNumber;
};
