import React from 'react';
import { Wrapper } from './AlexsaTemplate.style';
import generateJSONToUI from './generateJSONToUI';
import LogoImg from '../../../../../images/logo.svg';

const AlexsaTemplate = ({ element, deviceMode }) => {
	return (
		<Wrapper element={element}>
			<div className="profile">
				<img src={LogoImg} alt="logo" width={34} height={34} />
			</div>
			<div
				className={
					deviceMode === 'laptop'
						? 'alexa_preview_message alexa_preview--desktop'
						: 'alexa_preview_message alexa_preview--mobile'
				}
			>
				<div className="alexa_preview__content">{generateJSONToUI(element.JSON, deviceMode)}</div>
			</div>
		</Wrapper>
	);
};

export default AlexsaTemplate;
