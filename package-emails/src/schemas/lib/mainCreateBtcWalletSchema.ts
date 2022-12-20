import * as yup from 'yup';

export const mainCreateBtcWalletSchema = yup.object().shape({
  bitgoXpub: yup.string().required(),
});
