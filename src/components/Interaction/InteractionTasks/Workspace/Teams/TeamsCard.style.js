import styled from 'styled-components';
import 'antd/dist/antd.css';

export const Wrapper = styled.div`
	margin: 4px;
	margin-top: 8px;
	display: flex;
	.profile {
		width: 34px;
		height: 34px;
		background: slateblue;
	}
	.card {
		background: white;
		margin-left: 10px;
		min-width: 400px;
		position: relative;
	}
	.card-title {
		font-size: 12px;
		margin-left: 15px;
	}
	.date {
		font-weight: 100;
	}

	.left-button {
		background: black;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		opacity: 0.7;
		position: absolute;
		left: 0px;
		top: 50%;
		color: white;
	}

	.right-button {
		background: black;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		opacity: 0.7;
		position: absolute;
		right: 0px;
		top: 50%;
		color: white;
	}

	.dot-group {
		display: flex;
		justify-content: center;
	}

	.carousel__dot {
		width: 10px;
		height: 10px;
		border-radius: 5px;
		padding: 0px;
		background: black;
		opacity: 0.6;
	}
`;
