import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Typography } from 'antd';
import { Wrapper } from './TemplateBlock.style';

const { Text } = Typography;

const TemplateBlock = ({ element, index, isSelected, toggleSelection }) => {

	return (
		<Draggable draggableId={element.id} index={index}>
			{(provided, snapshot) => {
				return (
					<Wrapper
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						isDragging={snapshot.isDragging}
						isSelected={isSelected}
					>
						<div
							style={{
								marginBottom: 8,
								width: '100%',
								display: 'flex',
								alignContent: 'flex-start',
							}}
						>
							<Text code>{element.title}</Text>
						</div>
						<div style={{ minWidth: '100%', maxWidth: '450px' }}>
							<img width="100%" src={element.url} />
						</div>
					</Wrapper>
				);
			}}
		</Draggable>
	);
};

export default TemplateBlock;
