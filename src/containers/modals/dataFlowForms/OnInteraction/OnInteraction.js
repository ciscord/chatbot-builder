import React from 'react';
import { Formik, Form, Field } from 'formik';

import { FormUtils } from '../../../../utils/FormUtils';
import { onInteractionTriggerSchema } from '../../../../utils/validators/dataFlow';

import { ButtonPreview } from '../ButtonPreview';
import { propTypes, defaultProps, fields } from '../assets';

const OnInteractionFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const OnInteraction = ({ onSubmit, onRequest, initValues }) => {

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={onInteractionTriggerSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        OnInteractionFormBag.values = values;
        OnInteractionFormBag.errors = errors;
        OnInteractionFormBag.submitForm = submitForm;

        return (
          <Form>
            {fields.onInteraction.map(fieldConfig => {
              const { name } = fieldConfig;
              return (
                <Field key={name} name={name}>
                  {fieldProps => FormUtils.Field(fieldProps, fieldConfig)}
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

OnInteraction.propTypes = {
  ...propTypes,
};

OnInteraction.defaultProps = {
  ...defaultProps,
};

export default OnInteraction;
export {
  OnInteraction,
  OnInteractionFormBag,
};
