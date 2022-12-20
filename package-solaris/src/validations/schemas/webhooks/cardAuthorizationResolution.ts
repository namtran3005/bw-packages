import * as yup from 'yup';
import { ReservationType } from '../../..';

/**
 * The following schema is intentionally not exhaustive to avoid unnecessary errors.
 * We only validate fields we actually use
 *
 * TODO: expand the schemas to cover all of the expected fields (see: https://bitwala-gmbh.atlassian.net/browse/IT-3860 )
 */

export const cardAuthorizationResolutionValidationSchema = yup.object().shape({
  solarisId: yup.string().required(),
  reference: yup.string().required(),
  reservationType: yup
    .string()
    .oneOf([ReservationType.CARD_AUTHORIZATION])
    .required() as yup.Schema<ReservationType.CARD_AUTHORIZATION>,
});
