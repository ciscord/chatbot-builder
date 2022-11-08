import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DesktopOutlined, FullscreenOutlined, MobileOutlined, RadarChartOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { Wrapper, ItemList } from './Workspace.style';
import RenderingItem from './RenderingItem';
import Preview from './Preview';
// import { BirdEyeView } from './BirdEyeView';

const Workspace = ({ selectedTaskId, platform, elements, toggleSelection, onDelete, project }) => {
	const [deviceMode, setDeviceMode] = useState('laptop');
	const [viewMode, setViewMode] = useState('task');

	const handleDeviceMode = e => {
		setDeviceMode(e.target.value);
	};

	const handleViewMode = e => {
		setViewMode(e.target.value);
	};

	const handleSave = () => {};
	return (
		<Wrapper>
			<div className="toolbar">
				<Radio.Group value={deviceMode} onChange={handleDeviceMode}>
					<Radio.Button value="laptop">
						<DesktopOutlined />
					</Radio.Button>
					<Radio.Button value="mobile">
						<MobileOutlined />
					</Radio.Button>
				</Radio.Group>
				<Radio.Group value={viewMode} onChange={handleViewMode}>
					<Radio.Button value="task">
						<FullscreenOutlined />
					</Radio.Button>
					<Radio.Button value="bird">
						<RadarChartOutlined />
					</Radio.Button>
				</Radio.Group>
			</div>
			{viewMode === 'task' ? (
				<>
					<Preview platform={platform} deviceMode={deviceMode} project={project}>
						<Droppable droppableId="workspace" DroppableMode="virtual" direction="vertical">
							{(provided, snapshot) => (
								<ItemList
									ref={provided.innerRef}
									{...provided.droppableProps}
									isDraggingOver={snapshot.isDraggingOver}
									deviceMode={deviceMode}
								>
									{elements.map((element, index) => (
										<RenderingItem
											element={element}
											index={index}
											key={element.id}
											isSelected={element.id === selectedTaskId}
											toggleSelection={toggleSelection}
											deviceMode={deviceMode}
											onDelete={onDelete}
											project={project}
										/>
									))}
									{provided.placeholder}
								</ItemList>
							)}
						</Droppable>
					</Preview>

					<div className="footer">
						<Button type="primary" onClick={handleSave}>
							Save
						</Button>
					</div>
				</>
			) : (
				<div />// <BirdEyeView />
			)}
		</Wrapper>
	);
};

export default Workspace;
