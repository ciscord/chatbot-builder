import styled from 'styled-components';
import 'antd/dist/antd.css';

export const Wrapper = styled.div`
	margin: 8px;
	width: calc(100% - 250px);
	display: flex;
	flex-flow: column;
	.toolbar {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 10px;
	}

	.ant-radio-group {
		margin-left: 20px;
	}

	.footer {
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
	}
`;
export const ItemList = styled.div`
	min-height: 90%;
	display: flex;
	flex-flow: column;
	overflow: auto;
	max-height: ${props => (props.deviceMode === 'laptop' ? '300px' : '652px')};
`;
