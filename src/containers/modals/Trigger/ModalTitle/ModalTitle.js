import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { selectBaseData } from '../../../../redux/currentTrigger/selectors';
import { createModalTitle } from '../assets';

const ModalTitle = () => {

  const baseData = useSelector(selectBaseData, shallowEqual);

  const windowTitle = 'Configuring Trigger';
  const modalTitle = createModalTitle(baseData);

  return (
    <>
      {`${windowTitle} - ${modalTitle}`}
    </>
  );
};

export default ModalTitle;
export { ModalTitle };
