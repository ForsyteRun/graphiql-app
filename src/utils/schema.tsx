import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .required(' is required field')
    .email('please, enter a valid email (e.g., user@example.com)')
    .max(255),
  password: yup
    .string()
    .required(' is a required field')
    .matches(/^(?=.*[a-z])/, 'Must Contain One Lowercased Character.')
    .matches(/^(?=.*[A-Z])/, 'Must Contain One Uppercased Character.')
    .matches(/^(?=.*[0-9])/, 'Must Contain One Number Character.')
    .matches(/^(?=.*[!@#$%^&*])/, 'Must Contain  One Special Case Character.')
    .min(8, 'Must Contain 8 Characters. '),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], ' Passwords must match'),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required(' is required field')
    .email('please, enter a valid email (e.g., user@example.com)')
    .max(255),
  password: yup
    .string()
    .required(' is a required field')
    .matches(/^(?=.*[a-z])/, 'Must Contain One Lowercased Character.')
    .matches(/^(?=.*[A-Z])/, 'Must Contain One Uppercased Character.')
    .matches(/^(?=.*[0-9])/, 'Must Contain One Number Character.')
    .matches(/^(?=.*[!@#$%^&*])/, 'Must Contain  One Special Case Character.')
    .min(8, 'Must Contain 8 Characters. '),
});
