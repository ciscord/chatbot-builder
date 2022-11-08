import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { bg, text } = THEME;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${bg.card};
  padding: 8px;
  border-radius: 4px;
  width: 260px;
  height: 100%;
  margin: 0 8px 0 8px;
  
  .header {
    display: flex;
    align-items: center;
    padding: 16px;
    font-size: 14px;
    font-weight: 400;
    color: ${text.invert};
    margin-bottom: 8px;
    
    .ant-typography {
      color: ${text.invert};
    }
  }
`;
