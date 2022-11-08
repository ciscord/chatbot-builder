import styled from 'styled-components';
import 'antd/dist/antd.css';

export const Wrapper = styled.div`
	display: flex;
	margin-top: 8px;
	margin-left: 20px;
	.profile {
		width: 34px;
		height: 34px;
		background: slateblue;
	}
	.alexa_preview_message {
		display: flex;
		width: 100%;
	}
	.alexa_preview__content {
		width: 100%;
	}
	.alexa_preview--mobile {
		max-height: 300px;
	}
`;
export const BodyTemplate1 = styled.div`
	background: ${props => (props.background ? `url(${props.background})` : '')};
	width: ${props => (props.deviceMode === 'mobile' ? '300px' : '500px')};
	border-radius: ${props => (props.deviceMode === 'mobile' ? '150px' : '0px')};
	height: 300px;
	margin-left: 10px;
	h3 {
		color: white;
		width: 100%;
		text-align: center;
		margin-left: ${props => (props.deviceMode === 'mobile' ? '0px' : '-40px')};
		padding-top: 20px;
	}

	h2 {
		color: white;
		width: 100%;
		text-align: left;
		padding: 20px 20px;
		max-height: 230px;
		overflow: auto;
		border-bottom-left-radius: ${props => (props.deviceMode === 'mobile' ? '120px' : '0px')};
		border-bottom-right-radius: ${props => (props.deviceMode === 'mobile' ? '120px' : '0px')};
	}
`;

export const BodyTemplate2 = styled.div`
	background: ${props => props.deviceMode === 'mobile' ? `url(${props.JSONObject.image})` : `url(${props.JSONObject.backgroundImage})`};
	width: ${props => (props.deviceMode === 'mobile' ? '300px' : '500px')};
	border-radius: ${props => (props.deviceMode === 'mobile' ? '150px' : '0px')};
	height: 300px;
	margin-left: 10px;
	h3 {
		color: white;
		width: 100%;
		text-align: center;
		margin-left: ${props => (props.deviceMode === 'mobile' ? '0px' : '30px')};
		padding-top: 20px;
		display: ${props => (props.deviceMode === 'mobile' ? 'none' : 'flex')};
	}

	h2 {
		color: white;
		width: 100%;
		text-align: left;
		margin-left: ${props => (props.deviceMode === 'mobile' ? '20px' : '40px')};
		padding: ${props => (props.deviceMode === 'mobile' ? '40px' : '20px')};
		max-height: 300px;
		overflow: auto;
	}

	.content {
		display: flex;
	}

	img {
		width: 150px;
		margin-right: 30px;
		display: ${props => (props.deviceMode === 'mobile' ? 'none' : 'flex')};
	}
`;

export const BodyTemplate3 = styled.div`
	background: ${props => props.deviceMode === 'mobile' ? `url(${props.JSONObject.image})` : `url(${props.JSONObject.backgroundImage})`};
	width: ${props => (props.deviceMode === 'mobile' ? '300px' : '500px')};
	border-radius: ${props => (props.deviceMode === 'mobile' ? '150px' : '0px')};
	height: 300px;
	margin-left: 10px;
	h3 {
		color: white;
		width: 100%;
		text-align: center;
		margin-left: ${props => (props.deviceMode === 'mobile' ? '0px' : '100px')};
		padding-top: 20px;
		display: ${props => (props.deviceMode === 'mobile' ? 'none' : 'flex')};
	}

	h2 {
		color: white;
		width: 100%;
		text-align: left;
		margin-left: ${props => (props.deviceMode === 'mobile' ? '20px' : '40px')};
		padding: ${props => (props.deviceMode === 'mobile' ? '40px' : '20px')};
		max-height: 300px;
		overflow: auto;
	}

	.content {
		display: flex;
	}

	img {
		width: 150px;
		margin-left: 30px;
		display: ${props => (props.deviceMode === 'mobile' ? 'none' : 'flex')};
	}
`;

export const BodyTemplate6 = styled.div`
	background: ${props => (props.background ? `url(${props.background})` : '')};
	width: ${props => (props.deviceMode === 'mobile' ? '300px' : '500px')};
	border-radius: ${props => (props.deviceMode === 'mobile' ? '150px' : '0px')};
	height: 300px;
	margin-left: 10px;
	display: flex;
	justify-content: ${props => (props.deviceMode === 'mobile' ? 'center' : 'flex-end')};
	flex-flow: column;
	h3 {
		color: white;
		width: 100%;
		text-align: center;
		margin-left: ${props => (props.deviceMode === 'mobile' ? '0px' : '-40px')};
		padding-top: 20px;
	}

	h2 {
		color: white;
		width: 100%;
		text-align: left;
		max-height: ${props => (props.deviceMode === 'mobile' ? '300px' : '80px')};
		overflow: auto;
		padding: 20px;
		border-radius: ${props => (props.deviceMode === 'mobile' ? '150px' : '0px')};
	}
`;

