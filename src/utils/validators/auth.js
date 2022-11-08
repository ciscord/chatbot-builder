import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.label('E-mail')
		.strict(false)
		.trim()
		.email()
		.required(),
	password: yup
		.string()
		.label('Password')
		.strict(false)
		.trim()
		.min(8)
		.max(120)
		.required(),
});

export const signUpSchema = yup.object().shape({
	email: yup
		.string()
		.label('E-mail')
		.strict(false)
		.trim()
		.email()
		.required(),
	name: yup
		.string()
		.label('Name')
		.strict(false)
		.trim()
		.min(1)
		.required(),
	password: yup
		.string()
		.label('Password')
		.min(8)
		.max(120)
		.required(),
	confirm: yup
		.string()
		.label('Confirm Password')
		.min(6)
		.max(255)
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
	organizationName: yup
		.string()
		.label('Organization Name')
		.strict(false)
		.trim()
		.min(1)
		.required(),
});

export const sendVerifySchema = yup.object().shape({
	email: yup
		.string()
		.label('E-mail')
		.strict(false)
		.trim()
		.email()
		.required(),
});

export const sendResetSchema = yup.object().shape({
	email: yup
		.string()
		.label('E-mail')
		.strict(false)
		.trim()
		.email()
		.required(),
});

export const resetPassword = yup.object().shape({
	password: yup
		.string()
		.label('Password')
		.min(8)
		.max(120)
		.required(),
	confirm: yup
		.string()
		.label('Confirm Password')
		.min(6)
		.max(255)
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});
