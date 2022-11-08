import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Row, Col } from 'antd';

import { EMPTY_FUNCTION_NAME } from '../../../constants/actions';
import { NotificationUtils } from '../../../utils/NotificationUtils';
import { modalsActions } from '../../../redux/modals/actions';
import { flowActions } from '../../../redux/flowActions/actions';
import { currentFunctionActions } from '../../../redux/currentFunction/actions';
import { selectFunctionVisible } from '../../../redux/modals/selectors';
import { selectBaseData } from '../../../redux/currentFunction/selectors';

import { InputsForm, InputsFormBag } from './InputsForm';
import { ResultView } from './ResultView';
import { ModalTitle } from './ModalTitle';
import { Wrapper } from './Function.style';

const Function = () => {

	const dispatch = useDispatch();
	const baseData = useSelector(selectBaseData);
	const visible = useSelector(selectFunctionVisible);

	const onOk = useCallback(() => {
		InputsFormBag.submitForm();
	}, [dispatch]);

	const onClose = useCallback(() => {
		dispatch(modalsActions.functionHide());
		dispatch(currentFunctionActions.reset());
	}, [dispatch]);

	const onSubmit = useCallback(
		values => {
			const { name } = baseData;
			if (name.trim() === '' || name.trim() === EMPTY_FUNCTION_NAME) {
				NotificationUtils.warning('Wrong Name', 'Please, choose correct name for Function');
				return;
			}

			dispatch(
				flowActions.functionUpdate({
					...baseData,
					inputs: values,
				})
			);

			dispatch(modalsActions.functionHide());
			dispatch(currentFunctionActions.reset());
		},
		[dispatch, baseData]
	);

	return (
		<Modal
			destroyOnClose
			title={<ModalTitle />}
			okText="Save Changes"
			visible={visible}
			width="60vw"
			onOk={onOk}
			onCancel={onClose}
		>
			<Wrapper>
				<Row gutter={16}>
					<Col span={8}>
						<InputsForm onSubmit={onSubmit} />
					</Col>
					<Col span={16}>
						<ResultView />
					</Col>
				</Row>
			</Wrapper>
		</Modal>
	);
};

export default Function;
export { Function };
