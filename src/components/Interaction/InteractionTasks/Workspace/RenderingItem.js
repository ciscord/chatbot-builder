import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { CloseOutlined } from '@ant-design/icons';
import { SlackBlockKit } from './Slack';
import { SLACK, ALEXA, TEAMS } from '../../../../constants/interaction';
import { TeamsCard } from './Teams';
import { AlexsaTemplate } from './Alexsa';
import { Container, RemoveButton } from './RenderingItem.style';

const primaryButton = 0;

/* stylelint-disable block-no-empty */
const Content = styled.div``;

const keyCodes = {
	enter: 13,
	escape: 27,
	arrowDown: 40,
	arrowUp: 38,
	tab: 9,
};

export default class RenderingItem extends Component {
	onKeyDown = (event, provided, snapshot) => {
		if (event.defaultPrevented) {
			return;
		}

		if (snapshot.isDragging) {
			return;
		}

		if (event.keyCode !== keyCodes.enter) {
			return;
		}

		// we are using the event for selection
		event.preventDefault();

		this.performAction(event);
	};

	// Using onClick as it will be correctly
	// preventing if there was a drag
	onClick = event => {
		if (event.defaultPrevented) {
			return;
		}

		if (event.button !== primaryButton) {
			return;
		}

		// marking the event as used
		event.preventDefault();

		this.performAction(event);
	};

	onTouchEnd = event => {
		if (event.defaultPrevented) {
			return;
		}

		// marking the event as used
		// we would also need to add some extra logic to prevent the click
		// if this element was an anchor
		event.preventDefault();
		this.props.toggleSelectionInGroup(this.props.task.id);
	};

	// Determines if the platform specific toggle selection in group key was used
	wasToggleInSelectionGroupKeyUsed = event => {
		const isUsingWindows = navigator.platform.indexOf('Win') >= 0;
		return isUsingWindows ? event.ctrlKey : event.metaKey;
	};

	// Determines if the multiSelect key was used
	wasMultiSelectKeyUsed = event => event.shiftKey;

	performAction = event => {
		const { element, toggleSelection } = this.props;
		toggleSelection(element.id);
	};

	deleteItem = () => {
		this.props.onDelete();
	};

	render() {
		const { element, project, index, isSelected } = this.props;
		return (
			<Draggable draggableId={element.id} index={index}>
				{(provided, snapshot) => {
					return (
						<Container
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							onClick={this.onClick}
							onTouchEnd={this.onTouchEnd}
							onKeyDown={event => this.onKeyDown(event, provided, snapshot)}
							isDragging={snapshot.isDragging}
							isSelected={isSelected}
						>
							{isSelected && (
								<RemoveButton onClick={() => this.deleteItem()}>
									<CloseOutlined />
								</RemoveButton>
							)}
							<Content>
								{(element.type === SLACK.slackPhrase ||
									element.type === SLACK.slackText ||
									element.type === SLACK.slackDropdown ||
									element.type === SLACK.slackDatePicker ||
									element.type === SLACK.slackImage ||
									element.type === SLACK.slackButtons ||
									element.type === SLACK.slackApproval1 ||
									element.type === SLACK.slackApproval2 ||
									element.type === SLACK.slackNotification1 ||
									element.type === SLACK.slackPoll) && (
									<SlackBlockKit element={element} deviceMode={this.props.deviceMode} project={project} />
								)}
								{(element.type === TEAMS.text ||
									element.type === TEAMS.dropdown ||
									element.type === TEAMS.primaryButton ||
									element.type === TEAMS.secondaryButton ||
									element.type === TEAMS.tabButtons ||
									element.type === TEAMS.thumbnailTemplate ||
									element.type === TEAMS.heroCardTemplate ||
									element.type === TEAMS.carouselTemplate ||
									element.type === TEAMS.digestTemplate ||
									element.type === TEAMS.listTemplate) && (
									<TeamsCard element={element} deviceMode={this.props.deviceMode} project={project} />
								)}
								{(element.type === ALEXA.alexaBody1 ||
									element.type === ALEXA.alexaBody2 ||
									element.type === ALEXA.alexaBody3 ||
									element.type === ALEXA.alexaBody6 ||
									element.type === ALEXA.alexaBody7 ||
									element.type === ALEXA.alexaList1 ||
									element.type === ALEXA.alexaList2) && (
									<AlexsaTemplate element={element} deviceMode={this.props.deviceMode} />
								)}
							</Content>
						</Container>
					);
				}}
			</Draggable>
		);
	}
}
