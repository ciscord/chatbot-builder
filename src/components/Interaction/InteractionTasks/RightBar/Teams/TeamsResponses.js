import React, { useState, useEffect } from 'react';
import { Divider, Input, Button, Select, Tag, Radio, Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Wrapper } from './TeamsResponses.style';
import { ResponseMode } from '../../../../../constants/interaction';

const { TextArea } = Input;
const { Option } = Select;

export const TeamsTextResponse = ({ element, onChange, taskList, onChangeProperty }) => {
	return (
		<Wrapper>
			<Tag>Text Response</Tag>
			<div className="center">
				<Radio.Group
					onChange={e => onChangeProperty(e.target.value, 0, element.property[0].taskId)}
					value={element.property[0].mode}
					size="small"
				>
					<Radio.Button value={ResponseMode.Static}>Static</Radio.Button>
					<Radio.Button value={ResponseMode.Dynamic}>Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			{element.property[0].mode === ResponseMode.Static ? (
				<TextArea rows={3} value={element.JSON.body[0].text} onChange={onChange} />
			) : (
				<Select
					value={element.property[0].taskId}
					style={{ width: '100%', marginTop: '8px' }}
					placeholder="Please select"
					onChange={taskId => onChangeProperty(ResponseMode.Dynamic, 0, taskId)}
				>
					{taskList.map(task => {
						const { id, title } = task;
						return (
							<Option value={id} key={id}>
								{title}
							</Option>
						);
					})}
				</Select>
			)}
		</Wrapper>
	);
};


let index = 0;

export const TeamsDropdownResponse = ({
	element,
	onChangeProperty,
	onAddOption,
	onDeleteOption,
	taskList,
}) => {
	const [name, setName] = useState('');
	const [selectedTaskId, setSelectedTaskId] = useState('');
	const onNameChange = event => {
		setName(event.target.value);
	};

	const addItem = () => {
		if (name === '' || selectedTaskId === '') return;
		onAddOption(name || `New item ${index++}`, selectedTaskId);
		setName('');
		setSelectedTaskId('');
	};

	const onSelectTask = taskId => {
		setSelectedTaskId(taskId);
	};
	return (
		<Wrapper>
			<Tag>Dropdown</Tag>
			<div className="center">
				<Radio.Group
					onChange={e => onChangeProperty(e.target.value, 0, element.property[0].taskId)}
					value={element.property[0].mode}
					size="small"
				>
					<Radio.Button value={ResponseMode.Static}>Static</Radio.Button>
					<Radio.Button value={ResponseMode.Dynamic}>Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			{element.property[0].mode === ResponseMode.Static ? (
				<>
					<div style={{ border: '1px solid #f0f0f0', padding: 8 }}>
						<Input style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
						<Select
							value={selectedTaskId}
							style={{ width: '100%', marginTop: '8px' }}
							placeholder="Please select"
							onChange={onSelectTask}
						>
							{taskList.map(task => {
								const { id, title } = task;
								return (
									<Option value={id} key={id}>
										{title}
									</Option>
								);
							})}
						</Select>
						<a style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }} onClick={addItem}>
							<PlusOutlined /> Add item
						</a>
					</div>
					<div className="items">
						{element.JSON.body[0].choices.map((item, index) => (
							<div key={index}>
								<Tag closable onClose={() => onDeleteOption(index)}>
									{item.title}
								</Tag>
								<br />
							</div>
						))}
					</div>{' '}
				</>
			) : (
				<Select
					value={element.property[0].taskId}
					style={{ width: '100%', marginTop: '8px' }}
					placeholder="Please select"
					onChange={taskId => onChangeProperty(ResponseMode.Dynamic, 0, taskId)}
				>
					{taskList.map(task => {
						const { id, title } = task;
						return (
							<Option value={id} key={id}>
								{title}
							</Option>
						);
					})}
				</Select>
			)}
		</Wrapper>
	);
};


export const TeamsButtonResponse = ({ element, onChangeButtonText, taskList, onChangeProperty }) => {
	return (
		<Wrapper>
			<Tag>Buttons</Tag>
			<div className="center">
				<Radio.Group
					onChange={e => onChangeProperty(e.target.value, 0, element.property[0].taskId)}
					value={element.property[0].mode}
					size="small"
				>
					<Radio.Button value={ResponseMode.Static}>Static</Radio.Button>
					<Radio.Button value={ResponseMode.Dynamic}>Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			{element.property[0].mode === ResponseMode.Static ? (
				<Input
					style={{ marginTop: '8px' }}
					value={element.JSON.body[0].actions[0].title}
					onChange={onChangeButtonText}
				/>
			) : (
				<Select
					value={element.property[0].taskId}
					style={{ width: '100%', marginTop: '8px' }}
					placeholder="Please select"
					onChange={taskId => onChangeProperty(ResponseMode.Dynamic, 0, taskId)}
				>
					{taskList.map(task => {
						const { id, title } = task;
						return (
							<Option value={id} key={id}>
								{title}
							</Option>
						);
					})}
				</Select>
			)}

			<Select value={element.property[1].taskId} style={{ width: '100%', marginTop: '8px' }} placeholder="Please select" onChange={taskId => onChangeProperty('button1', 1, taskId)}>
				{taskList.map(task => {
					const { id, title } = task;
					return (
						<Option value={id} key={id}>
							{title}
						</Option>
					);
				})}
			</Select>
		</Wrapper>
	);
};


