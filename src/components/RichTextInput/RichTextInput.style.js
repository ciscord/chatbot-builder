import styled from 'styled-components';
import 'antd/dist/antd.css';
import customStyleMap from './index';

export const Wrapper = styled.div`
	margin: 4px;
	margin-top: 8px;
	width: 350px;
	border-left: solid;
	border-color: lightgray;
	border-width: 1px;
	padding-left: 10px;
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
`;

export const RTEContainer = styled.div`
	border: 1px solid #f2f2f2;
	padding: 1em;
	cursor: text;
`;
export const ToolbarButton = styled.button`
	border: 1px solid #f2f2f2;
	padding: 1em;
	background: white;
	border: 0;
	outline: 0;
	cursor: pointer;
	border: 1px solid #f2f2f2;
`;
export const ColorsContainer = styled.div`
	background: white;
	font-size: 14px;
	border-radius: 3px;
	box-shadow: 0px 4px 8px 0px rgba(33, 33, 33, 0.3);
`;
export const Palette = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 150px;
	margin-right: 1em;
`;
export const ColorDrop = styled.div`
	display: inline-block;
	padding: 1em;
	margin: 1em;
	margin-right: 0;
	height: 0.5em;
	width: 0.5em;
	border-radius: 3px;
	cursor: pointer;
	${({ color }) => {
		if (typeof color === 'string') color = color.toUpperCase();
		if (customStyleMap[color]) {
			return `background: ${customStyleMap[color].color};`;
		}
		return 'display: none;';
	}}
`;
export const NavBar = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const NavDivider = styled.div`
	width: 1px;
	background: #f2f2f2;
	min-height: 1em;
	margin: 0.5em 0.5em;
	display: inline-block;
`;
