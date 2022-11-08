import React, { useState, useCallback } from 'react';
import { useMount } from 'react-use';
import { Formik, Form, Field, FieldArray } from 'formik';
import { PlusOutlined, DownloadOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

import { isArray } from '../../../../lib/lodash';
import { FIELD_TYPES } from '../../../../constants/forms';
import { FormUtils } from '../../../../utils/FormUtils';
import { connectorTriggerSchema } from '../../../../utils/validators/dataFlow';

import { Select, Button } from '../../../../lib/ui';
import { ButtonPreview } from '../ButtonPreview';
import {
  propTypes,
  defaultProps,
  connectorRequestFields,
  authTypes,
  paginationTypes,
  authTypeOptions,
  paginationTypeOptions,
} from '../assets';

const ConnectorFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const {
  url,
  method,
  authBasic,
  authBearer,
  body,
  paginationClassic,
  paginationCursor,
  paginationMaxPages,
} = connectorRequestFields;

const { Panel } = Collapse;

const Connector = ({ onSubmit, onRequest, initValues }) => {

  const [authType, setAuthType] = useState(null);
  const [paginationType, setPaginationType] = useState(null);

  useMount(() => {
    if (initValues.username && initValues.password) {
      setAuthType(authTypes.basic);
    }
    if (initValues.token) {
      setAuthType(authTypes.bearer);
    }
  });

  const onChangeAuthType = useCallback((newValue) => {
    setAuthType(newValue);
  }, [setAuthType]);

  const onChangePaginationType = useCallback((newValue) => {
    setPaginationType(newValue);
  }, [setPaginationType]);

  const renderSingleField = (source) => (
    <Field name={source.name}>
      {fieldProps => FormUtils.Field(fieldProps, source)}
    </Field>
  );

  const renderFieldsGroup = (source) => {
    return source.map(fieldConfig => {
      const { name } = fieldConfig;
      return (
        <Field key={name} name={name}>
          {fieldProps => FormUtils.Field(fieldProps, fieldConfig)}
        </Field>
      );
    });
  };

  const renderFieldArray = (name, label, valuesList, arrayHelpers) => {
    return (
      <>
        <div className="section-title">
          <div>{label}</div>
          <Button
            shape="circle"
            size="small"
            icon={<PlusOutlined />}
            onClick={() => arrayHelpers.push({ name: '', value: '' })}
          />
        </div>
        {isArray(valuesList) && valuesList.map((colName, index) => {
          const fieldName = `${name}.${index}.name`;
          const fieldValue = `${name}.${index}.value`;
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
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={connectorTriggerSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        ConnectorFormBag.values = values;
        ConnectorFormBag.errors = errors;
        ConnectorFormBag.submitForm = submitForm;

        return (
          <Form>
            <Collapse defaultActiveKey={['main']}>
              <Panel header="Main" key="main">
                {renderSingleField(url)}
                {renderSingleField(method)}

                <Select
                  placeholder="Auth"
                  value={authType}
                  options={authTypeOptions}
                  onChange={onChangeAuthType}
                />
                <div className="divider-sm" />
                {(authType === authTypes.basic) && renderFieldsGroup(authBasic)}
                {(authType === authTypes.bearer) && renderFieldsGroup(authBearer)}
              </Panel>
              <Panel header="Advanced" key="advanced">
                <FieldArray name="headers">
                  {(arrayHelpers) => renderFieldArray('headers', 'Headers', values.headers, arrayHelpers)}
                </FieldArray>

                <FieldArray name="params">
                  {(arrayHelpers) => renderFieldArray('params', 'Params', values.params, arrayHelpers)}
                </FieldArray>

                <div className="section-title">Body</div>
                {renderFieldsGroup(body)}

                <div className="section-title">Pagination</div>
                <Select
                  placeholder="Type"
                  value={paginationType}
                  options={paginationTypeOptions}
                  onChange={onChangePaginationType}
                />
                <div className="divider-sm" />
                {(paginationType === paginationTypes.classic) && renderFieldsGroup(paginationClassic)}
                {(paginationType === paginationTypes.cursor) && renderFieldsGroup(paginationCursor)}

                <div className="section-title">Others</div>
                {renderSingleField(paginationMaxPages)}
              </Panel>
            </Collapse>

            <ButtonPreview onClick={() => onRequest(values)} />
          </Form>
        );
      }}
    </Formik>
  );
};

Connector.propTypes = {
  ...propTypes,
};

Connector.defaultProps = {
  ...defaultProps,
};

export default Connector;
export {
  Connector,
  ConnectorFormBag,
};
