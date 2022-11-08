import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SYSTEM_TRIGGER_TYPES as sysTypes } from '../../../../constants/triggers';
import { currentTriggerActions } from '../../../../redux/currentTrigger/actions';
import { selectBaseData } from '../../../../redux/currentTrigger/selectors';

import { Select, Button } from '../../../../lib/ui';

import { Email, EmailFormBag } from '../../dataFlowForms/Email/Email';
import { ServiceNow, ServiceNowFormBag } from '../../dataFlowForms/ServiceNow/ServiceNow';
import { Database, DatabaseFormBag } from '../../dataFlowForms/Database/Database';
import { Connector, ConnectorFormBag } from '../../dataFlowForms/Connector/Connector';
import { OnInteraction, OnInteractionFormBag } from '../../dataFlowForms/OnInteraction/OnInteraction';
import { OnComplete, OnCompleteFormBag } from '../../dataFlowForms/OnComplete/OnComplete';

import { systemTypeOptions } from '../assets';
import { Wrapper } from './InputsForm.style';

const forms = {
  [sysTypes.email]: (formProps) => <Email {...formProps} />,
  [sysTypes.servicenow]: (formProps) => <ServiceNow {...formProps} />,
  [sysTypes.database]: (formProps) => <Database {...formProps} />,
  [sysTypes.connector]: (formProps) => <Connector {...formProps} />,
  [sysTypes.onInteraction]: (formProps) => <OnInteraction {...formProps} />,
  [sysTypes.onComplete]: (formProps) => <OnComplete {...formProps} />,
};

const bags = {
  [sysTypes.email]: EmailFormBag,
  [sysTypes.servicenow]: ServiceNowFormBag,
  [sysTypes.database]: DatabaseFormBag,
  [sysTypes.connector]: ConnectorFormBag,
  [sysTypes.onInteraction]: OnInteractionFormBag,
  [sysTypes.onComplete]: OnCompleteFormBag,
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

  const { triggerType, systemType, inputs } = baseData;

  const onSubmitForm = useCallback((values) => {
    onSubmit(values);
  }, [onSubmit]);

  const onChangeSystemType = useCallback((systemType) => {
    const resBaseData = {
      ...baseData,
      systemType,
      inputs: {},
      outputs: {},
    };
    if (baseData.inputs.interval) {
      resBaseData.inputs.interval = baseData.inputs.interval;
    }

    dispatch(currentTriggerActions.baseDataRefresh(resBaseData));
  }, [dispatch, baseData]);

  const onRequest = useCallback((values) => {
    dispatch(currentTriggerActions.previewRequestSend({
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

  const options = systemTypeOptions[triggerType] || [];

  return (
    <Wrapper>
      <div className="system-type">
        <Select
          placeholder="Select an Option"
          value={systemType}
          options={options}
          onChange={onChangeSystemType}
        />
      </div>
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
