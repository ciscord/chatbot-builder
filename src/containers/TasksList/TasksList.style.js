import styled from 'styled-components';

import { THEME } from '../../constants/theme';

const { bg, colors } = THEME;

export const Wrapper = styled.div`
  display: block;
  padding: 4px 8px;
  background-color: ${bg.header};
  height: 100%;
  border-radius: 4px;
  
  .new-task {
    display: flex;
    align-items: center;
    padding: 8px 0 8px 12px;
    cursor: pointer;
    
    .anticon {
      margin-left: 8px;
      color: ${colors.info};
    }
  }
`;
