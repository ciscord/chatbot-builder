import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { border, text, colors } = THEME;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid ${border.input};
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: move;
  
  .settings {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  
  .name {
    padding: 0 0 0 22px;
    font-size: 14px;
    font-weight: bold;
  }
  
  .author {
    padding: 0 0 8px 22px;
    color: ${text.second};
  }
  
  .expired {
    padding: 8px 0 0 0;
    color: ${text.second};
    .anticon {
      margin-right: 8px;
    }
  }
  
  .users {
    position: absolute;
    bottom: 8px;
    right: 0px;
  }
`;
