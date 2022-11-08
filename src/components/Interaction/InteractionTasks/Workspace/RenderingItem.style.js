import styled from 'styled-components';
import 'antd/dist/antd.css';

export const Container = styled.div`
	background-color: ${props => getBackgroundColor(props)};
	position: relative;
	${props => (props.isDragging ? 'border: 1px solid grey;' : '')} ${props => (props.isGhosting ? 'opacity: 0.8;' : '')}
`;

export const RemoveButton = styled.button`
	width: 30px;
	height: 30px;
	position: absolute;
	right: 0;
	border: 0px;
	background: transparent;
	cursor: pointer;
`;


const getBackgroundColor = ({ isSelected, isGhosting, isDragging }) => {
	if (isGhosting) {
		return 'black';
	}

	if (isSelected) {
		return 'aliceblue';
	}

	if (isDragging) {
		return 'white';
	}
	return 'transparent';
};
