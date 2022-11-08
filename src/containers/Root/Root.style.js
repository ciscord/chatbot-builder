import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { bg } = THEME;

export const Wrapper = styled.div`
  display: block;
  
  .root-layout {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
  }
  
  .root-header {
    padding: 0 32px;
    background: ${bg.header};
  }
  
  .root-content {
    padding: 16px;
  }
`;
