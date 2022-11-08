export const UI_ROUTES = {
	root: '/',

	// Auth
	login: '/login',
	signUp: '/signUp',
	profile: '/profile',
	sendVerify: '/sendVerify',
	sendReset: '/sendReset',

	// Overview
	projects: '/projects',
	metrics: '/metrics',

	// Data Flow
	triggers: '/triggers',
	actions: '/actions',
	outputs: '/outputs',

	// Interaction
	interaction: '/interaction',
	training: '/training',

	// Deployment
	deployment: '/deployment',
	adoption: '/adoption',

	// Organization
	security: '/security',
	billing: '/billing',

	// Users
	verifyUser: '/users/verify',
	resetPassword: '/users/password/reset',
};

export const API_ROUTES = {
	auth: '/auth',
	projects: '/projects',
	streams: '/streams',
	tasks: '/tasks',
	users: '/users',
	dataflows: '/dataflows',
};
