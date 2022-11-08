import styled from 'styled-components';
import { THEME } from '../../../constants/theme';

const { border } = THEME;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  font-weight: bold;
  border-bottom: 1px solid ${border.input};
  
  .ant-typography {
    font-size: 16px;
  }
    
  .ant-btn {
    margin-left: 16px;
    
    .anticon {
      margin-left: 0;
      color: unset;
    }
  }
`;
