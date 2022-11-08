import { SLACK, ALEXA, TEAMS, ResponseMode } from '../../../../constants/interaction';

export const generateJSONFromType = type => {
	if (type === SLACK.slackPhrase) {
		return {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'plain_text',
						text: 'This is a plain text section block.',
						emoji: true,
					},
				},
			],
		};
	}
	if (type === SLACK.slackText) {
		return {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'plain_text',
						text: 'This is a plain text section block.',
						emoji: true,
					},
				},
			],
		};
	}
	if (type === SLACK.slackDropdown) {
		return {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: 'Pick an item from the dropdown list',
					},
					accessory: {
						type: 'static_select',
						placeholder: {
							type: 'plain_text',
							text: 'Select an item',
							emoji: true,
						},
						options: [],
					},
				},
			],
		};
	}
	if (type === SLACK.slackDatePicker) {
		return {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: 'Pick a date for the deadline.',
					},
					accessory: {
						type: 'datepicker',
						initial_date: '1990-04-28',
						placeholder: {
							type: 'plain_text',
							text: 'Select a date',
							emoji: true,
						},
					},
				},
			],
		};
	}
	if (type === SLACK.slackImage) {
		return {
			blocks: [
				{
					type: 'image',
					title: {
						type: 'plain_text',
						text: 'Example Image',
						emoji: true,
					},
					image_url: 'https://api.slack.com/img/blocks/bkb_template_images/goldengate.png',
					alt_text: 'Example Image',
				},
			],
		};
	}
	if (type === SLACK.slackButtons) {
		return {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: 'You can add a button alongside text in your message. ',
					},
					accessory: {
						type: 'button',
						text: {
							type: 'plain_text',
							text: 'Button',
							emoji: true,
						},
						value: 'button1',
					},
				},
			],
		};
	}
	if (type === SLACK.slackApproval1) {
		return {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: 'You have a new request:\n*<http://toEmployeeProfile.com|Fred Enriquez - New device request>*',
					},
				},
				{
					type: 'section',
					fields: [],
				},
				{
					type: 'actions',
					elements: [
						{
							type: 'button',
							text: {
								type: 'plain_text',
								emoji: true,
								text: 'Approve',
							},
							style: 'primary',
							value: 'click_me_123',
						},
						{
							type: 'button',
							text: {
								type: 'plain_text',
								emoji: true,
								text: 'Deny',
							},
							style: 'danger',
							value: 'click_me_123',
						},
					],
				},
			],
		};
	}
	if (type === SLACK.slackApproval2) {
		return {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: 'You have a new request:\n*<https://google.com|Fred Enriquez - Time Off request>*',
					},
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text:
							'*Type:*\nPaid time off\n*When:*\nAug 10-Aug 13\n*Hours:* 16.0 (2 days)\n*Remaining balance:* 32.0 hours (4 days)\n*Comments:* "Family in town, going camping!"',
					},
					accessory: {
						type: 'image',
						image_url: 'https://api.slack.com/img/blocks/bkb_template_images/approvalsNewDevice.png',
						alt_text: 'computer thumbnail',
					},
				},
				{
					type: 'actions',
					elements: [
						{
							type: 'button',
							text: {
								type: 'plain_text',
								emoji: true,
								text: 'Approve',
							},
							style: 'primary',
							value: 'click_me_123',
						},
						{
							type: 'button',
							text: {
								type: 'plain_text',
								emoji: true,
								text: 'Deny',
							},
							style: 'danger',
							value: 'click_me_123',
						},
					],
				},
			],
		};
	}
	if (type === SLACK.slackNotification1) {
		return {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'plain_text',
						emoji: true,
						text: 'Looks like you have a scheduling conflict with this event:',
					},
				},
				{
					type: 'divider',
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text:
							'*<http://toUserProfiles.com|Iris / Zelda 1-1>*\nTuesday, January 21 4:00-4:30pm\nBuilding 2 - Havarti Cheese (3)\n2 guests',
					},
					accessory: {
						type: 'image',
						image_url: 'https://api.slack.com/img/blocks/bkb_template_images/notifications.png',
						alt_text: 'calendar thumbnail',
					},
				},
				{
					type: 'context',
					elements: [
						{
							type: 'image',
							image_url: 'https://api.slack.com/img/blocks/bkb_template_images/notificationsWarningIcon.png',
							alt_text: 'notifications warning icon',
						},
						{
							type: 'mrkdwn',
							text: '*Conflicts with Team Huddle: 4:15-4:30pm*',
						},
					],
				},
				{
					type: 'divider',
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*Propose a new time:*',
					},
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*Today - 4:30-5pm*\nEveryone is available: @iris, @zelda',
					},
					accessory: {
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Choose',
						},
						value: 'click_me_123',
					},
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*Tomorrow - 4-4:30pm*\nEveryone is available: @iris, @zelda',
					},
					accessory: {
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Choose',
						},
						value: 'click_me_123',
					},
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: "*Tomorrow - 6-6:30pm*\nSome people aren't available: @iris, ~@zelda~",
					},
					accessory: {
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Choose',
						},
						value: 'click_me_123',
					},
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*<http://ToMoreTimes.com|Show more times>*',
					},
				},
			],
		};
	}
	if (type === SLACK.slackPoll) {
		return {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*Where should we order lunch from?* Poll by <http://toUser.com|Mark>',
					},
				},
				{
					type: 'divider',
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: ':sushi: *Ace Wasabi Rock-n-Roll Sushi Bar*\nThe best landlocked sushi restaurant.',
					},
					accessory: {
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Vote',
						},
						value: 'click_me_123',
					},
				},
				{
					type: 'context',
					elements: [
						{
							type: 'image',
							image_url: 'https://api.slack.com/img/blocks/bkb_template_images/profile_1.png',
							alt_text: 'Michael Scott',
						},
						{
							type: 'image',
							image_url: 'https://api.slack.com/img/blocks/bkb_template_images/profile_2.png',
							alt_text: 'Dwight Schrute',
						},
						{
							type: 'image',
							image_url: 'https://api.slack.com/img/blocks/bkb_template_images/profile_3.png',
							alt_text: 'Pam Beasely',
						},
						{
							type: 'plain_text',
							emoji: true,
							text: '3 votes',
						},
					],
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: ':hamburger: *Super Hungryman Hamburgers*\nOnly for the hungriest of the hungry.',
					},
					accessory: {
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Vote',
						},
						value: 'click_me_123',
					},
				},
				{
					type: 'context',
					elements: [
						{
							type: 'image',
							image_url: 'https://api.slack.com/img/blocks/bkb_template_images/profile_4.png',
							alt_text: 'Angela',
						},
						{
							type: 'image',
							image_url: 'https://api.slack.com/img/blocks/bkb_template_images/profile_2.png',
							alt_text: 'Dwight Schrute',
						},
						{
							type: 'plain_text',
							emoji: true,
							text: '2 votes',
						},
					],
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: ':ramen: *Kagawa-Ya Udon Noodle Shop*\nDo you like to shop for noodles? We have noodles.',
					},
					accessory: {
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Vote',
						},
						value: 'click_me_123',
					},
				},
				{
					type: 'context',
					elements: [
						{
							type: 'mrkdwn',
							text: 'No votes',
						},
					],
				},
				{
					type: 'divider',
				},
				{
					type: 'actions',
					elements: [
						{
							type: 'button',
							text: {
								type: 'plain_text',
								emoji: true,
								text: 'Add a suggestion',
							},
							value: 'click_me_123',
						},
					],
				},
			],
		};
	}
	if (type === TEAMS.text) {
		return {
			type: 'AdaptiveCard',
			version: '1.0',
			body: [
				{
					type: 'TextBlock',
					text: 'This is a plan text section',
					wrap: true,
				},
			],
		};
	}
	if (type === TEAMS.dropdown) {
		return {
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '1.0',
			speak:
				"<s>Your  meeting about \"Adaptive Card design session\"<break strength='weak'/> is starting at 12:30pm</s><s>Do you want to snooze <break strength='weak'/> or do you want to send a late notification to the attendees?</s>",
			body: [
				{
					type: 'Input.ChoiceSet',
					id: 'snooze',
					choices: [],
				},
			],
		};
	} if (type === TEAMS.primaryButton) {
		return {
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '1.0',
			body: [
				{
					type: 'ActionSet',
					actions: [
						{
							type: 'Action.Submit',
							title: 'Primary Button',
							id: 'primary',
						},
					],
				},
			],
		};
	} if (type === TEAMS.secondaryButton) {
		return {
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '1.0',
			body: [
				{
					type: 'ActionSet',
					actions: [
						{
							type: 'Action.Submit',
							title: 'Secondary Button',
							id: 'secondary',
							style: 'positive',
						},
					],
				},
			],
		};
	} if (type === TEAMS.tabButtons) {
		return {
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '1.0',
			body: [
				{
					type: 'ActionSet',
					actions: [
						{
							type: 'Action.Submit',
							title: 'Primary Button',
							id: 'primary',
							style: 'positive',
						},
						{
							type: 'Action.Submit',
							title: 'Action.Submit',
						},
						{
							type: 'Action.Submit',
							title: 'Action.Submit',
						},
					],
				},
			],
		};
	} if (type === TEAMS.thumbnailTemplate) {
		return {
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '1.0',
			body: [
				{
					type: 'ColumnSet',
					columns: [
						{
							type: 'Column',
							width: 1,
							items: [
								{
									type: 'Image',
									altText: '',
									url: 'https://statics.teams.cdn.office.net/evergreen-assets/apps/teams_dev_app_largeimage.png',
									size: 'Large',
								},
							],
						},
						{
							type: 'Column',
							width: 3,
							items: [
								{
									type: 'TextBlock',
									text: 'Thumbnail Card',
									size: 'Large',
								},
								{
									type: 'TextBlock',
									text: 'Subtitle',
									size: 'Medium',
									spacing: 'None',
								},
								{
									type: 'TextBlock',
									text: 'Text',
									size: 'Small',
									weight: 'Lighter',
								},
							],
						},
					],
				},
				{
					type: 'ColumnSet',
					columns: [
						{
							type: 'Column',
							width: 50,
							items: [
								{
									type: 'ActionSet',
									actions: [
										{
											type: 'Action.OpenUrl',
											title: 'https://www.microsoft.com',
											url: 'https://www.microsoft.com',
											id: 'microsoft',
										},
									],
									horizontalAlignment: 'Left',
								},
							],
							verticalContentAlignment: 'Center',
						},
						{
							type: 'Column',
							width: 50,
							items: [
								{
									type: 'ActionSet',
									actions: [
										{
											type: 'Action.OpenUrl',
											title: 'https://www.azure.com',
											url: 'https://www.azure.com',
											id: 'auzre',
										},
									],
									horizontalAlignment: 'Left',
								},
							],
						},
					],
				},
			],
		};
	} if (type === TEAMS.heroCardTemplate) {
		return {
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '1.0',
			body: [
				{
					type: 'ColumnSet',
					columns: [
						{
							type: 'Column',
							width: 2,
							items: [
								{
									type: 'TextBlock',
									text: 'Hero Card',
									size: 'Large',
								},
								{
									type: 'TextBlock',
									text: 'Subtitle',
									spacing: 'Small',
									horizontalAlignment: 'Left',
								},
							],
						},
					],
				},
				{
					type: 'Image',
					altText: '',
					url: 'https://statics.teams.cdn.office.net/evergreen-assets/apps/teams_dev_app_largeimage.png',
					size: 'Stretch',
				},
				{
					type: 'TextBlock',
					text: 'Text',
					size: 'Small',
					weight: 'Lighter',
				},
				{
					type: 'ColumnSet',
					selectAction: {
						type: 'Action.OpenUrl',
					},
					columns: [
						{
							type: 'Column',
							width: 'stretch',
							items: [
								{
									type: 'ActionSet',
									actions: [
										{
											type: 'Action.OpenUrl',
											title: 'https://www.microsoft.com',
											url: 'https://www.microsoft.com',
											id: 'microsoft',
										},
									],
								},
							],
						},
						{
							type: 'Column',
							width: 'stretch',
							items: [
								{
									type: 'ActionSet',
									actions: [
										{
											type: 'Action.OpenUrl',
											title: 'https://www.azure.com',
											url: 'https://www.azure.com',
											id: 'auzre',
										},
									],
								},
							],
						},
					],
				},
			],
		};
	} if (type === TEAMS.carouselTemplate) {
		return {
			type: 'Carousel',
			version: '1.0',
			body: [
				{
					$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
					type: 'AdaptiveCard',
					version: '1.0',
					body: [
						{
							type: 'ColumnSet',
							columns: [
								{
									type: 'Column',
									width: 2,
									items: [
										{
											type: 'TextBlock',
											text: 'Hero Card',
											size: 'Large',
										},
										{
											type: 'TextBlock',
											text: 'Subtitle',
											spacing: 'Small',
											horizontalAlignment: 'Left',
										},
									],
								},
							],
						},
						{
							type: 'Image',
							altText: '',
							url: 'https://raw.githubusercontent.com/compulim/BotFramework-MockBot/master/public/assets/surface1.jpg',
							size: 'Stretch',
						},
						{
							type: 'TextBlock',
							text: 'Text',
							size: 'Small',
							weight: 'Lighter',
						},
						{
							type: 'ColumnSet',
							selectAction: {
								type: 'Action.OpenUrl',
							},
							columns: [
								{
									type: 'Column',
									width: 'stretch',
									selectAction: {
										type: 'Action.OpenUrl',
										id: '',
										url: 'https://www.microsoft.com',
										title: '',
									},
									id: 'azure',
									items: [
										{
											type: 'ActionSet',
											actions: [
												{
													type: 'Action.OpenUrl',
													title: 'https://www.microsoft.com',
													url: 'https://www.microsoft.com',
													id: 'microsoft',
												},
											],
										},
									],
								},
								{
									type: 'Column',
									width: 'stretch',
									items: [
										{
											type: 'ActionSet',
											actions: [
												{
													type: 'Action.OpenUrl',
													title: 'https://www.azure.com',
													url: 'https://www.azure.com',
													id: 'auzre',
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
					type: 'AdaptiveCard',
					version: '1.0',
					body: [
						{
							type: 'ColumnSet',
							columns: [
								{
									type: 'Column',
									width: 2,
									items: [
										{
											type: 'TextBlock',
											text: 'Hero Card',
											size: 'Large',
										},
										{
											type: 'TextBlock',
											text: 'Subtitle',
											spacing: 'Small',
											horizontalAlignment: 'Left',
										},
									],
								},
							],
						},
						{
							type: 'Image',
							altText: '',
							url: 'https://raw.githubusercontent.com/compulim/BotFramework-MockBot/master/public/assets/surface2.jpg',
							size: 'Stretch',
						},
						{
							type: 'TextBlock',
							text: 'Text',
							size: 'Small',
							weight: 'Lighter',
						},
						{
							type: 'ColumnSet',
							selectAction: {
								type: 'Action.OpenUrl',
							},
							columns: [
								{
									type: 'Column',
									width: 'stretch',
									selectAction: {
										type: 'Action.OpenUrl',
										id: '',
										url: 'https://www.microsoft.com',
										title: '',
									},
									id: 'azure',
									items: [
										{
											type: 'ActionSet',
											actions: [
												{
													type: 'Action.OpenUrl',
													title: 'https://www.microsoft.com',
													url: 'https://www.microsoft.com',
													id: 'microsoft',
												},
											],
										},
									],
								},
								{
									type: 'Column',
									width: 'stretch',
									items: [
										{
											type: 'ActionSet',
											actions: [
												{
													type: 'Action.OpenUrl',
													title: 'https://www.azure.com',
													url: 'https://www.azure.com',
													id: 'auzre',
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
					type: 'AdaptiveCard',
					version: '1.0',
					body: [
						{
							type: 'ColumnSet',
							columns: [
								{
									type: 'Column',
									width: 2,
									items: [
										{
											type: 'TextBlock',
											text: 'Hero Card',
											size: 'Large',
										},
										{
											type: 'TextBlock',
											text: 'Subtitle',
											spacing: 'Small',
											horizontalAlignment: 'Left',
										},
									],
								},
							],
						},
						{
							type: 'Image',
							altText: '',
							url: 'https://raw.githubusercontent.com/compulim/BotFramework-MockBot/master/public/assets/surface3.jpg',
							size: 'Stretch',
						},
						{
							type: 'TextBlock',
							text: 'Text',
							size: 'Small',
							weight: 'Lighter',
						},
						{
							type: 'ColumnSet',
							selectAction: {
								type: 'Action.OpenUrl',
							},
							columns: [
								{
									type: 'Column',
									width: 'stretch',
									selectAction: {
										type: 'Action.OpenUrl',
										id: '',
										url: 'https://www.microsoft.com',
										title: '',
									},
									id: 'azure',
									items: [
										{
											type: 'ActionSet',
											actions: [
												{
													type: 'Action.OpenUrl',
													title: 'https://www.microsoft.com',
													url: 'https://www.microsoft.com',
													id: 'microsoft',
												},
											],
										},
									],
								},
								{
									type: 'Column',
									width: 'stretch',
									items: [
										{
											type: 'ActionSet',
											actions: [
												{
													type: 'Action.OpenUrl',
													title: 'https://www.azure.com',
													url: 'https://www.azure.com',
													id: 'auzre',
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		};
	} if (type === TEAMS.digestTemplate) {
		return {
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '1.0',
			body: [
				{
					type: 'Container',
					items: [
						{
							type: 'ColumnSet',
							columns: [
								{
									type: 'Column',
									width: 1,
									items: [
										{
											type: 'Image',
											altText: '',
											url: 'https://statics.teams.cdn.office.net/evergreen-assets/apps/teams_dev_app_largeimage.png',
											size: 'Medium',
										},
									],
								},
								{
									type: 'Column',
									width: 3,
									items: [
										{
											type: 'TextBlock',
											text: 'Item Title',
											size: 'Medium',
										},
										{
											type: 'TextBlock',
											text: 'Description',
										},
										{
											type: 'TextBlock',
											text: 'attribute',
											size: 'Small',
										},
									],
								},
							],
						},
						{
							type: 'ColumnSet',
							columns: [
								{
									type: 'Column',
									width: 1,
									items: [
										{
											type: 'Image',
											altText: '',
											url: 'https://statics.teams.cdn.office.net/evergreen-assets/apps/teams_dev_app_largeimage.png',
											size: 'Medium',
										},
									],
								},
								{
									type: 'Column',
									width: 3,
									items: [
										{
											type: 'TextBlock',
											text: 'Item Title',
											size: 'Medium',
										},
										{
											type: 'TextBlock',
											text: 'Description',
										},
										{
											type: 'TextBlock',
											text: 'attribute',
											size: 'Small',
										},
									],
								},
							],
						},
						{
							type: 'ColumnSet',
							columns: [
								{
									type: 'Column',
									width: 1,
									items: [
										{
											type: 'Image',
											altText: '',
											url: 'https://statics.teams.cdn.office.net/evergreen-assets/apps/teams_dev_app_largeimage.png',
											size: 'Medium',
										},
									],
								},
								{
									type: 'Column',
									width: 3,
									items: [
										{
											type: 'TextBlock',
											text: 'Item Title',
											size: 'Medium',
										},
										{
											type: 'TextBlock',
											text: 'Description',
										},
										{
											type: 'TextBlock',
											text: 'attribute',
											size: 'Small',
										},
									],
								},
							],
						},
					],
				},
			],
		};
	} if (type === TEAMS.listTemplate) {
		return {
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '1.0',
			body: [
				{
					type: 'Container',
					items: [
						{
							type: 'ColumnSet',
							columns: [
								{
									type: 'Column',
									width: 1,
									items: [
										{
											type: 'Image',
											altText: '',
											url: 'https://statics.teams.cdn.office.net/evergreen-assets/apps/teams_dev_app_largeimage.png',
											size: 'Small',
										},
									],
								},
								{
									type: 'Column',
									width: 8,
									items: [
										{
											type: 'TextBlock',
											text: 'Item Title',
											spacing: 'None',
										},
										{
											type: 'TextBlock',
											text: 'Description',
											spacing: 'Small',
											size: 'Small',
										},
									],
								},
							],
						},
						{
							type: 'ColumnSet',
							columns: [
								{
									type: 'Column',
									width: 1,
									items: [
										{
											type: 'Image',
											altText: '',
											url: 'https://statics.teams.cdn.office.net/evergreen-assets/apps/teams_dev_app_largeimage.png',
											size: 'Small',
										},
									],
								},
								{
									type: 'Column',
									width: 8,
									items: [
										{
											type: 'TextBlock',
											text: 'Item Title',
											spacing: 'None',
										},
										{
											type: 'TextBlock',
											text: 'Description',
											spacing: 'Small',
											size: 'Small',
										},
									],
								},
							],
						},
						{
							type: 'ColumnSet',
							columns: [
								{
									type: 'Column',
									width: 1,
									items: [
										{
											type: 'Image',
											altText: '',
											url: 'https://statics.teams.cdn.office.net/evergreen-assets/apps/teams_dev_app_largeimage.png',
											size: 'Small',
										},
									],
								},
								{
									type: 'Column',
									width: 8,
									items: [
										{
											type: 'TextBlock',
											text: 'Item Title',
											spacing: 'None',
										},
										{
											type: 'TextBlock',
											text: 'Description',
											spacing: 'Small',
											size: 'Small',
										},
									],
								},
							],
						},
					],
				},
			],
		};
	} if (type === ALEXA.alexaBody1) {
		return {
			type: 'BodyTemplate1',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			title: 'This is title',
			textContent:
				'This template does not support full-width foreground images. Instead, developers should use BodyTemplate7 for this purpose. Line lengths with the default font size of 7 will vary, so text will wrap differently on different-sized devices. If scrolling is needed, the body text will scroll by touch, and the skill icon and header text are fixed. ',
		};
	} if (type === ALEXA.alexaBody2) {
		return {
			type: 'BodyTemplate2',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			title: 'string',
			image:
				'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
			textContent:
				'BodyTemplate2 and BodyTemplate3 render the same on Echo Spot, except that text is auto-centered on BodyTemplate2.',
		};
	} else if (type === ALEXA.alexaBody3) {
		return {
			type: 'BodyTemplate3',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			title: 'string',
			image:
				'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
			textContent:
				'BodyTemplate2 and BodyTemplate3 are rendered the same on Echo Spot. Text is aligned left on BodyTemplate3.',
		};
	} else if (type === ALEXA.alexaBody6) {
		return {
			type: 'BodyTemplate6',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			image:
				'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
			textContent:
				'On Echo Spot, background images are scaled down based on the aspect ratio, and then centered within the available viewport. For example, a 1024x600px background image on Echo Show will be scaled to 819x480px on Echo Spot. Thus, part of a background image may not be visible on Echo Spot.',
		};
	} else if (type === ALEXA.alexaBody7) {
		return {
			type: 'BodyTemplate7',
			token: 'SampleTemplate_3476',
			backButton: 'VISIBLE',
			title: 'Sample BodyTemplate7',
			backgroundImage: {
				contentDescription: 'Textured grey background',
				sources: [
					{
						url: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
					},
				],
			},
			image: {
				contentDescription: 'Mount St. Helens landscape',
				sources: [
					{
						url:
							'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					},
				],
			},
		};
	} else if (type === ALEXA.alexaList1) {
		return {
			type: 'ListTemplate1',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			title: 'string',
			listItems: [
				{
					token: 'string1',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
						tertiaryText: 'tertiaryText',
					},
				},
				{
					token: 'string2',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
						tertiaryText: 'tertiaryText',
					},
				},
				{
					token: 'string3',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
						tertiaryText: 'tertiaryText',
					},
				},
			],
		};
	} else if (type === ALEXA.alexaList2) {
		return {
			type: 'ListTemplate2',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			title: 'string',
			listItems: [
				{
					token: 'string1',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
					},
				},
				{
					token: 'string2',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
					},
				},
				{
					token: 'string3',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
					},
				},
			],
		};
	}
};

export const generatePropertyFromType = type => {
	if (type === SLACK.slackText) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
		];
	}
	if (type === SLACK.slackDropdown) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
		];
	}
	if (type === SLACK.slackDatePicker) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'date',
				taskId: null,
			},
		];
	}
	if (type === SLACK.slackImage) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
		];
	}
	if (type === SLACK.slackButtons) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
		];
	}
	if (type === SLACK.slackApproval1) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
		];
	}
	if (type === SLACK.slackApproval2) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
		];
	}
	if (type === SLACK.slackNotification1) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
		];
	}
	if (type === SLACK.slackPoll) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
		];
	}

	/**
	 * TEAMS APP RESPONSE
	 */
	if (type === TEAMS.text) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
		];
	}
	if (type === TEAMS.dropdown) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
		];
	} if (type === TEAMS.primaryButton) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
		];
	} if (type === TEAMS.secondaryButton) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
		];
	} if (type === TEAMS.tabButtons) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
		];
	} if (type === TEAMS.thumbnailTemplate) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
		];
	} if (type === TEAMS.heroCardTemplate) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
		];
	} if (type === TEAMS.carouselTemplate) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
		];
	} if (type === TEAMS.digestTemplate) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
		];
	} if (type === TEAMS.listTemplate) {
		return [
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
			{
				mode: ResponseMode.Static,
				taskId: null,
			},
			{
				textpostback: 'button1',
				taskId: null,
			},
		];
	} if (type === ALEXA.alexaBody1) {
		return {
			type: 'BodyTemplate1',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			title: 'This is title',
			textContent:
				'This template does not support full-width foreground images. Instead, developers should use BodyTemplate7 for this purpose. Line lengths with the default font size of 7 will vary, so text will wrap differently on different-sized devices. If scrolling is needed, the body text will scroll by touch, and the skill icon and header text are fixed. ',
		};
	} if (type === ALEXA.alexaBody2) {
		return {
			type: 'BodyTemplate2',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			title: 'string',
			image:
				'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
			textContent:
				'BodyTemplate2 and BodyTemplate3 render the same on Echo Spot, except that text is auto-centered on BodyTemplate2.',
		};
	} else if (type === ALEXA.alexaBody3) {
		return {
			type: 'BodyTemplate3',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			title: 'string',
			image:
				'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
			textContent:
				'BodyTemplate2 and BodyTemplate3 are rendered the same on Echo Spot. Text is aligned left on BodyTemplate3.',
		};
	} else if (type === ALEXA.alexaBody6) {
		return {
			type: 'BodyTemplate6',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			image:
				'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
			textContent:
				'On Echo Spot, background images are scaled down based on the aspect ratio, and then centered within the available viewport. For example, a 1024x600px background image on Echo Show will be scaled to 819x480px on Echo Spot. Thus, part of a background image may not be visible on Echo Spot.',
		};
	} else if (type === ALEXA.alexaBody7) {
		return {
			type: 'BodyTemplate7',
			token: 'SampleTemplate_3476',
			backButton: 'VISIBLE',
			title: 'Sample BodyTemplate7',
			backgroundImage: {
				contentDescription: 'Textured grey background',
				sources: [
					{
						url: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
					},
				],
			},
			image: {
				contentDescription: 'Mount St. Helens landscape',
				sources: [
					{
						url:
							'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					},
				],
			},
		};
	} else if (type === ALEXA.alexaList1) {
		return {
			type: 'ListTemplate1',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			title: 'string',
			listItems: [
				{
					token: 'string1',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
						tertiaryText: 'tertiaryText',
					},
				},
				{
					token: 'string2',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
						tertiaryText: 'tertiaryText',
					},
				},
				{
					token: 'string3',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
						tertiaryText: 'tertiaryText',
					},
				},
			],
		};
	} else if (type === ALEXA.alexaList2) {
		return {
			type: 'ListTemplate2',
			token: 'string',
			backButton: 'VISIBLE',
			backgroundImage: 'https://cdn.riviana.com/Images/Library/8/RivianaCorporate_MakingMealsMemorable_Carousel_v2.jpg',
			title: 'string',
			listItems: [
				{
					token: 'string1',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
					},
				},
				{
					token: 'string2',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
					},
				},
				{
					token: 'string3',
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1422369528666.jpeg',
					textContent: {
						primaryText: 'primaryText',
						secondaryText: 'secondaryText',
					},
				},
			],
		};
	}
};
