import { Countries } from './countries';

export interface Address {
  line1: string;
  line2?: string;
  postalCode: string;
  city: string;
  country: Countries;
  state?: string;
}
