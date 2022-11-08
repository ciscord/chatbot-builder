import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

import { FormUtils } from '../../../../utils/FormUtils';
import { narrativeSchema } from '../../../../utils/validators/dataFlow';

import { ButtonPreview } from '../ButtonPreview';
import { propTypes, defaultProps, fields } from '../assets';
import { Button } from '../../../../lib/ui/Button';
import { PlusOutlined } from '@ant-design/icons';
import { isArray } from '../../../../lib/lodash';
import { FIELD_TYPES } from '../../../../constants/forms';

const NarrativeFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const Narrative = ({ onSubmit, onRequest, initValues }) => {

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={narrativeSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        NarrativeFormBag.values = values;
        NarrativeFormBag.errors = errors;
        NarrativeFormBag.submitForm = submitForm;

        return (
          <Form>
            {fields.narrative.map(fieldConfig => {
              const { name } = fieldConfig;
              return (
                <Field key={name} name={name}>
                  {fieldProps => FormUtils.Field(fieldProps, fieldConfig)}
                </Field>
              );
            })}
            <FieldArray name="parameters">
              {(arrayHelpers) => {
                return (
                  <>
                    <div className="section-title">
                      <div>Parameters</div>
                      <Button
                        shape="circle"
                        size="small"
                        icon={<PlusOutlined />}
                        onClick={() => arrayHelpers.push({ name: '', value: '' })}
                      />
                    </div>
                    {isArray(values.parameters) && values.parameters.map((colName, index) => {
                      const fieldName = `parameters.${index}.name`;
                      const fieldValue = `parameters.${index}.value`;
                      return (
                        <div className="inputs-block" key={index}>
                          <Field name={fieldName}>
                            {fieldProps => FormUtils.Field(fieldProps, { type: FIELD_TYPES.input, placeholder: 'Key Name' })}
                          </Field>
                          <Field name={fieldValue}>
                            {fieldProps => FormUtils.Field(fieldProps, { type: FIELD_TYPES.input, placeholder: 'Key Value' })}
                          </Field>
                        </div>
                      );
                    })}
                  </>
                );
              }}
            </FieldArray>
            <ButtonPreview onClick={() => onRequest(values)} />
          </Form>
        );
      }}
    </Formik>
  );
};

Narrative.propTypes = {
  ...propTypes,
};

Narrative.defaultProps = {
  ...defaultProps,
};

export default Narrative;
export {
  Narrative,
  NarrativeFormBag,
};
