import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { text, bg } = THEME;

export const Wrapper = styled.div`
  .card {
    padding: 8px;
    background-color: ${bg.menu};
    width: 220px;
    border-radius: 2px;
    
    .title {
      color: ${text.invert};
      margin-bottom: 8px;
    }
    
    .content {
      width: 204px;
      min-height: 60px;
      background-color: ${bg.header};
      border-radius: 8px;
      padding: 8px;
    }
  }
  
  .toolbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    
    .ant-btn {
      margin-right: 8px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
`;
