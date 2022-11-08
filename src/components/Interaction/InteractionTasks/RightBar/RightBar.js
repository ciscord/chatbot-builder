import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, Input, Button, Select, Tag, Radio, Switch } from 'antd';
import { ApiOutlined, PlusOutlined } from '@ant-design/icons';
import { selectList as selectTaskList } from '../../../../redux/tasks/selectors';
import RichTextInput from '../../../RichTextInput';
import MultiCheckSelect from '../../../MultiCheckSelect';
import { Wrapper } from './RightBar.style';
import { SLACK, ResponseMode, TEAMS } from '../../../../constants/interaction';
import {
	SlackTextResponse,
	SlackDropdownResponse,
	SlackDatePickerResponse,
	SlackImageResponse,
	SlackButtonResponse,
	SlackApprovalTemplate1Response,
	SlackApprovalTemplate2Response,
	SlackNotification1,
} from './Slack/SlackResponses';

import { TeamsTextResponse, TeamsDropdownResponse, TeamsButtonResponse } from './Teams/TeamsResponses';
import { TeamsTabButtonsResponse } from './Teams/TeamsTabButtonsResponse';
import { TeamsThumbnailTemplateResponses } from './Teams/TeamsThumbnailTemplateResponses';
import { TeamsHeroCardTemplateResponses } from './Teams/TeamsHeroCardTemplateResponses';
import { TeamsCarouselTemplateResponses } from './Teams/TeamsCarouselTemplateResponses';
import { TeamsDigestTemplateResponses } from './Teams/TeamsDigestTemplateResponses';
import { TeamsListTemplateResponses } from './Teams/TeamsListTemplateResponses';

const { Option } = Select;

const keywords = ['Task', 'P1', 'tickets', 'react', 'mongo'];

const options = [
	{ label: 'Thing 1', value: 1 },
	{ label: 'Thing 2', value: 2 },
	{ label: 'Thing 1', value: 3 },
	{ label: 'Thing 2', value: 4 },
	{ label: 'Thing 1', value: 5 },
	{ label: 'Thing 2', value: 6 },
	{ label: 'Thing 1', value: 7 },
	{ label: 'Thing 2', value: 8 },
];

