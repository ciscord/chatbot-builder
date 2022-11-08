import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SYSTEM_OUTPUTS_TYPES as sysTypes } from '../../../../constants/outputs';
import { currentOutputActions } from '../../../../redux/currentOutput/actions';
import { selectBaseData } from '../../../../redux/currentOutput/selectors';

import { Narrative, NarrativeFormBag } from '../../dataFlowForms/Narrative';

import { Wrapper } from './InputsForm.style';

const forms = {
  [sysTypes.narrative]: (formProps) => <Narrative {...formProps} />,
};

const bags = {
  [sysTypes.narrative]: NarrativeFormBag,
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

  const { systemType, inputs } = baseData;

  const onSubmitForm = useCallback((values) => {
    onSubmit(values);
  }, [onSubmit]);

  const onRequest = useCallback((values) => {
    dispatch(currentOutputActions.previewRequestSend({
      ...baseData,
      inputs: {
        ...values,
      },
    }));
  }, [dispatch, baseData]);

  const formRenderer = forms[systemType];
  if (!formRenderer) {
    return (<Wrapper />);
  }

  const formProps = {
    onRequest,
    onSubmit: onSubmitForm,
    initValues: inputs,
  };
  const form = formRenderer(formProps);
  InputsFormBag = bags[systemType];

  return (
    <Wrapper>
      {form}
    </Wrapper>
  );
};

InputsForm.propTypes = {
  onSubmit: PropTypes.func,
};

InputsForm.defaultProps = {
  onSubmit: () => {},
};

export default InputsForm;
export {
  InputsForm,
  InputsFormBag,
};
