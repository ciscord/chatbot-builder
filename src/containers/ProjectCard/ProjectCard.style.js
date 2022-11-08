import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { border } = THEME;

export const Wrapper = styled.div`
  display: block;
  padding: 16px;
  
  .toolbar {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    
    .left {
      display: flex;
      align-items: center;
      flex-grow: 1;
    }
    
    .right {
      display: flex;
      align-items: center;
      flex-grow: 3;
      justify-content: flex-end;
      
      .anticon {
        cursor: pointer;
        font-size: 18px;
        margin-left: 4px;
      }
    }
  }
  
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    border: 1px solid ${border.input};
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    margin-bottom: 8px;
    
    img {
      max-width: 144px;
      max-height: 144px;
    }
  }
  
  .info {
    span {
      font-weight: bold;
      margin-right: 4px;
    }
  }
`;
