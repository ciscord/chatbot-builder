import React, { useRef } from 'react';
import {
	BellFilled,
	BellOutlined,
	FileFilled,
	GoldenFilled,
	LockOutlined,
	MessageFilled,
	PhoneFilled,
} from '@ant-design/icons';
import { Wrapper } from './style';

const Preview = ({ platform, children, deviceMode, project }) => {
	if (platform === 'slack' && deviceMode === 'laptop') {
		return (
			<Wrapper deviceMode={deviceMode}>
				<div className="left">
					<div className="slack">
						<h1>Slack</h1>
						<BellOutlined />
					</div>

					<div className="channel">
						<h1>Channel</h1>
					</div>

					<div className="general">
						<h1>
							<LockOutlined /> General
						</h1>
					</div>

					<div className="app">
						<h1>App</h1>
					</div>

					{project && (
						<div className="project">
							<span className="greencircle" />
							<h1>{project.name}</h1>
						</div>
					)}
				</div>
				<div className="main">
					<div className="main-top"><h1>{project && project.name}</h1></div>
					{children}
				</div>
			</Wrapper>
		);
	}

	if (platform === 'teams' && deviceMode === 'laptop') {
		return (
			<Wrapper deviceMode={deviceMode}>
				<div className="teams-left">
					<div className="teams-left-nav">
						<BellFilled />
						<h4>Activity</h4>
					</div>

					<div className="teams-left-nav">
						<MessageFilled />
						<h4>Chat</h4>
					</div>

					<div className="teams-left-nav">
						<GoldenFilled />
						<h4>Teams</h4>
					</div>

					<div className="teams-left-nav">
						<PhoneFilled />
						<h4>Calls</h4>
					</div>

					<div className="teams-left-nav">
						<FileFilled />
						<h4>Files</h4>
					</div>

					<div className="teams-left-nav">
						<h4>...</h4>
					</div>
				</div>
				<div className="teams-main">
					<div className="teams-main-top" />
					{children}
				</div>
			</Wrapper>
		);
	}

	if (platform === 'alexa') {
		return (
			<Wrapper deviceMode={deviceMode} platform={platform}>
				<div className="alexa-main">{children}</div>
			</Wrapper>
		);
	}

	if (platform === 'slack' && deviceMode === 'mobile') {
		return (
			<Wrapper deviceMode={deviceMode}>
				<div className="iphone-x">
					<div className="side">
						<div className="screen">{children}</div>
					</div>
					<div className="line" />
					<div className="volume-button" />
					<div className="power-button" />
				</div>
			</Wrapper>
		);
	}

	if (platform === 'teams' && deviceMode === 'mobile') {
		return (
			<Wrapper deviceMode={deviceMode}>
				<div className="iphone-x">
					<div className="side">
						<div className="screen">{children}</div>
					</div>
					<div className="line" />
					<div className="volume-button" />
					<div className="power-button" />
				</div>
			</Wrapper>
		);
	}
};

export default Preview;