export const BodyTemplate7 = styled.div`
	background: ${props => props.JSONObject.backgroundImage ? `url(${props.JSONObject.backgroundImage.sources[0].url})` : ''};
	width: ${props => (props.deviceMode === 'mobile' ? '300px' : '500px')};
	border-radius: ${props => (props.deviceMode === 'mobile' ? '150px' : '0px')};
	height: 300px;
	margin-left: 10px;
	h3 {
		color: white;
		width: 100%;
		text-align: center;
		margin-left: ${props => (props.deviceMode === 'mobile' ? '0px' : '30px')};
		padding-top: ${props => (props.deviceMode === 'mobile' ? '40px' : '20px')};
		display: block;
	}

	.content {
		display: flex;
	}

	img {
		width: 100%;
		display: flex;
		padding: 0 30px 30px 30px;
		height: ${props => (props.deviceMode === 'mobile' ? '200px' : '250px')};
	}
`;

export const ListTemplate1 = styled.div`
	background: ${props => (props.JSONObject.backgroundImage ? `url(${props.JSONObject.backgroundImage})` : '')};
	width: ${props => (props.deviceMode === 'mobile' ? '300px' : '500px')};
	border-radius: ${props => (props.deviceMode === 'mobile' ? '150px' : '0px')};
	height: 300px;
	margin-left: 10px;
	h3 {
		color: white;
		width: 100%;
		text-align: center;
		margin-left: ${props => (props.deviceMode === 'mobile' ? '0px' : '30px')};
		padding-top: ${props => (props.deviceMode === 'mobile' ? '40px' : '20px')};
		display: block;
	}

	.content {
		display: flex;
		flex-flow: column;
		overflow: auto;
		max-height: 230px;
		border-bottom-left-radius: ${props => (props.deviceMode === 'mobile' ? '165px' : '0px')};
		border-bottom-right-radius: ${props => (props.deviceMode === 'mobile' ? '150px' : '0px')};
	}

	.item {
		display: flex;
		padding: 5px 10px 5px 10px;
		align-items: center;
		color: white;
		.middle {
			display: flex;
			margin-left: 20px;
			align-items: center;
			width: calc(100% - 100px);
			.text {
				margin-left: 10px;
				width: 100%;
				h3 {
					color: white;
					width: 100%;
					text-align: left;
					padding: 0px;
					margin: 0px;
				}
			}
		}
		h1 {
			color: white;
			font-size: 22px;
		}
		label {
			color: white;
		}
	}
	img {
		width: 80px;
		height: 80px;
	}
`;

export const ListItem2 = styled.div`
	background: ${props => `url(${props.background})`};
	height: 300px;
	max-height: 300px;
	width: 300px;
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	border-radius: 150px;
	h1 {
		color: white;
		width: 100%;
		text-align: center;
		font-size: 22px;
	}
	h2 {
		color: white;
		width: 100%;
		text-align: center;
		font-size: 12px;
	}
	h3 {
		color: white;
		width: 100%;
		text-align: center;
		font-size: 18px;
	}
`;
export const ListTemplate2 = styled.div`
	background: ${props => (props.JSONObject.backgroundImage ? `url(${props.JSONObject.backgroundImage})` : '')};
	width: ${props => (props.deviceMode === 'mobile' ? '300px' : '500px')};
	border-radius: ${props => (props.deviceMode === 'mobile' ? '150px' : '0px')};
	height: 300px;
	margin-left: 10px;
	h3 {
		color: white;
		width: 100%;
		text-align: center;
		margin-left: ${props => (props.deviceMode === 'mobile' ? '0px' : '30px')};
		padding-top: ${props => (props.deviceMode === 'mobile' ? '40px' : '20px')};
		display: block;
	}

	.content {
		display: flex;
		flex-flow: row;
		overflow: auto;
		max-height: 230px;
		border-bottom-left-radius: ${props => (props.deviceMode === 'mobile' ? '165px' : '0px')};
		border-bottom-right-radius: ${props => (props.deviceMode === 'mobile' ? '150px' : '0px')};
	}

	.item {
		display: flex;
		flex-flow: column;
		padding: 5px 10px 5px 10px;
		align-items: baseline;
		color: white;
		h3 {
			color: white;
			width: 100%;
			text-align: left;
			padding: 0px;
			margin: 0px;
		}

		h1 {
			color: white;
			font-size: 22px;
		}
		label {
			color: white;
		}
	}
	img {
		width: 150px;
		height: 150px;
	}
`;
