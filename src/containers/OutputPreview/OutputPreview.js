import React from 'react';
import { useSelector } from 'react-redux';

import { selectOutput } from '../../redux/outputs/selectors';
import { PreviewContainer } from '../../components/styled/DataFlow';
import { OutputCard } from './OutputCard';

const OutputPreview = () => {

  const output = useSelector(selectOutput);
  const showCard = Boolean(output.systemType);

  return (
    <PreviewContainer>
      {showCard && (<OutputCard />)}
    </PreviewContainer>
  );
};

export default OutputPreview;
export { OutputPreview };
