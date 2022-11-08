import styled from 'styled-components';
import 'antd/dist/antd.css';

export const Wrapper = styled.div`
	display: flex;
	height: 75vh;

	.sidebar {
		margin: 8px;
		border-radius: 2px;
		width: 20%;
		height: 75vh;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow: scroll;
	}

	.choices {
		margin-top: 8px;
		border-radius: 4px;
		border: 1px solid lightgrey;
		height: 100%;
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: scroll;
	}

	.imageDiv {
		margin: 4px;
		margin-top: 8px;
	}

	.dropdownButton {
		width: 100%;
		display: flex;
		align-content: flex-start;
	}

	.iconDiv {
		padding-top: 4px;
		padding-right: 5px;
	}
`;
