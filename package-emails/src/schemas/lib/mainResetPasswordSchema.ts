import * as yup from 'yup';

export const mainResetPasswordSchema = yup.object().shape({
  url: yup.string().required(),
});
