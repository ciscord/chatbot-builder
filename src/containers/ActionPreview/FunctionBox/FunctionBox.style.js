import styled from 'styled-components';
import { THEME } from '../../../constants/theme';

const { border, text, colors } = THEME;

export const Wrapper = styled.div`
  display: block;
  padding: 8px;
  border: 1px solid ${border.input};
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .name {
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .settings {
      cursor: pointer;
    }
  }
  
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    
    .date {
      font-size: 0.8rem;
      color: ${text.second};
      
      .anticon {
        margin-right: 8px;
        font-size: 1rem;
      }
    }
    
    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      background-color: ${colors.info};
      border-radius: 50%;
      color: ${text.invert};
    }
  }
`;
