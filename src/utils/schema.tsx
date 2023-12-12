import { InferType, object, ref, string } from 'yup';

export const schema = object({
  email: string()
    .max(255)
    .email()
    .required('please, enter a valid email (e.g., user@example.com)'),
  password: string()
    .min(8, 'Must Contain 8 Characters. ')
    .matches(/^(?=.*[a-z])/, 'Must Contain One Lowercased Character.')
    .matches(/^(?=.*[A-Z])/, 'Must Contain One Uppercased Character.')
    .matches(/^(?=.*[0-9])/, 'Must Contain One Number Character.')
    .matches(/^(?=.*[!@#$%^&*])/, 'Must Contain  One Special Case Character.')
    .required(' is a required field'),
  confirmPassword: string()
    .oneOf([ref('password')], ' Passwords must match')
    .required(),
});

export type IForm = InferType<typeof schema>;

export const schemaLogin = object({
  email: string()
    .max(255)
    .email()
    .required('please, enter a valid email (e.g., user@example.com)'),
  password: string()
    .min(8, 'Must Contain 8 Characters. ')
    .matches(/^(?=.*[a-z])/, 'Must Contain One Lowercased Character.')
    .matches(/^(?=.*[A-Z])/, 'Must Contain One Uppercased Character.')
    .matches(/^(?=.*[0-9])/, 'Must Contain One Number Character.')
    .matches(/^(?=.*[!@#$%^&*])/, 'Must Contain  One Special Case Character.')
    .required(' is a required field'),
});

export type IFormLogin = InferType<typeof schemaLogin>;
