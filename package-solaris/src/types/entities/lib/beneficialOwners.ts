export interface BeneficialOwnerInput {
  personId: string;
  votingShare: number;
}

export interface BeneficialOwner extends BeneficialOwnerInput {
  solarisId: string;
  beneficialOwnerId: string;
  validUntil: Date | null;
}
