import * as yup from 'yup';
import { phoneRegExp } from '../reg-exp';

const FIELD_REQUIRED = 'This field is required!!!';

const schema = yup.object().shape({
    firstname: yup
      .string()
      .required(FIELD_REQUIRED)
      .min(2, 'The minimum length is more then 2 symbols'),
    lastname: yup
      .string()
      .required(FIELD_REQUIRED)
      .min(2, 'The minimum length is more then 2 symbols'),
    age: yup
      .number()
      .required(FIELD_REQUIRED)
      .positive("Age can't be negative")
      .min(14, 'The minimum age of buying is 14'),
    shipping_address: yup
      .string()
      .required(FIELD_REQUIRED)
      .min(2, 'The minimum length is more then 5 symbols'),
    phone: yup
      .string()
      .required(FIELD_REQUIRED)
      .matches(phoneRegExp, 'Phone number is not valid')
});
  
export default schema;