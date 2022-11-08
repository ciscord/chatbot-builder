import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { SYSTEM_ACTION_TYPES as sysTypes } from '../../../../constants/actions';
import { currentFunctionActions } from '../../../../redux/currentFunction/actions';
import { selectBaseData } from '../../../../redux/currentFunction/selectors';

import { Connector, ConnectorFormBag } from '../../dataFlowForms/Connector';
import { Combine, CombineFormBag } from '../../dataFlowForms/Combine';
import { GroupBy, GroupByFormBag } from '../../dataFlowForms/GroupBy';
import { Range, RangeFormBag } from '../../dataFlowForms/Range';

import { Wrapper } from './InputsForm.style';

const forms = {
  [sysTypes.connector]: (formProps) => <Connector {...formProps} />,
  [sysTypes.combine]: (formProps) => <Combine {...formProps} />,
  [sysTypes.groupBy]: (formProps) => <GroupBy {...formProps} />,
  [sysTypes.range]: (formProps) => <Range {...formProps} />,
};

const bags = {
  [sysTypes.connector]: ConnectorFormBag,
  [sysTypes.combine]: CombineFormBag,
  [sysTypes.groupBy]: GroupByFormBag,
  [sysTypes.range]: RangeFormBag,
};

// eslint-disable-next-line import/no-mutable-exports
let InputsFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const InputsForm = ({ onSubmit }) => {

  const dispatch = useDispatch();
  const baseData = useSelector(selectBaseData, shallowEqual);
  const { actionType, actionID, inputs } = baseData;

  const onSubmitForm = useCallback((values) => {
    onSubmit(values);
  }, [onSubmit]);

  const onRequest = useCallback((values) => {
    dispatch(currentFunctionActions.previewRequestSend({
      ...baseData,
      inputs: {
        ...values,
      },
    }));
  }, [dispatch, baseData]);

  const formRenderer = forms[actionType];
  if (!formRenderer) {
    return (<Wrapper />);
  }

  const formProps = {
    actionID,
    onRequest,
    onSubmit: onSubmitForm,
    initValues: inputs,
  };
  const form = formRenderer(formProps);
  InputsFormBag = bags[actionType];

  return (
    <Wrapper>
      {form}
    </Wrapper>
  );
};

InputsForm.propTypes = {
  onSubmit: PropTypes.func,
  onRequest: PropTypes.func,
};

InputsForm.defaultProps = {
  onSubmit: () => {},
  onRequest: () => {},
};

export default InputsForm;
export {
  InputsForm,
  InputsFormBag,
};
