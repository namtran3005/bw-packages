import latinizeModule from 'latinize';
import { extend } from 'lodash';

// modify the behavior for German umlauts and ß
extend(latinizeModule.characters, {
  ä: 'ae',
  ö: 'oe',
  ü: 'ue',
  Ä: 'Ae',
  Ö: 'Oe',
  Ü: 'Ue',
  ß: 'ss',
});

const latinizeFunc: (str: string) => string = latinizeModule;

export const latinize = latinizeFunc;
