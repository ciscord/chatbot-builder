import styled from 'styled-components';
import 'antd/dist/antd.css';

export const Wrapper = styled.div`
	margin: 4px;
	margin-top: 8px;
	.p-block_kit_builder_preview__message {
		display: flex;
		margin: 10px 25px 25px;
	}
	.p-block_kit_builder_preview__app_icon {
		width: 36px;
		height: 36px;
		margin-right: 8px;
	}
	.p-block_kit_builder_preview__content {
		width: 100%;
	}
	.p-block_kit_builder_preview__app {
		display: flex;
		align-items: center;
	}
	.p-block_kit_renderer {
		width: 100%;
	}
	.p-block_kit_builder_preview__app span {
		margin-right: 5px;
	}
	.p-block_kit_builder_preview__app_name {
		color: #1d1c1d;
		font-weight: 900;
		font-size: 15px;
	}
	.c-app_badge,
	.c-app_label {
		border-radius: 2px;
		font-size: 10px;
		padding: 1px 3px;
		color: rgba(29, 28, 29, 0.7);
		background-color: rgba(29, 28, 29, 0.13);
		display: inline-block;
		height: 14px;
		line-height: 1.25;
		font-weight: 700;
		vertical-align: 0.125rem;
	}
	.c-timestamp--static,
	.c-timestamp--static:hover,
	.c-timestamp--static:link {
		text-decoration: none;
		cursor: default;
	}
	.c-timestamp,
	.c-timestamp:hover,
	.c-timestamp:link {
		color: #616061;
	}
	.c-timestamp {
		font-size: 12px;
	}
	.c-timestamp__label {
		color: #616061;
	}
	.p-section_block__accessory {
		display: flex;
		margin: 0 0 4px 8px;
		position: relative;
	}
	.p-section_block_text_content {
		flex: 1;
	}
	.p-section_block__text {
		width: 100%;
	}
	.p-block_kit_builder_preview__block_container {
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}
	.p-section_block {
		display: flex;
		flex-direction: row-reverse;
		width: 100%;
		font-size: 15px;
		line-height: 1.46668;
		font-weight: 400;
		margin: 8px 0 4px;
	}
	.p-block_kit_builder_preview__rendered-block {
		width: 100%;
	}
	.p-image_block--no_top_margin {
		margin-top: 0;
	}
	.p-image_block {
		margin: 8px 0;
		display: block;
	}
	.p-block_kit_builder_preview__message .p-image_block_container {
		display: block;
	}
	.p-image_block_container {
		display: inline-block;
		color: #616061;
	}
	.p-image_block_title {
		display: flex;
	}
	.p-image_block__title {
		font-size: 13px;
		line-height: 1.38463;
		font-weight: 400;
	}
	.c-message_attachment__media_trigger--caption {
		line-height: 1.38461538;
	}
	.c-message_attachment__media_trigger--caption {
		font-size: 13px;
	}
	.c-message_attachment__media_trigger {
		margin-left: 4px;
		white-space: nowrap;
	}
	.c-message_attachment__media_trigger .c-expandable_trigger {
		color: #1264a3;
		font-size: 15px;
		line-height: 1;
		margin-top: -4px;
	}
	.c-expandable_trigger {
		background: none;
		border: 0;
		color: inherit;
		font: inherit;
		line-height: normal;
		overflow: visible;
		padding: 0;
	}
	.c-button-unstyled {
		background: none;
		border: 0;
		color: inherit;
		font: inherit;
		margin: 0;
		line-height: inherit;
		overflow: initial;
		padding: 0;
		text-align: initial;
		vertical-align: initial;
		cursor: pointer;
	}
	.c-message_attachment__image_container,
	.c-message_attachment__thumb,
	.c-message_attachment__video_container {
		margin-top: 5px;
	}
	.c-aspect_box__inner {
		position: relative;
	}
	.c-aspect_box__content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.c-message_attachment__image {
		cursor: zoom-in;
		display: inline-block;
		width: 100%;
		height: 100%;
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;
	}
	.p-actions_block {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
		position: relative;
	}
	.p-actions_block_elements {
		display: flex;
		flex-wrap: wrap;
	}
	.p-actions_block__action {
		margin: 8px 8px 0 0;
	}
	.p-section_block__fields {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		word-break: break-word;
	}
	.p-field_section {
		width: calc(50% - 16px);
	}
	.p-mrkdwn_element,
	.p-mrkdwn_element .c-mrkdwn__code,
	.p-mrkdwn_element .c-mrkdwn__pre {
		word-break: break-word;
	}
	.p-context_block {
		display: flex;
		flex-wrap: wrap;
		margin: 4px 0;
	}
	.p-section_block__image.p-context_block_group__image {
		height: 20px;
		width: 20px;
		border-radius: 2px;
		margin-left: 0;
		display: inline-block;
	}
	.p-context_block_spacing--image {
		width: 4px;
		display: inline-block;
	}
	.p-divider_block {
		margin: 4px auto 8px;
		border-bottom: 1px solid #ddd;
		width: 100%;
	}
	.p-block_kit_renderer__block_wrapper {
		display: flex;
	}
	.p-section_block--stack-accessory-wrapper {
		display: flex;
		flex-direction: column-reverse;
	}
	stack-accessory {
		float: none;
		margin: 4px 0;
	}

	.p-section_block__accessory--wrap {
		float: right;
		z-index: 1;
	}

	.p-block_kit_builder_preview__attachment--mobile .p-actions_block_elements,
	.p-block_kit_builder_preview__attachment--mobile .p-block_kit_button_element,
	.p-block_kit_builder_preview__attachment--mobile .p-block_kit_date_picker_button,
	.p-block_kit_builder_preview__attachment--mobile .p-block_kit_overflow_element__button,
	.p-block_kit_builder_preview__attachment--mobile .p-block_kit_select_element.c-input_select {
		width: 100%;
	}
	.p-block_kit_builder_preview__attachment--mobile .p-actions_block__action {
		margin: 4px 0;
		width: 100%;
	}
	.p-block_kit_builder_preview__attachment--mobile .p-field_section {
		width: 100%;
	}
	.p-section_block__image {
		border-radius: 4px;
		margin-left: 4px;
		overflow: hidden;
		width: 88px;
		height: 88px;
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: cover;
	}
`;
