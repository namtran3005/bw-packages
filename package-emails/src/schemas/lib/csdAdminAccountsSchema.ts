import * as yup from 'yup';

export const csdAdminAccountsSchema = yup.object().shape({
  message: yup.string().required(),
});
