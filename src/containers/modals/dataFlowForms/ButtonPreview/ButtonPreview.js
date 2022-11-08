import React from 'react';
import * as PropTypes from 'prop-types';
import { DownloadOutlined } from '@ant-design/icons';

import { Button } from '../../../../lib/ui/Button';

const ButtonPreview = ({ title, onClick }) => {

  return (
    <div className="btn-preview">
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        onClick={onClick}
      >
        {title}
      </Button>
    </div>
  );
};

ButtonPreview.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonPreview.defaultProps = {
  title: 'Preview',
  onClick: () => {},
};

export default ButtonPreview;
export { ButtonPreview };
