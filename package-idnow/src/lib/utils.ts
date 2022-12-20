const separator = 'idnow.de';

export const convertToAPIEndpoint = (identificationUrl: string): string => {
  const splittingRes = identificationUrl.split(separator);
  return `${splittingRes[0]}${separator}/api/v1${splittingRes[1]}`;
};