const RightBar = ({
	element,
	onChangePhrase,
	onChangeElement,
	onAddPhrase,
	project,
	phrases,
	onDeletePhrase,
	onSelectPhrase,
}) => {
	const [phrase, setPhrase] = useState();
	const [selectedNLG, setSelectedNLG] = useState([]);
	const [showSynonyms, setShowSynonyms] = useState(false);
	const [enableNLG, setEnableNLG] = useState(true);
	const taskList = useSelector(selectTaskList);

	useEffect(() => {
		if (element) {
			setShowSynonyms(false);
		}
	}, [element]);
	const handleChangePhrase = content => {
		setPhrase(content);
		onChangePhrase(content.blocks[0].text);

		if (content.blocks[0].text !== '') {
			setShowSynonyms(true);
		} else {
			setShowSynonyms(false);
		}
	};

	const handleChangeTask = value => {
		console.log(`selected ${value}`);
	};

	const addPhrase = () => {
		if (phrase === '') return;
		setPhrase(null);
		onAddPhrase(phrase, selectedNLG);
		setPhrase('');
		setSelectedNLG([]);
	};

	const onChangeNLG = checked => {
		setEnableNLG(checked);
	};

	const tasks = taskList.map(task => {
		const { id, title } = task;
		return (
			<Option value={id} key={id}>
				{title}
			</Option>
		);
	});
	/**
	 * Slack Response
	 */

	//text, dropdown, button
	const onTextChange = e => {
		const elementData = element;
		elementData.JSON.blocks[0].text.text = e.target.value;
		onChangeElement(elementData);
	};

	const onChangeProperty = (mode, index, taskId) => {
		const elementData = element;

		if (mode === ResponseMode.Static || mode === ResponseMode.Dynamic) {
			elementData.property[index] = {
				mode,
				taskId,
			};
		} else {
			elementData.property[index] = {
				textpostback: mode,
				taskId,
			};
		}

		onChangeElement(elementData);
	};

	//dropdown
	const onPlaceholderChange = e => {
		const elementData = element;
		elementData.JSON.blocks[0].accessory.placeholder.text = e.target.value;
		onChangeElement(elementData);
	};

	//dropdown
	const onAddOption = (name, taskId) => {
		const elementData = element;
		elementData.JSON.blocks[0].accessory.options = [
			...elementData.JSON.blocks[0].accessory.options,
			{
				text: {
					type: 'plain_text',
					text: name,
					emoji: true,
				},
				value: name,
			},
		];
		elementData.property.push({ textpostback: name, taskId });
		onChangeElement(elementData);
	};

	const onDeleteOption = index => {
		const elementData = element;
		elementData.JSON.blocks[0].accessory.options.splice(index, 1);
		elementData.property.splice(index + 2, 1);
		onChangeElement(elementData);
	};
	//image
	const onChangeImageTitle = e => {
		const elementData = element;
		elementData.JSON.blocks[0].title.text = e.target.value;
		onChangeElement(elementData);
	};

	const onChangeImageUrl = e => {
		const elementData = element;
		elementData.JSON.blocks[0].image_url = e.target.value;
		onChangeElement(elementData);
	};

	//button
	const onChangeButtonText = e => {
		const elementData = element;
		elementData.JSON.blocks[0].accessory.text.text = e.target.value;
		onChangeElement(elementData);
	};

	const onButtonSelectTask = value => {
		console.log(value);
	};
	//approve template 1, 2
	const onChangeButtonText1 = e => {
		const elementData = element;
		elementData.JSON.blocks[2].elements[0].text.text = e.target.value;
		onChangeElement(elementData);
	};

	//approve template 1, 2
	const onChangeButtonText2 = e => {
		const elementData = element;
		elementData.JSON.blocks[2].elements[1].text.text = e.target.value;
		onChangeElement(elementData);
	};

	//approve template 1
	const onAddField = name => {
		const elementData = element;
		elementData.JSON.blocks[1].fields = [
			...elementData.JSON.blocks[1].fields,
			{
				type: 'mrkdwn',
				text: name,
			},
		];
		onChangeElement(elementData);
	};
	//approve template 1
	const onDeleteField = index => {
		const elementData = element;
		elementData.JSON.blocks[1].fields.splice(index, 1);
		onChangeElement(elementData);
	};

	// approvalTemplate2
	const onText1Change = e => {
		const elementData = element;
		elementData.JSON.blocks[1].text.text = e.target.value;
		onChangeElement(elementData);
	};

	// approvalTemplate2
	const onText1ImageChange = e => {
		const elementData = element;
		elementData.JSON.blocks[1].accessory.image_url = e.target.value;
		onChangeElement(elementData);
	};

	/**
	 * Teams Response
	 *
	 */
	const onTeamsTextChange = e => {
		const elementData = element;
		elementData.JSON.body[0].text = e.target.value;
		onChangeElement(elementData);
	};

	// teams dropdown
	const onTeamsAddOption = (name, taskId) => {
		const elementData = element;
		elementData.JSON.body[0].choices = [
			...elementData.JSON.body[0].choices,
			{
				title: name,
				value: name,
			},
		];
		elementData.property.push({ textpostback: name, taskId });
		onChangeElement(elementData);
	};

	const onTeamsDeleteOption = index => {
		const elementData = element;
		elementData.JSON.body[0].choices.splice(index, 1);
		elementData.property.splice(index + 1, 1);
		onChangeElement(elementData);
	};

	//button
	const onTeamsChangeButtonText = e => {
		const elementData = element;
		elementData.JSON.body[0].actions[0].title = e.target.value;
		onChangeElement(elementData);
	};

	// thumnailtemplate
	const onChangeThumbnailImageUrl = () => {
		console.log('onChangeThumbnailImageUrl');
	};

	const onChangeThumbnailLargeText = e => {
		console.log('onChangeThumbnailLargeText');
	};
	const renderingResponse = element => {
		if (element.type === SLACK.slackText) {
			return (
				<SlackTextResponse
					element={element}
					taskList={taskList}
					onChange={onTextChange}
					onChangeProperty={onChangeProperty}
				/>
			);
		}
		if (element.type === SLACK.slackDropdown) {
			return (
				<SlackDropdownResponse
					element={element}
					onTextChange={onTextChange}
					onChangeProperty={onChangeProperty}
					onPlaceholderChange={onPlaceholderChange}
					onAddOption={onAddOption}
					onDeleteOption={onDeleteOption}
					taskList={taskList}
				/>
			);
		}
		if (element.type === SLACK.slackDatePicker) {
			return (
				<SlackDatePickerResponse
					element={element}
					onChange={onTextChange}
					taskList={taskList}
					onChangeProperty={onChangeProperty}
				/>
			);
		}
		if (element.type === SLACK.slackImage) {
			return (
				<SlackImageResponse
					element={element}
					onChangeImageTitle={onChangeImageTitle}
					onChangeImageUrl={onChangeImageUrl}
					taskList={taskList}
					onChangeProperty={onChangeProperty}
				/>
			);
		}
		if (element.type === SLACK.slackButtons) {
			return (
				<SlackButtonResponse
					element={element}
					onTextChange={onTextChange}
					onChangeButtonText={onChangeButtonText}
					taskList={taskList}
					onChangeProperty={onChangeProperty}
				/>
			);
		}
		if (element.type === SLACK.slackApproval1) {
			return (
				<SlackApprovalTemplate1Response
					element={element}
					onTextChange={onTextChange}
					onChangeButtonText1={onChangeButtonText1}
					onChangeButtonText2={onChangeButtonText2}
					onAddField={onAddField}
					onDeleteField={onDeleteField}
				/>
			);
		}
		if (element.type === SLACK.slackApproval2) {
			return (
				<SlackApprovalTemplate2Response
					element={element}
					onTextChange={onTextChange}
					onChangeButtonText1={onChangeButtonText1}
					onChangeButtonText2={onChangeButtonText2}
					onText1Change={onText1Change}
					onText1ImageChange={onText1ImageChange}
				/>
			);
		}
		if (element.type === SLACK.slackNotification1) {
			return (
				<SlackNotification1
					element={element}
					onTextChange={onTextChange}
					onChangeButtonText1={onChangeButtonText1}
					onChangeButtonText2={onChangeButtonText2}
					onText1Change={onText1Change}
					onText1ImageChange={onText1ImageChange}
				/>
			);
		}

		if (element.type === TEAMS.text) {
			return (
				<TeamsTextResponse
					element={element}
					taskList={taskList}
					onChange={onTeamsTextChange}
					onChangeProperty={onChangeProperty}
				/>
			);
		}

		if (element.type === TEAMS.dropdown) {
			return (
				<TeamsDropdownResponse
					element={element}
					onChangeProperty={onChangeProperty}
					onAddOption={onTeamsAddOption}
					onDeleteOption={onTeamsDeleteOption}
					taskList={taskList}
				/>
			);
		}

		if (element.type === TEAMS.primaryButton || element.type === TEAMS.secondaryButton) {
			return (
				<TeamsButtonResponse
					element={element}
					onChangeButtonText={onTeamsChangeButtonText}
					taskList={taskList}
					onChangeProperty={onChangeProperty}
				/>
			);
		}

		if (element.type === TEAMS.tabButtons) {
			return (
				<TeamsTabButtonsResponse
					element={element}
					onChangeButtonText={onTeamsChangeButtonText}
					taskList={taskList}
					onChangeProperty={onChangeProperty}
				/>
			);
		}

		if (element.type === TEAMS.thumbnailTemplate) {
			return (
				<TeamsThumbnailTemplateResponses
					element={element}
					onChangeThumbnailImageUrl={onChangeThumbnailImageUrl}
					taskList={taskList}
					onChangeProperty={onChangeProperty}
					onChangeThumbnailLargeText={onChangeThumbnailLargeText}
					onChangeButtonText={onChangeButtonText}
				/>
			);
		}
		if (element.type === TEAMS.heroCardTemplate) {
			return (
				<TeamsHeroCardTemplateResponses
					element={element}
					onChangeThumbnailImageUrl={onChangeThumbnailImageUrl}
					taskList={taskList}
					onChangeProperty={onChangeProperty}
					onChangeThumbnailLargeText={onChangeThumbnailLargeText}
					onChangeButtonText={onChangeButtonText}
				/>
			);
		}

		if (element.type === TEAMS.carouselTemplate) {
			return (
				<TeamsCarouselTemplateResponses
					element={element}
					onChangeThumbnailImageUrl={onChangeThumbnailImageUrl}
					taskList={taskList}
					onChangeProperty={onChangeProperty}
					onChangeThumbnailLargeText={onChangeThumbnailLargeText}
					onChangeButtonText={onChangeButtonText}
				/>
			);
		}

		if (element.type === TEAMS.digestTemplate) {
			return (
				<TeamsDigestTemplateResponses
					element={element}
					onChangeThumbnailImageUrl={onChangeThumbnailImageUrl}
					taskList={taskList}
					onChangeProperty={onChangeProperty}
					onChangeThumbnailLargeText={onChangeThumbnailLargeText}
					onChangeButtonText={onChangeButtonText}
				/>
			);
		}

		if (element.type === TEAMS.listTemplate) {
			return (
				<TeamsListTemplateResponses
					element={element}
					onChangeThumbnailImageUrl={onChangeThumbnailImageUrl}
					taskList={taskList}
					onChangeProperty={onChangeProperty}
					onChangeThumbnailLargeText={onChangeThumbnailLargeText}
					onChangeButtonText={onChangeButtonText}
				/>
			);
		}
	};
	const handleChange = () => {};
	return (
		<Wrapper onClick={() => setShowSynonyms(false)} disabled={project === undefined}>
			<div className="taskDiv">
				<ApiOutlined />
				<Select
					mode="multiple"
					style={{ width: '100%', marginLeft: '8px' }}
					placeholder="Please select"
					onChange={handleChangeTask}
				>
					{tasks}
				</Select>
			</div>
			<div className="phrases">
				<div className="phrasediv">
					{phrases.map(item => {
						return (
							<Tag
								closable
								onClick={() => onSelectPhrase(item.id)}
								onClose={() => onDeletePhrase(item.id)}
								key={item.id}
							>
								{item.phrase.blocks[0].text}
							</Tag>
						);
					})}
				</div>

				<RichTextInput keywords={keywords} value={phrase} onChange={handleChangePhrase} />
				<MultiCheckSelect
					label="Recording Date"
					onChange={handleChange}
					placeholder="-"
					multiple
					options={options}
					width={100}
					values={[1]}
					isOpen={showSynonyms}
				/>
				<h3>41 NLG Results</h3>
			</div>
			<div className="nlgdiv">
				NLG <Switch defaultChecked onChange={onChangeNLG} />
			</div>
			<div className="">
				<Button type="primary" ghost shape="circle" icon={<PlusOutlined />} onClick={addPhrase} />
			</div>
			<Divider />

			{element && renderingResponse(element)}
		</Wrapper>
	);
};

export default RightBar;
