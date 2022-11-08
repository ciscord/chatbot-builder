import React, { useRef } from 'react';
import { Graph } from 'react-d3-graph';
import ReactResizeDetector from 'react-resize-detector';
// graph payload (with minimalist structure)
const COLOR = {
	aqua: 'aqua',
	aquamarine: 'aquamarine',
	bisque: 'bisque',
	blueviolet: 'blueviolet',
	burlywood: 'burlywood',
	cadetblue: 'cadetblue',
	chartreuse: 'chartreuse',
	chocolate: 'chocolate',
	coral: 'coral',
	cornflowerblue: 'cornflowerblue',
	cyan: 'cyan',
	darkgoldenrod: 'darkgoldenrod',
	green: 'green',
};
const data = {
	nodes: [
		{ id: 'Task 3', color: COLOR.aqua, strokeColor: COLOR.green },
		{ id: 'Task 4', color: COLOR.aquamarine },
		{ id: 'Task 6', color: COLOR.cyan },
		{ id: 'Task 7', color: COLOR.bisque },
		{ id: 'Task 11', color: COLOR.blueviolet },
		{ id: 'Task 12', color: COLOR.burlywood },
		{ id: 'Task 13', color: COLOR.cadetblue },
		{ id: 'Task 14', color: COLOR.chartreuse },
		{ id: 'Task 15', color: COLOR.coral },
		{ id: 'Task 16', color: COLOR.cornflowerblue },
	],
	links: [
		{ source: 'Task 4', target: 'Task 7' },
		{ source: 'Task 4', target: 'Task 6' },
		{ source: 'Task 4', target: 'Task 3' },
		{ source: 'Task 3', target: 'Task 11' },
		{ source: 'Task 11', target: 'Task 12' },
		{ source: 'Task 11', target: 'Task 13' },
		{ source: 'Task 14', target: 'Task 15' },
		{ source: 'Task 14', target: 'Task 16' },
	],
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
	automaticRearrangeAfterDropNode: true,
	collapsible: false,
	directed: false,
	focusAnimationDuration: 0.75,
	focusZoom: 1,
	height: 800,
	highlightDegree: 1,
	highlightOpacity: 1,
	linkHighlightBehavior: false,
	maxZoom: 8,
	minZoom: 0.1,
	nodeHighlightBehavior: true,
	panAndZoom: true,
	staticGraph: false,
	staticGraphWithDragAndDrop: false,
	width: 800,
	d3: {
		alphaTarget: 0.05,
		gravity: -100,
		linkLength: 100,
		linkStrength: 1,
		disableLinkForce: false,
	},
	node: {
		color: '#f00',
		fontColor: 'black',
		fontSize: 8,
		fontWeight: 'normal',
		highlightColor: 'SAME',
		highlightFontSize: 8,
		highlightFontWeight: 'normal',
		highlightStrokeWidth: '4',
		labelProperty: 'id',
		mouseCursor: 'pointer',
		opacity: 1,
		renderLabel: true,
		size: 800,
		strokeColor: 'none',
		strokeWidth: 3,
		svg: '',
		symbolType: 'circle',
	},
	link: {
		color: '#d3d3d3',
		fontColor: 'black',
		fontSize: 8,
		fontWeight: 'normal',
		highlightColor: 'SAME',
		highlightFontSize: 8,
		highlightFontWeight: 'normal',
		labelProperty: 'label',
		mouseCursor: 'pointer',
		opacity: 1,
		renderLabel: false,
		semanticStrokeWidth: false,
		strokeWidth: 1.5,
		markerHeight: 6,
		markerWidth: 6,
	},
};

// graph event callbacks
const onClickGraph = function() {
	// window.alert(`Clicked the graph background`);
};

const onClickNode = function(nodeId) {
	// window.alert(`Clicked node ${nodeId}`);
};

const onDoubleClickNode = function(nodeId) {
	// window.alert(`Double clicked node ${nodeId}`);
};

const onRightClickNode = function(event, nodeId) {
	// window.alert(`Right clicked node ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {
	// window.alert(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
	// window.alert(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
	// window.alert(`Clicked link between ${source} and ${target}`);
};

const onRightClickLink = function(event, source, target) {
	// window.alert(`Right clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
	// window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
	// window.alert(`Mouse out link between ${source} and ${target}`);
};

const onNodePositionChange = function(nodeId, x, y) {
	// window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};

const BirdEyeView = () => {
	return (
		<ReactResizeDetector handleWidth handleHeight>
			{({ width, height }) => {
				myConfig.height = height;
				myConfig.width = width;
				return (
					<Graph
						id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
						data={data}
						config={myConfig}
						onClickNode={onClickNode}
						onDoubleClickNode={onDoubleClickNode}
						onRightClickNode={onRightClickNode}
						onClickGraph={onClickGraph}
						onClickLink={onClickLink}
						onRightClickLink={onRightClickLink}
						onMouseOverNode={onMouseOverNode}
						onMouseOutNode={onMouseOutNode}
						onMouseOverLink={onMouseOverLink}
						onMouseOutLink={onMouseOutLink}
						onNodePositionChange={onNodePositionChange}
					/>
				);
			}}
		</ReactResizeDetector>
	);
};

export default BirdEyeView;
