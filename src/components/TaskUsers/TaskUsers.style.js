import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { text } = THEME;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding-right: 8px;
  
  .badge {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 50%;
    font-size: 11px;
    text-transform: uppercase;
    color: ${text.invert};
    width: 20px;
    height: 20px;
    
    &.cyan {
      background: cyan;
    }
    &.green {
      background: green;
    }
    &.blue {
      background: blue;
    }
  }
`;
