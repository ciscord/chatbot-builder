import React from 'react';
import { Row, Col } from 'antd';

import { TriggersList } from '../../containers/TriggersList';
import { TriggerPreview } from '../../containers/TriggerPreview';
import { PageLayout } from '../../components/styled/DataFlow';

const Triggers = () => {

  return (
    <PageLayout>
      <Row gutter={32} className="page-row">
        <Col xxl={4} xl={6} lg={8} md={10} sm={12} className="actions">
          <TriggersList />
        </Col>
        <Col xxl={20} xl={18} lg={16} md={12} sm={12} className="preview">
          <TriggerPreview />
        </Col>
      </Row>
    </PageLayout>
  );
};

export default Triggers;
export { Triggers };
