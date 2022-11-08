import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: block;
	width: 100%;
	:focus {
		outline: 0;
		.selection {
			box-shadow: 0 0 1px 1px #00a9e0;
		}
	}
	svg {
		display: block;
		width: 1em;
		height: 1em;
		fill: #777;
	}

	.label {
		display: block;
		margin-bottom: 6px;
		font-weight: 600;
	}

	.selection {
		position: relative;
		padding-right: 25px;
		border: 1px solid #f2f2f2;
		background: #fff;
		z-index: 1000;
	}

	.multiple {
		padding-right: 30px;
		margin-right: 5px;
		background: #d9f2fb;
		color: #00a9e0;
	}

	.delete {
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		padding: 10px;
		font-size: 10px;
		cursor: pointer;
	}

	.arrow {
		position: absolute;
		top: 5px;
		right: 5px;
		display: block;
		padding: 10px;
		font-size: 10px;
		color: #898989;
	}
`;

export const Options = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	border: solid #ddd;
	border-width: 1px;
	background: #fff;
	max-height: 300px;
	overflow: auto;
	z-index: 1500;
`;

export const Placeholder1 = styled.div`
	padding: 5px 10px;
	color: #898989;
`;

export const Placeholder = styled.div`
	padding: 5px 10px;
	color: black;
`;

export const Value = styled.div`
	position: relative;
	display: inline-block;
	padding: 5px 10px;
`;

export const Checkbox = styled.span`
	content: '';
	vertical-align: top;
	display: inline-block;
	width: 16px;
	height: 16px;
	padding: 2px;
	border: 1px solid #ddd;
	border-radius: 2px;
	margin: 2px 12px 0 0;
	color: #fff;
	font-size: 10px;

	svg {
		display: block;
		width: 1em;
		height: 1em;
		fill: #fff;
	}

	border-color: ${props => (props.selected ? '#2684ff' : '#ddd')};
	background: ${props => (props.selected ? '#2684ff' : '#f5f5f5')};
`;

export const Option = styled.div`
	padding: 5px 15px;
	cursor: pointer;
	margin: ${props => (props.selected ? '-1px -1px 0' : '0px')};
	background: ${props => (props.selected ? '#ddf2fb' : '#fff')};
	:hover {
		background: #2684ff;
	}
`;
