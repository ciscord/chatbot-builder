import React from 'react';
import get from 'lodash/get';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, DatePicker } from 'antd';
import { toHTML } from 'slack-markdown';

const renderContext = (slackBlock, deviceMode) => {
	const elements = get(slackBlock, 'elements', null);
	return (
		<div className="p-context_block">
			{elements
				&& elements.map(element => (
					<div className="p-context_block_element">
						{element.type === 'image' && (
							<>
								<img src={element.image_url} className="p-section_block__image p-context_block_group__image" />
								<div className="p-context_block_spacing--image" />
							</>
						)}
						{element.type === 'mrkdwn' && (
							<div className="p-mrkdwn_element p-context_block__text">
								<span dir="auto" dangerouslySetInnerHTML={{ __html: toHTML(element.text) }} />
							</div>
						)}
					</div>
				))}
		</div>
	);
};
const renderActions = (slackBlock, deviceMode) => {
	const elements = get(slackBlock, 'elements', null);

	return (
		<div className="p-actions_block">
			<div className="p-actions_block_elements">
				{elements.map(element => (
					<div className="p-actions_block__action">
						{element.type === 'button' && (
							<Button block={deviceMode !== 'laptop'} ghost={!!element.style} type={element.style}>
								{element.text.text}
							</Button>
						)}
					</div>
				))}
			</div>
			<div className="p-action_block__icons" />
		</div>
	);
};

const renderSection = (slackBlock, deviceMode) => {
	const text = get(slackBlock, 'text', null);
	const accessory = get(slackBlock, 'accessory', null);
	const elements = get(slackBlock, 'elements', null);
	const fields = get(slackBlock, 'fields', null);

	return (
		<div
			className={
				deviceMode === 'laptop'
					? 'p-section_block p-section_block--no_top_margin'
					: 'p-section_block p-section_block--wrap p-section_block--no_top_margin p-section_block--stack-accessory-wrapper'
			}
		>
			{accessory && renderBlockAccessory(accessory, deviceMode)}
			{text && renderBlockText(text)}
			{fields && renderBlockFields(fields)}
		</div>
	);
};

const renderBlockText = text => {
	return (
		<div className="p-section_block_text_content">
			<div className="p-section_block__text">
				<div className="p-mrkdwn_element">
					{text.type === 'mrkdwn' && <span dir="auto" dangerouslySetInnerHTML={{ __html: toHTML(text.text) }} />}
					{text.type === 'plain_text' && <span dir="auto">{text.text}</span>}
				</div>
			</div>
		</div>
	);
};

const renderBlockFields = fields => {
	return (
		<div className="p-section_block_text_content">
			<div className="p-section_block__fields">
				{fields.map(field => {
					return (
						<div className="p-field_section">
							{field.type === 'mrkdwn' && (
								<div className="p-mrkdwn_element">
									<span dir="auto" dangerouslySetInnerHTML={{ __html: toHTML(field.text) }} />
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

const renderBlockAccessory = (accessory, deviceMode) => {
	return (
		<div
			className={
				deviceMode === 'laptop'
					? 'p-section_block__accessory'
					: 'p-section_block__accessory p-section_block__accessory--wrap p-section_block--stack-accessory'
			}
		>
			{accessory.type === 'static_select' && (
				<Dropdown overlay={generateMenu(accessory)}>
					<Button>
						{accessory.placeholder.text} <DownOutlined />
					</Button>
				</Dropdown>
			)}
			{accessory.type === 'datepicker' && <DatePicker />}
			{accessory.type === 'button' && <Button block={deviceMode !== 'laptop'}>{accessory.text.text}</Button>}
			{accessory.type === 'image' && (
				<div
					className="p-section_block__image"
					style={{
						backgroundImage: `url(${accessory.image_url})`,
					}}
				/>
			)}
		</div>
	);
};

const generateMenu = accessory => {
	return (
		<Menu>
			{accessory.options.map(option => (
				<Menu.Item key={option.value}>{option.text.text}</Menu.Item>
			))}
		</Menu>
	);
};

const renderImage = slackBlock => {
	return (
		<div className="p-image_block p-image_block--no_top_margin">
			<div className="p-image_block_container">
				<div className="p-image_block_title">
					<div className="p-plain_text_element p-image_block__title">
						<span dir="auto">{slackBlock.title.text}</span>
					</div>
					<span className="c-message_attachment__media_trigger c-message_attachment__media_trigger--caption">
						(1 MB)
						<button className="c-button-unstyled c-expandable_trigger" type="button">
							<i className="c-deprecated-icon c-icon--caret-down c-deprecated-icon--inherit" />
						</button>
					</span>
				</div>
				<div className="p-image_block_container__expandable_container">
					<div className="c-aspect_box__outer c-message_attachment__image_container" style={{ width: '220px' }}>
						<div className="c-aspect_box__inner" style={{ paddingTop: '100%' }}>
							<div className="c-aspect_box__content">
								<a
									target="_blank"
									className="c-link c-message_attachment__image"
									style={{
										backgroundImage: `url(${slackBlock.image_url})`,
									}}
								>
									{slackBlock.image_url}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const generateJSONFromType = (JSONObject, deviceMode) => {
	const slackBlocks = JSONObject.blocks;
	return (
		<>
			{slackBlocks.map((slackBlock, index) => {
				const { type } = slackBlock;

				return (
					<div className="" key={index}>
						<div className="p-block_kit_builder_preview__block_container">
							<div className="p-block_kit_builder_preview__rendered-block">
								<div className="p-block_kit_renderer__block_wrapper">
									{type === 'divider' && <div className="p-divider_block" />}
									{type === 'section' && renderSection(slackBlock, deviceMode)}
									{type === 'image' && renderImage(slackBlock, deviceMode)}
									{type === 'actions' && renderActions(slackBlock, deviceMode)}
									{type === 'context' && renderContext(slackBlock, deviceMode)}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default generateJSONFromType;
