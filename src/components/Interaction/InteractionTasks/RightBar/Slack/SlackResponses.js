import React, { useState, useEffect } from 'react';
import { Divider, Input, Button, Select, Tag, Radio, Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Wrapper } from './SlackResponse.style';
import { ResponseMode } from '../../../../../constants/interaction';

const { TextArea } = Input;
const { Option } = Select;

export const SlackTextResponse = ({ element, onChange, taskList, onChangeProperty }) => {
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
				<TextArea rows={3} value={element.JSON.blocks[0].text.text} onChange={onChange} />
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

export const SlackDropdownResponse = ({
	element,
	onTextChange,
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
				<TextArea rows={3} value={element.JSON.blocks[0].text.text} onChange={onTextChange} />
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
			<Divider />
			<Tag>Dropdown</Tag>
			<div className="center">
				<Radio.Group
					onChange={e => onChangeProperty(e.target.value, 1, element.property[1].taskId)}
					value={element.property[1].mode}
					size="small"
				>
					<Radio.Button value={ResponseMode.Static}>Static</Radio.Button>
					<Radio.Button value={ResponseMode.Dynamic}>Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			{element.property[1].mode === ResponseMode.Static ? (
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
						{element.JSON.blocks[0].accessory.options.map((item, index) => (
							<div key={index}>
								<Tag closable onClose={() => onDeleteOption(index)}>
									{item.text.text}
								</Tag>
								<br />
							</div>
						))}
					</div>{' '}
				</>
			) : (
				<Select
					value={element.property[1].taskId}
					style={{ width: '100%', marginTop: '8px' }}
					placeholder="Please select"
					onChange={taskId => onChangeProperty(ResponseMode.Dynamic, 1, taskId)}
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

export const SlackDatePickerResponse = ({ element, onChange, onChangeProperty, taskList }) => {
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
				<TextArea rows={3} value={element.JSON.blocks[0].text.text} onChange={onChange} />
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
			<Divider />
			<Tag>Date Picker</Tag>
				<Select
					value={element.property[1].taskId}
					style={{ width: '100%', marginTop: '8px' }}
					placeholder="Please select"
					onChange={taskId => onChangeProperty('date', 1, taskId)}
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
		</Wrapper>
	);
};

export const SlackImageResponse = ({ element, onChangeImageTitle, onChangeProperty, onChangeImageUrl, taskList }) => {
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
				<TextArea rows={3} value={element.JSON.blocks[0].title.text} onChange={onChangeImageTitle} />
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
			<Divider />
			<Tag>Image</Tag>
			<div className="center">
				<Radio.Group
					onChange={e => onChangeProperty(e.target.value, 1, element.property[1].taskId)}
					value={element.property[1].mode}
					size="small"
				>
					<Radio.Button value={ResponseMode.Static}>Static</Radio.Button>
					<Radio.Button value={ResponseMode.Dynamic}>Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			{element.property[1].mode === ResponseMode.Static ? (
				<Input style={{ marginTop: '8px' }} value={element.JSON.blocks[0].image_url} onChange={onChangeImageUrl} />
			) : (
				<Select
					value={element.property[1].taskId}
					style={{ width: '100%', marginTop: '8px' }}
					placeholder="Please select"
					onChange={taskId => onChangeProperty(ResponseMode.Dynamic, 1, taskId)}
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

export const SlackButtonResponse = ({ element, onTextChange, onChangeButtonText, taskList, onChangeProperty }) => {
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
				<TextArea rows={3} value={element.JSON.blocks[0].text.text} onChange={onTextChange} />
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
			<Divider />
			<Tag>Buttons</Tag>
			<div className="center">
				<Radio.Group
					onChange={e => onChangeProperty(e.target.value, 1, element.property[1].taskId)}
					value={element.property[1].mode}
					size="small"
				>
					<Radio.Button value={ResponseMode.Static}>Static</Radio.Button>
					<Radio.Button value={ResponseMode.Dynamic}>Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			{element.property[1].mode === ResponseMode.Static ? (
				<Input
					style={{ marginTop: '8px' }}
					value={element.JSON.blocks[0].accessory.text.text}
					onChange={onChangeButtonText}
				/>
			) : (
				<Select
					value={element.property[1].taskId}
					style={{ width: '100%', marginTop: '8px' }}
					placeholder="Please select"
					onChange={taskId => onChangeProperty(ResponseMode.Dynamic, 1, taskId)}
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

			<Select value={element.property[2].taskId} style={{ width: '100%', marginTop: '8px' }} placeholder="Please select" onChange={taskId => onChangeProperty('button1', 2, taskId)}>
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

export const SlackApprovalTemplate1Response = ({
	element,
	onTextChange,
	onAddField,
	onChangeButtonText1,
	onChangeButtonText2,
	onDeleteField,
}) => {
	const [name, setName] = useState('');
	const onNameChange = event => {
		setName(event.target.value);
	};

	const addItem = () => {
		onAddField(name || `New field ${index++}`);
		setName('');
	};
	return (
		<Wrapper>
			<Tag>Text Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<TextArea rows={3} value={element.JSON.blocks[0].text.text} onChange={onTextChange} />
			<Divider />
			<Tag>Fields</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<div className="items">
				{element.JSON.blocks[1].fields.map((item, index) => (
					<div key={index}>
						<Tag closable onClose={() => onDeleteField(index)}>
							{item.text}
						</Tag>
						<br />
					</div>
				))}
			</div>
			<div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
				<TextArea rows={3} style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
				<a style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }} onClick={addItem}>
					<PlusOutlined /> Add item
				</a>
			</div>
			<Divider />
			<Tag>Buttons</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<Input
				style={{ marginTop: '8px' }}
				value={element.JSON.blocks[2].elements[0].text.text}
				onChange={onChangeButtonText1}
			/>
			<Input
				style={{ marginTop: '8px' }}
				value={element.JSON.blocks[2].elements[1].text.text}
				onChange={onChangeButtonText2}
			/>
		</Wrapper>
	);
};

export const SlackApprovalTemplate2Response = ({
	element,
	onTextChange,
	onChangeButtonText1,
	onChangeButtonText2,
	onText1Change,
	onText1ImageChange,
}) => {
	return (
		<Wrapper>
			<Tag>Text Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<TextArea rows={3} value={element.JSON.blocks[0].text.text} onChange={onTextChange} />
			<Divider />
			<Tag>Text-Image Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<TextArea rows={3} value={element.JSON.blocks[1].text.text} onChange={onText1Change} />
			<Input
				style={{ marginTop: '8px' }}
				value={element.JSON.blocks[1].accessory.image_url}
				onChange={onText1ImageChange}
			/>
			<Divider />
			<Tag>Buttons</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<Input
				style={{ marginTop: '8px' }}
				value={element.JSON.blocks[2].elements[0].text.text}
				onChange={onChangeButtonText1}
			/>
			<Input
				style={{ marginTop: '8px' }}
				value={element.JSON.blocks[2].elements[1].text.text}
				onChange={onChangeButtonText2}
			/>
		</Wrapper>
	);
};

export const SlackNotification1 = ({
	element,
	onTextChange,
	onChangeButtonText1,
	onChangeButtonText2,
	onText1Change,
	onText1ImageChange,
}) => {
	return (
		<Wrapper>
			<Tag>Text Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<TextArea rows={3} value={element.JSON.blocks[0].text.text} onChange={onTextChange} />
			<Divider />
			<Tag>Text-Image Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<TextArea rows={3} value={element.JSON.blocks[2].text.text} />
			<Input style={{ marginTop: '8px' }} value={element.JSON.blocks[2].accessory.image_url} />
			<Divider />
			<Tag>Image Element Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<Input style={{ marginTop: '8px' }} value={element.JSON.blocks[3].elements[0].image_url} />
			<TextArea rows={3} value={element.JSON.blocks[3].elements[1].text} />

			<Divider />
			<Tag>Text Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<TextArea rows={3} value={element.JSON.blocks[5].text.text} />

			<Divider />
			<Tag>Button Accessory Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<TextArea rows={3} value={element.JSON.blocks[6].text.text} />
			<Input style={{ marginTop: '8px' }} value={element.JSON.blocks[6].accessory.text.text} />
			<Divider />
			<Tag>Button Accessory Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<TextArea rows={3} value={element.JSON.blocks[6].text.text} />
			<Input style={{ marginTop: '8px' }} value={element.JSON.blocks[7].accessory.text.text} />
			<Divider />
			<Tag>Button Accessory Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<TextArea rows={3} value={element.JSON.blocks[6].text.text} />
			<Input style={{ marginTop: '8px' }} value={element.JSON.blocks[8].accessory.text.text} />
			<Divider />
			<Tag>Text Response</Tag>
			<div className="center">
				<Radio.Group defaultValue="a" size="small">
					<Radio.Button value="a">Static</Radio.Button>
					<Radio.Button value="b">Dynamic</Radio.Button>
				</Radio.Group>
			</div>
			<TextArea rows={3} value={element.JSON.blocks[9].text.text} />
		</Wrapper>
	);
};
