import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { SYSTEM_OUTPUTS_TYPES_TITLES } from '../../../../constants/outputs';
import { selectBaseData } from '../../../../redux/currentOutput/selectors';

const ModalTitle = () => {

  const { systemType } = useSelector(selectBaseData, shallowEqual);

  const windowTitle = 'Configuring Output';
  const modalTitle = SYSTEM_OUTPUTS_TYPES_TITLES[systemType];

  return (
    <>
      {`${windowTitle}: ${modalTitle}`}
    </>
  );
};

export default ModalTitle;
export { ModalTitle };
