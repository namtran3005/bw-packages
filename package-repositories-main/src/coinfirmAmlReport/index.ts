import { upsert } from './lib/upsert';

export { CoinfirmAmlReport } from './model';

export const coinfirmAmlReportRepo = {
  upsert,
};
