import * as yup from 'yup';

export type SchemaSpec<T> = { [key in keyof T]: yup.MixedSchema<T[key]> };
