import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { FormUtils } from '../../../../utils/FormUtils';
import { SelectUtils } from '../../../../utils/SelectUtils';
import { rangeSchema } from '../../../../utils/validators/dataFlow';
import { selectFunctionsFromPreviousAction } from '../../../../redux/flowActions/selectors';

import { ButtonPreview } from '../ButtonPreview';
import { propTypes, defaultProps, fields } from '../assets';

const RangeFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const Range = ({ actionID, onSubmit, onRequest, initValues }) => {

  const functionsList = useSelector(selectFunctionsFromPreviousAction(actionID), shallowEqual);
  const options = SelectUtils.createOptions(functionsList, 'id', 'name');

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={rangeSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        RangeFormBag.values = values;
        RangeFormBag.errors = errors;
        RangeFormBag.submitForm = submitForm;

        return (
          <Form>
            {fields.range.map(fieldConfig => {
              const { name } = fieldConfig;
              const dynamicOptions = (name === 'sources') ? { options } : {};
              return (
                <Field key={name} name={name}>
                  {fieldProps => FormUtils.Field(fieldProps, { ...fieldConfig, ...dynamicOptions })}
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

Range.propTypes = {
  ...propTypes,
};

Range.defaultProps = {
  ...defaultProps,
};

export default Range;
export {
  Range,
  RangeFormBag,
};
