import styled from 'styled-components';
import 'antd/dist/antd.css';

export const Wrapper = styled.div`
	margin: 4px;
	margin-top: 8px;
	width: 350px;
	border-left: solid;
	border-color: lightgray;
	border-width: 1px;
	padding-left: 10px;
	overflow: auto;
	${props => props.disabled && 'pointer-events: none; opacity: 0.5;'}
	.taskDiv {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.basic-multi-select {
		width: 100%;
		margin-left: 10px;
	}

	.phrases {
		margin-top: 30px;
	}

	.phrasediv {
		margin-bottom: 8px;
	}

	.nlgdiv {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 10px;
	}
	h3 {
		display: flex;
		justify-content: flex-end;
		font-size: 12px;
		color: darkgray;
		padding: 8px;
	}

	.center {
		display: flex;
		justify-content: center;
		margin-top: 8px;
		margin-bottom: 8px;
	}
`;
