import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';
import {
	AmazonOutlined,
	ApiOutlined,
	DownOutlined,
	GoogleOutlined,
	MessageOutlined,
	SkypeOutlined,
	SlackOutlined,
	WindowsOutlined,
} from '@ant-design/icons';

import { Button, Dropdown, Menu } from 'antd';
import { selectedProject, selectProjectByID } from '../../../redux/projects/selectors';
import { Wrapper } from './InteractionTasks.style';
import TemplateBlock from './TemplateBlock';
import Workspace from './Workspace';
import RightBar from './RightBar';
import { alexaTemplate, slackTemplate, teamsTemplate, SLACK, ALEXA } from '../../../constants/interaction';
import { generateJSONFromType, generatePropertyFromType } from './Util/typeUtil';

const InteractionTasks = () => {
	const [platform, setPlatform] = useState('teams');
	const [elements, setElements] = useState([]);
	const [phrases, setPhrases] = useState([]);
	const [selectedTaskId, setSelectedTaskId] = useState();
	const projectId = useSelector(selectedProject);
	const project = useSelector(selectProjectByID(projectId));

	const handleSelect = e => {
		setElements([]);
		setPlatform(e.key);
	};

	const interactionMenu = (
		<Menu onClick={handleSelect}>
			<Menu.Item key="alexa">
				<AmazonOutlined /> Amazon Alexa
			</Menu.Item>
			<Menu.Item key="googleAssistant" disabled>
				<GoogleOutlined /> Google Assistant
			</Menu.Item>
			<Menu.Item key="teams">
				<WindowsOutlined /> Microsoft Teams
			</Menu.Item>
			<Menu.Item key="slack">
				<SlackOutlined /> Slack
			</Menu.Item>
			<Menu.Item key="skype" disabled>
				<SkypeOutlined /> Skype
			</Menu.Item>
			<Menu.Item key="sms" disabled>
				<MessageOutlined /> SMS
			</Menu.Item>
			<Menu.Item key="webchat" disabled>
				<ApiOutlined /> Web Chat
			</Menu.Item>
		</Menu>
	);

	const onDragEnd = result => {
		const { destination, source, draggableId } = result;
		if (!destination || elements.length === 0) {
			return;
		}
		if (destination.droppableId !== source.droppableId) {
			if (
				platform === 'alexa' &&
				elements.filter(
					e =>
						e.type === ALEXA.alexaBody1 ||
						e.type === ALEXA.alexaBody2 ||
						e.type === ALEXA.alexaBody3 ||
						e.type === ALEXA.alexaBody6 ||
						e.type === ALEXA.alexaBody7 ||
						e.type === ALEXA.alexaList1 ||
						e.type === ALEXA.alexaList2
				).length > 0
			)
				return;
			setElements([
				...elements,
				{
					id: uuid(),
					type: draggableId,
					JSON: generateJSONFromType(draggableId),
					property: generatePropertyFromType(draggableId),
				},
			]);
		} else {
			if (source.index !== destination.index) {
				if (source.index < 1 || destination.index < 1) return;

				let temp = elements[source.index];
				if (source.index > destination.index) {
					elements.splice(destination.index, 0, temp);
					elements.splice(source.index + 1, 1);
				} else {
					elements.splice(destination.index + 1, 0, temp);
					elements.splice(source.index, 1);
				}
				setElements(elements);
			}
		}
	};

	const toggleSelection = taskId => {
		setSelectedTaskId(taskId);
	};
	const onDelete = () => {
		const currentE = selectedTaskId ? elements.filter(e => e.id === selectedTaskId)[0] : null;
		if (currentE) {
			const indexofE = elements.indexOf(currentE);
			elements.splice(indexofE, 1);
			setElements(elements);
			setRefresh(
				Math.random()
					.toString(36)
					.substring(7)
			);
		}
	};
	/**
	 * RightBar event handlers
	 */
	const [refresh, setRefresh] = useState('1');
	const onChangePhrase = text => {
		if (text !== '' && elements.length === 0) {
			const taskId = uuid();
			setElements([
				...elements,
				{
					id: taskId,
					type: SLACK.slackPhrase,
					JSON: {
						blocks: [
							{
								type: 'section',
								text: {
									type: 'plain_text',
									text,
									emoji: true,
								},
							},
						],
					},
				},
			]);
			setSelectedTaskId(taskId);
		} else if (elements.length > 0) {
			let currentE = selectedTaskId ? elements.filter(e => e.id === selectedTaskId)[0] : null;
			if (!currentE) {
				currentE = elements[0];
			}

			if (currentE.type !== SLACK.slackPhrase) {
				const indexofE = elements.indexOf(currentE);
				currentE = elements.slice(0, indexofE).filter(e => e.type === SLACK.slackPhrase)[0];
			}
			currentE.JSON.blocks[0].text.text = text;
			setElements(elements);
			setRefresh(
				Math.random()
					.toString(36)
					.substring(7)
			);
		}
	};

	const onAddPhrase = (phrase, selectedNLG) => {
		const id = uuid();
		const phraseData = [...phrases, { id, phrase, selectedNLG }];
		setPhrases(phraseData);
	};

	const onDeletePhrase = id => {
		console.log(id, 'iii');
		const e = phrases.filter(e => e.id === id)[0];

		if (e) {
			const indexofE = phrases.indexOf(e);
			phrases.splice(indexofE, 1);
			setPhrases(phrases);
		}
	};

	const onSelectPhrase = id => {
		const e = phrases.filter(e => e.id === id)[0];
		const phraseE = elements.filter(e => e.type === SLACK.slackPhrase)[0];

		if (e && phraseE) {
			phraseE.JSON.blocks[0].text.text = e.phrase.blocks[0].text;
			setElements(elements);
			setRefresh(
				Math.random()
					.toString(36)
					.substring(7)
			);
		}
	}
	const onChangeElement = elementData => {
		const currentE = selectedTaskId ? elements.filter(e => e.id === selectedTaskId)[0] : null;
		if (!currentE) return;
		currentE.JSON = elementData.JSON;
		setElements(elements);
		setRefresh(
			Math.random()
				.toString(36)
				.substring(7)
		);
	};
	return (
		<Wrapper>
			<DragDropContext onDragEnd={onDragEnd}>
				<div className="sidebar">
					<Dropdown
						overlay={interactionMenu}
						icon={<DownOutlined />}
						style={{ width: '100%' }}
						disabled={project === undefined}
					>
						<Button className="dropdownButton">
							{platform ? (
								<div>
									{platform === 'alexa' && (
										<div>
											<AmazonOutlined className="iconDiv" /> Amazon Alexa
										</div>
									)}
									{platform === 'slack' && (
										<div>
											<SlackOutlined className="iconDiv" /> Slack
										</div>
									)}
									{platform === 'teams' && (
										<div>
											<WindowsOutlined className="iconDiv" /> Microsoft Teams
										</div>
									)}
								</div>
							) : (
								<div>
									<MessageOutlined className="iconDiv" />
									Select an Option
								</div>
							)}
						</Button>
					</Dropdown>
					<div>
						{platform === 'alexa' && (
							<div className="choices">
								<div>
									<Droppable droppableId="block" isDropDisabled>
										{(provided, snapshot) => (
											<div ref={provided.innerRef} {...provided.droppableProps}>
												{alexaTemplate.map((element, index) => (
													<TemplateBlock
														index={index}
														element={element}
														key={element.id}
														isSelected={element.id === selectedTaskId}
														toggleSelection={toggleSelection}
													/>
												))}
												{provided.placeholder}
											</div>
										)}
									</Droppable>
								</div>
							</div>
						)}
						{platform === 'slack' && (
							<div className="choices">
								<div>
									<Droppable droppableId="block" isDropDisabled>
										{(provided, snapshot) => (
											<div ref={provided.innerRef} {...provided.droppableProps}>
												{slackTemplate.map((element, index) => (
													<TemplateBlock
														index={index}
														element={element}
														key={element.id}
														isSelected={element.id === selectedTaskId}
														toggleSelection={toggleSelection}
													/>
												))}
												{provided.placeholder}
											</div>
										)}
									</Droppable>
								</div>
							</div>
						)}
						{platform === 'teams' && (
							<div className="choices">
								<div>
									<Droppable droppableId="block" isDropDisabled>
										{(provided, snapshot) => (
											<div ref={provided.innerRef} {...provided.droppableProps}>
												{teamsTemplate.map((element, index) => (
													<TemplateBlock
														index={index}
														element={element}
														key={element.id}
														isSelected={element.id === selectedTaskId}
														toggleSelection={toggleSelection}
													/>
												))}
												{provided.placeholder}
											</div>
										)}
									</Droppable>
								</div>
							</div>
						)}
					</div>
				</div>
				<Workspace
					elements={elements}
					key={refresh}
					selectedTaskId={selectedTaskId}
					platform={platform}
					toggleSelection={toggleSelection}
					onDelete={onDelete}
					project={project}
				/>
				<RightBar
					onChangePhrase={onChangePhrase}
					element={selectedTaskId ? elements.filter(e => e.id === selectedTaskId)[0] : null}
					onChangeElement={onChangeElement}
					onAddPhrase={onAddPhrase}
					project={project}
					phrases={phrases}
					onDeletePhrase={onDeletePhrase}
					onSelectPhrase={onSelectPhrase}
				/>
			</DragDropContext>
		</Wrapper>
	);
};

export default InteractionTasks;
export { InteractionTasks };
