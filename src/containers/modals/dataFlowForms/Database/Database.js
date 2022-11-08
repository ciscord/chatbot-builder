import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { PlusOutlined } from '@ant-design/icons';

import { isArray } from '../../../../lib/lodash';

import { FormUtils } from '../../../../utils/FormUtils';
import { databaseTriggerSchema } from '../../../../utils/validators/dataFlow';
import { propTypes, defaultProps, fields } from '../assets';

import { Button } from '../../../../lib/ui';
import { Input, FieldWrapper } from '../../../../components/forms';
import { ButtonPreview } from '../ButtonPreview';

const DatabaseFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const Database = ({ onSubmit, onRequest, initValues }) => {

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={databaseTriggerSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        DatabaseFormBag.values = values;
        DatabaseFormBag.errors = errors;
        DatabaseFormBag.submitForm = submitForm;

        return (
          <Form>
            {fields.database.map(fieldConfig => {
              const { name } = fieldConfig;
              return (
                <Field key={name} name={name}>
                  {fieldProps => FormUtils.Field(fieldProps, fieldConfig)}
                </Field>
              );
            })}

            <FieldArray name="arguments">
              {(arrayHelpers) => {
                return (
                  <FieldWrapper
                    label={(
                      <div className="flex-label">
                        <div>Arguments</div>
                        <Button
                          shape="circle"
                          size="small"
                          icon={<PlusOutlined />}
                          onClick={() => arrayHelpers.push('')}
                        />
                      </div>
                    )}
                  >
                    {isArray(values.arguments) && values.arguments.map((colName, index) => {
                      const fieldName = `arguments.${index}`;
                      return (
                        <Field name={fieldName} key={index}>
                          {(fieldProps) => {
                            return (
                              <Input
                                {...fieldProps}
                              />
                            );
                          }}
                        </Field>
                      );
                    })}
                  </FieldWrapper>
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

Database.propTypes = {
  ...propTypes,
};

Database.defaultProps = {
  ...defaultProps,
};

export default Database;
export {
  Database,
  DatabaseFormBag,
};
