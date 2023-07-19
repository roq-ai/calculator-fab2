import * as yup from 'yup';

export const artilleryCalculationValidationSchema = yup.object().shape({
  calculation_data: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
