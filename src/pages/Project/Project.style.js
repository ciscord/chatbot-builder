import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { border } = THEME;

export const Wrapper = styled.div`
  display: block;
  
  .title {
    display: flex;
    align-items: center;
    padding: 16px;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid ${border.input};
    
    .anticon {
      margin-left: 8px;
      font-size: 16px;
    }
  }
`;
