import * as yup from 'yup';
import { isValidTan } from '..';
import { ConfirmChangeRequestInput } from '../..';

export const confirmChangeRequestInputSchema = yup
  .object<ConfirmChangeRequestInput>()
  .shape<ConfirmChangeRequestInput>({
    tan: yup
      .string()
      .required()
      .test('is-valid-tan', 'Invalid TAN', isValidTan),
    changeRequestId: yup.string().required(),
  });