export const TeamsTabButtonsResponse = ({ element, onChangeButtonText, taskList, onChangeProperty }) => {
	return (
		<Wrapper>
			<Tag>Buttons</Tag>
			<div className="center">
				<Radio.Group
					onChange={e => onChangeProperty(e.target.value, 0, element.property[0].taskId)}
					value={element.property[0].mode}
					size="small"
				>
					<Radio.Button value={ResponseMode.Static}>Static</Radio.Button>
					<Radio.Button value={ResponseMode.Dynamic}>Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			{element.property[0].mode === ResponseMode.Static ? (
				<Input
					style={{ marginTop: '8px' }}
					value={element.JSON.body[0].actions[0].title}
					onChange={onChangeButtonText}
				/>
			) : (
				<Select
					value={element.property[0].taskId}
					style={{ width: '100%', marginTop: '8px' }}
					placeholder="Please select"
					onChange={taskId => onChangeProperty(ResponseMode.Dynamic, 0, taskId)}
				>
					{taskList.map(task => {
						const { id, title } = task;
						return (
							<Option value={id} key={id}>
								{title}
							</Option>
						);
					})}
				</Select>
			)}

			<Select value={element.property[1].taskId} style={{ width: '100%', marginTop: '8px' }} placeholder="Please select" onChange={taskId => onChangeProperty('button1', 1, taskId)}>
				{taskList.map(task => {
					const { id, title } = task;
					return (
						<Option value={id} key={id}>
							{title}
						</Option>
					);
				})}
			</Select>

			<Divider />
			<div className="center">
				<Radio.Group
					onChange={e => onChangeProperty(e.target.value, 2, element.property[2].taskId)}
					value={element.property[2].mode}
					size="small"
				>
					<Radio.Button value={ResponseMode.Static}>Static</Radio.Button>
					<Radio.Button value={ResponseMode.Dynamic}>Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			{element.property[2].mode === ResponseMode.Static ? (
				<Input
					style={{ marginTop: '8px' }}
					value={element.JSON.body[0].actions[1].title}
					onChange={onChangeButtonText}
				/>
			) : (
				<Select
					value={element.property[2].taskId}
					style={{ width: '100%', marginTop: '8px' }}
					placeholder="Please select"
					onChange={taskId => onChangeProperty(ResponseMode.Dynamic, 2, taskId)}
				>
					{taskList.map(task => {
						const { id, title } = task;
						return (
							<Option value={id} key={id}>
								{title}
							</Option>
						);
					})}
				</Select>
			)}

			<Select value={element.property[3].taskId} style={{ width: '100%', marginTop: '8px' }} placeholder="Please select" onChange={taskId => onChangeProperty('button1', 3, taskId)}>
				{taskList.map(task => {
					const { id, title } = task;
					return (
						<Option value={id} key={id}>
							{title}
						</Option>
					);
				})}
			</Select>

			<Divider/>
			<div className="center">
				<Radio.Group
					onChange={e => onChangeProperty(e.target.value, 4, element.property[4].taskId)}
					value={element.property[3].mode}
					size="small"
				>
					<Radio.Button value={ResponseMode.Static}>Static</Radio.Button>
					<Radio.Button value={ResponseMode.Dynamic}>Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			{element.property[4].mode === ResponseMode.Static ? (
				<Input
					style={{ marginTop: '8px' }}
					value={element.JSON.body[0].actions[2].title}
					onChange={onChangeButtonText}
				/>
			) : (
				<Select
					value={element.property[4].taskId}
					style={{ width: '100%', marginTop: '8px' }}
					placeholder="Please select"
					onChange={taskId => onChangeProperty(ResponseMode.Dynamic, 4, taskId)}
				>
					{taskList.map(task => {
						const { id, title } = task;
						return (
							<Option value={id} key={id}>
								{title}
							</Option>
						);
					})}
				</Select>
			)}

			<Select value={element.property[5].taskId} style={{ width: '100%', marginTop: '8px' }} placeholder="Please select" onChange={taskId => onChangeProperty('button1', 5, taskId)}>
				{taskList.map(task => {
					const { id, title } = task;
					return (
						<Option value={id} key={id}>
							{title}
						</Option>
					);
				})}
			</Select>
		</Wrapper>
	);
};