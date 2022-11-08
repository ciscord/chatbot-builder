import React from 'react';
import moment from 'moment';
import { Wrapper } from './SlackBlockKit.style';
import generateJSONToUI from './generateJSONToUI';
import BotImg from '../../../../../images/bot.png';
import UserImg from '../../../../../images/user.png';
import { SLACK } from '../../../../../constants/interaction';

const SlackBlockKit = ({ element, deviceMode, project }) => {
	return (
		<Wrapper>
			<div
				className={
					deviceMode === 'laptop'
						? 'p-block_kit_builder_preview__message p-block_kit_builder_preview__attachment p-block_kit_builder_preview__attachment--desktop'
						: 'p-block_kit_builder_preview__message p-block_kit_builder_preview__attachment p-block_kit_builder_preview__attachment--mobile'
				}
			>
				<img
					alt="App Icon"
					className="p-block_kit_builder_preview__app_icon"
					src={element.type === SLACK.slackPhrase ? UserImg : BotImg}
				/>
				<div className="p-block_kit_builder_preview__content">
					<div className="p-block_kit_builder_preview__app">
						<span className="p-block_kit_builder_preview__app_name">
							{element.type === SLACK.slackPhrase ? 'Bob' : project.name || 'Project'}
						</span>
						<span className="c-app_badge" data-stringify-suffix=" ">
							App
						</span>
						<span className="c-timestamp c-timestamp--static" delay="300" aria-describedby="slack-kit-tooltip">
							<span className="c-timestamp__label" data-stringify-prefix="[" data-stringify-suffix="]">
								{moment().format('hh:mm a')}
							</span>
						</span>
					</div>
					<div className="p-block_kit_renderer" data-qa="block-kit-renderer">
						{generateJSONToUI(element.JSON, deviceMode)}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default SlackBlockKit;
