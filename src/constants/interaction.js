export const ResponseMode = {
	Static: 'static',
	Dynamic: 'dynamic',
};
export const ALEXA = {
	alexaBody1: 'alexaBody1',
	alexaBody2: 'alexaBody2',
	alexaBody3: 'alexaBody3',
	alexaBody6: 'alexaBody6',
	alexaBody7: 'alexaBody7',
	alexaList1: 'alexaList1',
	alexaList2: 'alexaList2',
};

export const SLACK = {
	slackPhrase: 'slackPhrase',
	slackText: 'slackText',
	slackDropdown: 'slackDropdown',
	slackDatePicker: 'slackDatePicker',
	slackImage: 'slackImage',
	slackButtons: 'slackButtons',
	slackApproval1: 'slackApproval1',
	slackApproval2: 'slackApproval2',
	slackNotification1: 'slackNotification1',
	slackPoll: 'slackPoll',
};

export const TEAMS = {
	text: 'text',
	dropdown: 'dropdown',
	primaryButton: 'primaryButton',
	secondaryButton: 'secondaryButton',
	tabButtons: 'tabButtons',
	thumbnailTemplate: 'thumbnailTemplate',
	heroCardTemplate: 'heroCardTemplate',
	carouselTemplate: 'carouselTemplate',
	digestTemplate: 'digestTemplate',
	listTemplate: 'listTemplate',
};

export const alexaTemplate = [
	{
		title: 'Body Template 1',
		url: 'https://storage.googleapis.com/skael-hydra/alexa/BodyTemplate1.svg',
		id: ALEXA.alexaBody1,
	},
	{
		title: 'Body Template 2',
		url: 'https://storage.googleapis.com/skael-hydra/alexa/BodyTemplate2.svg',
		id: ALEXA.alexaBody2,
	},
	{
		title: 'Body Template 3',
		url: 'https://storage.googleapis.com/skael-hydra/alexa/BodyTemplate3.svg',
		id: ALEXA.alexaBody3,
	},
	{
		title: 'Body Template 6',
		url: 'https://storage.googleapis.com/skael-hydra/alexa/BodyTemplate6.svg',
		id: ALEXA.alexaBody6,
	},
	{
		title: 'Body Template 7',
		url: 'https://storage.googleapis.com/skael-hydra/alexa/BodyTemplate7.svg',
		id: ALEXA.alexaBody7,
	},
	{
		title: 'List Template 1',
		url: 'https://storage.googleapis.com/skael-hydra/alexa/ListTemplate1.svg',
		id: ALEXA.alexaList1,
	},
	{
		title: 'List Template 2',
		url: 'https://storage.googleapis.com/skael-hydra/alexa/ListTemplate2.svg',
		id: ALEXA.alexaList2,
	},
];

export const slackTemplate = [
	{
		title: 'Text Response',
		url: 'https://storage.googleapis.com/skael-hydra/slack/slackText.svg',
		id: 'slackText',
	},
	{
		title: 'Dropdown',
		url: 'https://storage.googleapis.com/skael-hydra/slack/slackDropdown.svg',
		id: 'slackDropdown',
	},
	{
		title: 'Date Picker',
		url: 'https://storage.googleapis.com/skael-hydra/slack/slackDatePicker.svg',
		id: 'slackDatePicker',
	},
	{
		title: 'Image',
		url: 'https://storage.googleapis.com/skael-hydra/slack/slackImage.svg',
		id: 'slackImage',
	},
	{
		title: 'Buttons',
		url: 'https://storage.googleapis.com/skael-hydra/slack/slackButtons.svg',
		id: 'slackButtons',
	},
	{
		title: 'Approval Template 1',
		url: 'https://storage.googleapis.com/skael-hydra/slack/slackApprovalA.svg',
		id: 'slackApproval1',
	},
	{
		title: 'Approval Template 2',
		url: 'https://storage.googleapis.com/skael-hydra/slack/slackApprovalB.svg',
		id: 'slackApproval2',
	},
	{
		title: 'Notification Template',
		url: 'https://storage.googleapis.com/skael-hydra/slack/slackNotification.svg',
		id: 'slackNotification1',
	},
	{
		title: 'Poll Template',
		url: 'https://storage.googleapis.com/skael-hydra/slack/slackPoll.svg',
		id: 'slackPoll',
	},
];

export const teamsTemplate = [
	{
		title: 'Text Response',
		url: 'https://storage.googleapis.com/skael-hydra/teams/PlainText.svg',
		id: 'text',
	},
	{
		title: 'Dropdown',
		url: 'https://storage.googleapis.com/skael-hydra/teams/Dropdown.svg',
		id: 'dropdown',
	},
	{
		title: 'Primary Button',
		url: 'https://storage.googleapis.com/skael-hydra/teams/PrimaryButton.svg',
		id: 'primaryButton',
	},
	{
		title: 'Secondary Button',
		url: 'https://storage.googleapis.com/skael-hydra/teams/SecondaryButton.svg',
		id: 'secondaryButton',
	},
	{
		title: 'Tab Buttons',
		url: 'https://storage.googleapis.com/skael-hydra/teams/TabButtons.svg',
		id: 'tabButtons',
	},
	{
		title: 'Thumbnail Template',
		url: 'https://storage.googleapis.com/skael-hydra/teams/Thumbnail.svg',
		id: 'thumbnailTemplate',
	},
	{
		title: 'Hero Card Template',
		url: 'https://storage.googleapis.com/skael-hydra/teams/HeroCard.svg',
		id: 'heroCardTemplate',
	},
	{
		title: 'Carousel Template',
		url: 'https://storage.googleapis.com/skael-hydra/teams/Carousel.svg',
		id: 'carouselTemplate',
	},
	{
		title: 'Digest Template',
		url: 'https://storage.googleapis.com/skael-hydra/teams/Digest.svg',
		id: 'digestTemplate',
	},
	{
		title: 'List Template',
		url: 'https://storage.googleapis.com/skael-hydra/teams/List.svg',
		id: 'listTemplate',
	},
];
