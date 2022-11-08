import React, { useState, useRef, useEffect } from 'react';
import createSingleLinePlugin from 'draft-js-single-line-plugin';
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import { RTEContainer } from './RichTextInput.style';
import 'draft-js/dist/Draft.css';
import Editor from 'draft-js-plugins-editor';
import isEqual from 'lodash/isEqual';

const singleLinePlugin = createSingleLinePlugin();
const plugins = [singleLinePlugin];

const HANDLED = 'handled';
const NOT_HANDLED = 'not-handled';

export const customStyleMap = {
	RED: {
		backgroundColor: 'lightpink',
	},
	ORANGE: {
		backgroundColor: 'orange',
	},
	YELLOW: {
		backgroundColor: 'yellow',
	},
	GREEN: {
		backgroundColor: 'lightgreen',
	},
	BLUE: {
		backgroundColor: 'lightblue',
	},
	PURPLE: {
		backgroundColor: 'lightcoral',
	},
};

export const RichTextInput = props => {
	const rte = useRef(null);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	useEffect(() => {
		if (props.value) {
			let data = EditorState.createWithContent(convertFromRaw(props.value));
			data = EditorState.moveFocusToEnd(data);
			if (data) setEditorState(data);
		} else {
			setEditorState(EditorState.createEmpty());
		}
	}, [props.value]);
	const convertKeywordToColor = keyword => {
		const index = props.keywords.indexOf(keyword) % 6;
		switch (index) {
			case 0:
				return 'RED';
			case 1:
				return 'ORANGE';
			case 2:
				return 'BLUE';
			case 3:
				return 'YELLOW';
			case 4:
				return 'PURPLE';
			case 5:
				return 'GREEN';
		}
	};
	const onChange = editorStateData => {
		let rawData = convertToRaw(editorStateData.getCurrentContent());
		const rawData1 = convertToRaw(editorState.getCurrentContent());
		if (isEqual(rawData, rawData1)) return;

		let editChange = false;
		for (let i = 0; i < rawData.blocks.length; i++) {
			const item = rawData.blocks[i];
			rawData.blocks[i].inlineStyleRanges = [];
			props.keywords.forEach(keyword => {
				const findIndex = item.text.indexOf(keyword);
				if (findIndex !== -1) {
					rawData.blocks[i].inlineStyleRanges.push({
						offset: findIndex,
						length: keyword.length,
						style: convertKeywordToColor(keyword),
					});
					editChange = true;
				}
			});
		}
		if (editChange) {
			let editorStateWithoutUndo = EditorState.createWithContent(convertFromRaw(rawData));
			editorStateWithoutUndo = EditorState.moveFocusToEnd(editorStateWithoutUndo);
			rawData = convertToRaw(editorStateWithoutUndo.getCurrentContent());
			props.onChange(rawData);
			setEditorState(editorStateWithoutUndo);
		} else {
			rawData = convertToRaw(editorStateData.getCurrentContent());
			props.onChange(rawData);
			setEditorState(editorStateData);
		}
	};

	const handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			onChange(newState);
			return HANDLED;
		}
		return NOT_HANDLED;
	};

	return (
		<>
			<RTEContainer
				onClick={e => {
					e.preventDefault();
					e.stopPropagation();
					rte.current.editor.focus();
				}}
			>
				<Editor
					blockRenderMap={singleLinePlugin.blockRenderMap}
					plugins={plugins}
					ref={rte}
					{...{ editorState, onChange, handleKeyCommand, customStyleMap }}
				/>
			</RTEContainer>
		</>
	);
};
