import React from 'react';
import { Row, Col } from 'antd';

import { OutputsList } from '../../containers/OutputsList';
import { OutputPreview } from '../../containers/OutputPreview';
import { PageLayout } from '../../components/styled/DataFlow';

const Outputs = () => {

  return (
    <PageLayout>
      <Row gutter={32}>
        <Col xxl={4} xl={6} lg={8} md={10} sm={12} className="actions">
          <OutputsList />
        </Col>
        <Col xxl={20} xl={18} lg={16} md={12} sm={12} className="preview">
          <OutputPreview />
        </Col>
      </Row>
    </PageLayout>
  );
};

export default Outputs;
export { Outputs };
