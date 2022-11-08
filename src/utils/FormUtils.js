import React from 'react';

import { FIELD_TYPES } from '../constants/forms';
import {
  Input,
  Select,
  MultiSelect,
  CheckBox,
  FieldWrapper,
} from '../components/forms';

class FormUtils {

  static Input(formikFieldProps, fieldConfig) {
    return (
      <Input
        {...fieldConfig}
        {...formikFieldProps}
      />
    );
  }

  static InputPassword(formikFieldProps, fieldConfig) {
    return (
      <Input
        {...fieldConfig}
        {...formikFieldProps}
        type="password"
      />
    );
  }

  static Select(formikFieldProps, fieldConfig) {
    return (
      <Select
        {...fieldConfig}
        {...formikFieldProps}
      />
    );
  }

  static SelectInteger(formikFieldProps, fieldConfig) {
    return (
      <Select
        {...fieldConfig}
        {...formikFieldProps}
        type="integer"
      />
    );
  }

  static MultiSelect(formikFieldProps, fieldConfig) {
    return (
      <MultiSelect
        {...fieldConfig}
        {...formikFieldProps}
      />
    );
  }

  static MultiSelectInteger(formikFieldProps, fieldConfig) {
    return (
      <MultiSelect
        {...fieldConfig}
        {...formikFieldProps}
        type="integer"
      />
    );
  }

  static Field(formikFieldProps, fieldConfig) {
    const { type, label, noLabel, required, ...restFieldConfig } = fieldConfig;
    let control;
    switch (type) {
      case FIELD_TYPES.input: {
        control = FormUtils.Input(formikFieldProps, restFieldConfig);
        break;
      }
      case FIELD_TYPES.password: {
        control = FormUtils.InputPassword(formikFieldProps, restFieldConfig);
        break;
      }
      case FIELD_TYPES.select: {
        control = FormUtils.Select(formikFieldProps, restFieldConfig);
        break;
      }
      case FIELD_TYPES.selectInteger: {
        control = FormUtils.SelectInteger(formikFieldProps, restFieldConfig);
        break;
      }
      case FIELD_TYPES.multiSelect: {
        control = FormUtils.MultiSelect(formikFieldProps, restFieldConfig);
        break;
      }
      case FIELD_TYPES.multiSelectInteger: {
        control = FormUtils.MultiSelectInteger(formikFieldProps, restFieldConfig);
        break;
      }
      case FIELD_TYPES.checkbox: {
        return (
          <FieldWrapper>
            <CheckBox
              {...restFieldConfig}
              {...formikFieldProps}
              value={formikFieldProps.field.value}
            >
              {label}
            </CheckBox>
          </FieldWrapper>
        );
      }
      default:
        control = FormUtils.Input(formikFieldProps, restFieldConfig);
    }

    const resLabel = (!noLabel) ? label : null;
    const resRequired = (!noLabel) ? required : null;

    return (
      <FieldWrapper label={resLabel} required={resRequired}>
        {control}
      </FieldWrapper>
    );
  }
}

export default FormUtils;
export { FormUtils };
