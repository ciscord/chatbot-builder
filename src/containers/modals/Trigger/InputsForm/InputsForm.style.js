import styled from 'styled-components';
import { THEME } from '../../../../constants/theme';

const { border, maxHeight } = THEME;

export const Wrapper = styled.div`
  display: block;
  overflow-y: auto;
  max-height: ${maxHeight.modalContent};
  padding-right: 8px;
  
  .flex-label {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    
    .ant-btn {
      margin-left: 8px;
    } 
  }
  
  .section-title {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
    padding-bottom: 4px;
    margin-bottom: 8px;
    margin-top: 16px;
    border-bottom: 1px solid ${border.input};
    
    &:first-child {
      margin-top: 0;
    }
    
    .ant-btn {
      margin-left: 8px;
    }
  }
  
  .divider-sm {
    height: 8px;
  }
  
  .divider-md {
    height: 16px;
  }
  
  .inputs-block {
    display: flex;
    align-items: center;
    
    .field {
      margin-left: 8px;
      
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
