import React from 'react';
import { Row, Col } from 'antd';

import { ActionsList } from '../../containers/ActionsList';
import { ActionPreview } from '../../containers/ActionPreview';
import { PageLayout } from '../../components/styled/DataFlow';

const Actions = () => {

  return (
    <PageLayout>
      <Row gutter={32}>
        <Col xxl={4} xl={6} lg={8} md={10} sm={12} className="actions">
          <ActionsList />
        </Col>
        <Col xxl={20} xl={18} lg={16} md={12} sm={12} className="preview">
          <ActionPreview />
        </Col>
      </Row>
    </PageLayout>
  );
};

export default Actions;
export { Actions };
