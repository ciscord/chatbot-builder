import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { border, bg, colors } = THEME;

export const Wrapper = styled.div`
  display: block;
  
  .image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border: 1px dashed ${border.input};
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    background-color: ${bg.layout};
    margin-bottom: 8px;
    
    .anticon {
      font-size: ${({ size }) => Math.trunc(size / 5)}px;
      font-weight: bold;
      margin-bottom: 24px;
      color: ${colors.ghost};
    }
    
    .title {
      font-size: ${({ size }) => Math.trunc(size / 10)}px;
      font-weight: bold;
      color: ${colors.dark};
    }
  }
`;
