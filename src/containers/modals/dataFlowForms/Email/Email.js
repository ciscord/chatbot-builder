import React from 'react';
import { Formik, Form, Field } from 'formik';

import { FormUtils } from '../../../../utils/FormUtils';
import { emailTriggerSchema } from '../../../../utils/validators/dataFlow';

import { ButtonPreview } from '../ButtonPreview';
import { propTypes, defaultProps, fields } from '../assets';

const EmailFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const Email = ({ onSubmit, onRequest, initValues }) => {

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={emailTriggerSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        EmailFormBag.values = values;
        EmailFormBag.errors = errors;
        EmailFormBag.submitForm = submitForm;

        return (
          <Form>
            {fields.email.map(fieldConfig => {
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

Email.propTypes = {
  ...propTypes,
};

Email.defaultProps = {
  ...defaultProps,
};

export default Email;
export {
  Email,
  EmailFormBag,
};
