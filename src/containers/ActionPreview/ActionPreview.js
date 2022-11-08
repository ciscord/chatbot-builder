import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { find } from '../../lib/lodash';
import { CommonUtils } from '../../utils/CommonUtils';
import { SYSTEM_ACTION_TYPES_TITLES, EMPTY_FUNCTION_NAME } from '../../constants/actions';
import { flowActions } from '../../redux/flowActions/actions';
import { modalsActions } from '../../redux/modals/actions';
import { currentFunctionActions } from '../../redux/currentFunction/actions';
import { selectActionsList, selectFunctionsList } from '../../redux/flowActions/selectors';

import { DataFlowCard } from '../../components/DataFlowCard';
import { PreviewContainer } from '../../components/styled/DataFlow';
import { FunctionBox } from './FunctionBox';

import { ArcherContainer, ArcherElement } from 'react-archer';
import ReactResizeDetector from 'react-resize-detector';

const ActionPreview = () => {

  const dispatch = useDispatch();
  const actionsList = useSelector(selectActionsList, shallowEqual);
  const functionsList = useSelector(selectFunctionsList, shallowEqual);

  const onClickCreate = useCallback((id) => {
    const action = find(actionsList, { id });

    dispatch(currentFunctionActions.baseDataRefresh({
      id: CommonUtils.newID(),
      name: EMPTY_FUNCTION_NAME,
      actionType: action.type,
      actionID: id,
    }));
    dispatch(modalsActions.functionShow());
  }, [dispatch, actionsList]);

  const onClickRemove = useCallback((id) => {
    dispatch(flowActions.actionRemove(id));
  }, [dispatch]);

	return (
		<ReactResizeDetector handleWidth handleHeight>
			{({ width, height }) => (
				<ArcherContainer noCurves strokeColor="gray">
					<PreviewContainer>
						{actionsList.map(action => {
							const { id, type } = action;
							const cardName = SYSTEM_ACTION_TYPES_TITLES[type] || type;

							const functions = functionsList.filter(item => item.actionID === id);
							const functionBoxes = functions.map(item => {
								const { id } = item;
								return <FunctionBox key={id} id={id} />;
							});
							const count = actionsList.length;
							const index = actionsList.indexOf(action);
							let nextItem;
							if (index >= 0 && index < count - 1) nextItem = actionsList[index + 1];

							const toId = nextItem ? nextItem.id : null;

							let sourceAnchor = 'right';
							let targetAnchor = 'left';
							const countPerScreen = width / 220;

							if (width < (((index + 1) % countPerScreen) + 1) * 220) {
								sourceAnchor = 'bottom';
								targetAnchor = 'top';
							}

							if (width < 220 * 2) {
								sourceAnchor = 'bottom';
								targetAnchor = 'top';
							}
							return toId ? (
								<ArcherElement
                  key={id}
									id={id}
									relations={[
										{
											targetId: toId,
											sourceAnchor,
											targetAnchor,
											label: '',
										},
									]}
								>
									<div className="action-box" key={id}>
										<DataFlowCard name={cardName} onCreate={() => onClickCreate(id)} onRemove={() => onClickRemove(id)}>
											{functionBoxes}
										</DataFlowCard>
									</div>
								</ArcherElement>
							) : (
								<ArcherElement key={id} id={id}>
									<div className="action-box" key={id}>
										<DataFlowCard name={cardName} onCreate={() => onClickCreate(id)} onRemove={() => onClickRemove(id)}>
											{functionBoxes}
										</DataFlowCard>
									</div>
								</ArcherElement>
							);
						})}
					</PreviewContainer>
				</ArcherContainer>
			)}
		</ReactResizeDetector>
	);
};

export default ActionPreview;
export { ActionPreview };
