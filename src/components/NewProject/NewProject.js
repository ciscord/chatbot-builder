import React from 'react';
import * as PropTypes from 'prop-types';

import { ButtonAdd } from '../ButtonAdd/ButtonAdd';
import { Wrapper } from './NewProject.style';

const NewProject = ({ onClick }) => {

  return (
    <Wrapper>
      <ButtonAdd
        title="New"
        size={120}
        onClick={onClick}
      />
    </Wrapper>
  );
};

NewProject.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewProject;
export { NewProject };
