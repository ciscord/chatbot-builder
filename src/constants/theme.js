import { ThemeUtils } from '../utils/ThemeUtils';

const colors = {
	// absolute
	white: '#ffffff',
	black: '#000000',
	gray: '#c7c7c7',
	// named
	dark: '#444444',
	ghost: '#919191',
	error: '#d32f2f',
	warning: '#ffa000',
	info: '#1976d1',
	success: '#43a047',
	layout: '#f0f2f5',
	firebaseRed: '#db4437',
	firebaseBlack: '#333333',

};

export const THEME = {
	colors: {
		...colors,
	},
	text: {
		main: colors.dark,
		second: colors.ghost,
		invert: colors.white,
		error: colors.error,
		warning: colors.warning,
		info: colors.info,
		success: colors.success,
	},
	border: {
		button: ThemeUtils.lighter(colors.info),
		input: colors.gray,
		inputError: colors.error,
	},
	bg: {
		main: colors.white,
		button: ThemeUtils.lightest(colors.info),
		input: colors.white,
		inputError: ThemeUtils.lightest(colors.error),
		header: colors.white,
		footer: ThemeUtils.darkest(colors.dark),
		layout: colors.layout,
		card: '#000c17',
		menu: '#001529',
		blueCard: ThemeUtils.lightest(colors.info),
	},
	height: {
		header: 64,
		breadcrumbs: 38,
		footer: 32,
	},
	maxHeight: {
		modal: 'calc(100vh - 420px)',
		modalContent: 'calc(100vh - 420px)',
	},
};
