export enum RepresentationType {
  ALONE = 'ALONE',
  JOINT = 'JOINT',
  OTHER = 'OTHER',
}

export interface LegalRepresentativeInput {
  legalRepresentativeId: string;
  typeOfRepresentation: RepresentationType;
}

export interface LegalRepresentative extends LegalRepresentativeInput {
  solarisId: string;
  legalRepresentativeType: string;
  validUntil: Date | null;
}
