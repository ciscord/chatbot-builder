import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { selectDataFlowUI } from '../../../../redux/breadcrumbs/selectors';

import { FormUtils } from '../../../../utils/FormUtils';
import { SelectUtils } from '../../../../utils/SelectUtils';
import { onCompleteTriggerSchema } from '../../../../utils/validators/dataFlow';

import { ButtonPreview } from '../ButtonPreview';
import { propTypes, defaultProps, fields } from '../assets';

const OnCompleteFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const OnComplete = ({ onSubmit, onRequest, initValues }) => {

  const { tasksList } = useSelector(selectDataFlowUI, shallowEqual);
  const options = SelectUtils.createOptions(tasksList, 'id', 'title');

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={onCompleteTriggerSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        OnCompleteFormBag.values = values;
        OnCompleteFormBag.errors = errors;
        OnCompleteFormBag.submitForm = submitForm;

        return (
          <Form>
            {fields.onComplete.map(fieldConfig => {
              const { name } = fieldConfig;
              return (
                <Field key={name} name={name}>
                  {fieldProps => FormUtils.Field(fieldProps, { ...fieldConfig, options })}
                </Field>
              );
            })}
            <ButtonPreview onClick={() => onRequest(values)} />
          </Form>
        );
      }}
    </Formik>
  );
};

OnComplete.propTypes = {
  ...propTypes,
};

OnComplete.defaultProps = {
  ...defaultProps,
};

export default OnComplete;
export {
  OnComplete,
  OnCompleteFormBag,
};
