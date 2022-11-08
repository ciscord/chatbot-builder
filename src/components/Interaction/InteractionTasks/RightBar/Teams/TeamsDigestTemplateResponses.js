import React, { useState, useEffect } from 'react';
import { Divider, Input, Button, Select, Tag, Radio, Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Wrapper } from './TeamsResponses.style';
import { ResponseMode } from '../../../../../constants/interaction';

const { TextArea } = Input;
const { Option } = Select;

export const TeamsDigestTemplateResponses = ({
	element,
	taskList,
	onChangeProperty,
	onChangeThumbnailImageUrl,
  onChangeThumbnailLargeText,
  onChangeButtonText,
}) => {
	return (
		<Wrapper>
			<Divider />
			<Tag>Image</Tag>
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
					value={element.JSON.body[0].items[0].columns[0].items[0].url}
					onChange={onChangeThumbnailImageUrl}
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
			<Divider />
			<Tag>Text Responses</Tag>
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
				<TextArea
					rows={3}
					value={element.JSON.body[0].items[0].columns[1].items[0].text}
					onChange={onChangeThumbnailLargeText}
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
				<TextArea
					rows={3}
					value={element.JSON.body[0].items[0].columns[1].items[1].text}
					onChange={onChangeThumbnailLargeText}
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
				<TextArea
					rows={3}
					value={element.JSON.body[0].items[0].columns[1].items[2].text}
					onChange={onChangeThumbnailLargeText}
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
		</Wrapper>
	);
};
