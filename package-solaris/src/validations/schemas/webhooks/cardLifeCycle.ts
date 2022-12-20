import * as yup from 'yup';

/**
 * The following schema is intentionally not exhaustive to avoid unnecessary errors.
 * We only validate fields we actually use
 *
 * TODO: expand the schemas to cover all of the expected fields (see: https://bitwala-gmbh.atlassian.net/browse/IT-3860 )
 */

export const cardLifeCycleEventValidationSchema = yup.object().shape({
  solarisId: yup.string().required(),
});
