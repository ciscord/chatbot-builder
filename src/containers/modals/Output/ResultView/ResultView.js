import React from 'react';
import ReactJson from 'react-json-view';
import { useSelector, shallowEqual } from 'react-redux';
import { Skeleton } from 'antd';

import { selectPreview } from '../../../../redux/currentOutput/selectors';
import { Wrapper } from './ResultView.style';

const ResultView = () => {

  const preview = useSelector(selectPreview, shallowEqual);
  const showPreview = Boolean(preview.result);

  return (
    <Wrapper>
      {showPreview && <ReactJson src={preview.result} />}
      {!showPreview && <Skeleton />}
    </Wrapper>
  );
};

export default ResultView;
export { ResultView };
