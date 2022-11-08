import React from 'react';
import { useSelector } from 'react-redux';

import { selectUI } from '../../redux/triggers/selectors';
import { PreviewContainer } from '../../components/styled/DataFlow';
import { TriggerCard } from './TriggerCard';

const TriggerPreview = () => {

  const { triggerType } = useSelector(selectUI);
  const showCard = Boolean(triggerType);

  return (
    <PreviewContainer>
      {showCard && (<TriggerCard />)}
    </PreviewContainer>
  );
};

export default TriggerPreview;
export { TriggerPreview };
