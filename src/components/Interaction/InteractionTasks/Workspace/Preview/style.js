import styled from 'styled-components';
import 'antd/dist/antd.css';

export const Wrapper = styled.div`
	display: flex;
	height: 100%;
	border: 1px solid lightgrey;
	justify-content: center;
	margin-top: ${props => (props.deviceMode === 'laptop' ? '0px' : '00px')};
	${props => (props.platform === 'alexa' ? 'margin-top: 0px' : '')};
	.left {
		width: 200px;
		background: #3f0e40;
	}
	.main {
		width: 100%;
	}

	.main-top {
		height: 60px;
		border-bottom: 1px solid lightgray;
		h1 {
			font-size: 16px;
			padding-top: 17px;
			padding-left: 20px;
			font-weight: bold;
		}
	}
	.slack {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		color: white;
		margin-top: 20px;
		margin-right: 10px;
		margin-left: 20px;
		h1 {
			color: white;
			font-size: 20px;
		}
	}

	.channel {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		color: white;
		margin-top: 20px;
		margin-right: 10px;
		margin-left: 20px;
		h1 {
			color: white;
			font-size: 15px;
			font-weight: 700;
		}
	}

	.general {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		color: white;
		margin-right: 10px;
		margin-left: 20px;
		h1 {
			color: white;
			font-size: 14px;
		}
	}

	.app {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		color: white;
		margin-top: 20px;
		margin-right: 10px;
		margin-left: 20px;
		h1 {
			color: white;
			font-size: 15px;
		}
	}

	.project {
		align-items: baseline;
		display: flex;
		justify-content: flex-start;
		color: white;
		margin-right: 10px;
		margin-left: 20px;
		h1 {
			color: white;
			font-size: 13px;
			margin-left: 10px;
		}
		.greencircle {
			width: 8px;
			height: 8px;
			border-radius: 4px;
			background-color: #2bac76;
		}
	}

	.iphone-x {
		position: relative;
		z-index: 1;
		height: 694px;
		width: 342px;
	}
	.iphone-x .side {
		background: #1c1c1c26;
		border-radius: 54px;
		box-shadow: inset 0 0 2px 2px #6969694a, inset 0 0 0 6px #e2e3e9, 0px -1px 13px 9px rgba(255, 255, 255, 0.8) inset;
		height: 694px;
		padding: 15px 22px;
		width: 342px;
		z-index: 1;
	}
	.iphone-x .screen {
		background: #fff;
		background-position: center center;
		background-size: cover;
		border-radius: 33px;
		position: relative;
		height: 652px;
		width: 300px;
		margin-left: -1px;
		margin-top: 6px;
		z-index: 198;
		overflow: hidden;
	}
	video {
		height: 700px;
		width: 350px;
		margin-top: -30px;
		margin-left: -10px;
	}
	.iphone-x .line::after,
	.iphone-x .line::before {
		content: '';
		position: absolute;
		border: solid rgba(68, 68, 68, 0.25);
		border-width: 0 6px;
		height: 5px;
		left: 0;
		width: 100%;
		z-index: 9;
	}
	.iphone-x .line::after {
		top: 68px;
	}
	.iphone-x .line::before {
		bottom: 68px;
	}
	.iphone-x .header {
		background: #1c1c1c;
		border-bottom-left-radius: 13px;
		border-bottom-right-radius: 13px;
		height: 24px;
		left: 50%;
		margin-left: -82px;
		position: absolute;
		top: 15px;
		width: 164px;
		z-index: 199;
	}
	.iphone-x .sensor-1::after,
	.iphone-x .sensor-1::before {
		content: '';
		position: absolute;
	}
	.iphone-x .sensor-1::after {
		background: #222;
		border-radius: 50%;
		height: 11px;
		width: 11px;
		left: 1%;
		margin-left: 10px;
		top: 3px;
	}
	.iphone-x .sensor-1::before {
		background: #222;
		border-radius: 50%;
		height: 11px;
		width: 11px;
		left: 10%;
		margin-left: 20px;
		top: 3px;
	}
	.iphone-x .sensor-2::after,
	.iphone-x .sensor-2::before {
		content: '';
		position: absolute;
	}
	.iphone-x .sensor-2::before {
		background: #333;
		border-radius: 2.5px;
		height: 5px;
		width: 40px;
		left: 50%;
		margin-left: -20px;
		top: 7px;
	}
	.iphone-x .sensor-3::after,
	.iphone-x .sensor-3::before {
		content: '';
		position: absolute;
	}
	.iphone-x .sensor-3::before {
		background: #444;
		border-radius: 50%;
		height: 11px;
		width: 11px;
		left: 50%;
		margin-left: 35px;
		top: 3px;
		box-shadow: 0px 0px 5px 2px navy inset;
	}
	.iphone-x .sensor-3::after {
		background: #222;
		border-radius: 50%;
		height: 15px;
		width: 15px;
		left: 65%;
		margin-left: 33px;
	}
	.iphone-x .volume-button {
		background: #c8cacb;
		height: 26px;
		left: -2px;
		position: absolute;
		top: 92px;
		width: 3px;
	}
	.iphone-x .volume-button::after,
	.iphone-x .volume-button::before {
		content: '';
		position: absolute;
		background: #c8cacb;
		height: 50px;
		left: 0;
		width: 3px;
	}
	.iphone-x .volume-button::after {
		top: 48px;
	}
	.iphone-x .volume-button::before {
		top: 112px;
	}
	.iphone-x .power-button {
		background: #c8cacb;
		height: 80px;
		right: -2px;
		position: absolute;
		top: 160px;
		width: 3px;
	}

	.teams-left {
		width: 68px;
		background: #313246;
	}

	.teams-left-nav {
		display: flex;
		margin-top: 20px;
		flex-flow: column;
		color: white;
		font-size: 21px;
		aline-items: center;
		h4 {
			font-size: 11px;
			color: white;
			margin: 0px;
			text-align: center;
			padding: 0px;
		}
	}
	.teams-main {
		width: 100%;
		background: #f3f2f1;
	}

	.teams-main-top {
		height: 60px;
		border-bottom: 1px solid lightgray;
	}
	.teams {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		color: white;
		margin-top: 20px;
		margin-right: 10px;
		margin-left: 20px;
		h1 {
			color: white;
			font-size: 20px;
		}
	}

	.teams-channel {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		color: white;
		margin-top: 20px;
		margin-right: 10px;
		margin-left: 20px;
		h1 {
			color: white;
			font-size: 15px;
			font-weight: 700;
		}
	}

	.teams-general {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		color: white;
		margin-right: 10px;
		margin-left: 20px;
		h1 {
			color: white;
			font-size: 14px;
		}
	}

	.teams-app {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		color: white;
		margin-top: 20px;
		margin-right: 10px;
		margin-left: 20px;
		h1 {
			color: white;
			font-size: 15px;
		}
	}

	.teams-project {
		align-items: baseline;
		display: flex;
		justify-content: flex-start;
		color: white;
		margin-right: 10px;
		margin-left: 20px;
		h1 {
			color: white;
			font-size: 13px;
			margin-left: 10px;
		}
		.greencircle {
			width: 8px;
			height: 8px;
			border-radius: 4px;
			background-color: #2bac76;
		}
	}

	.alexa-main {
		width: 100%;
		background: #f3f2f1;
	}
`;
