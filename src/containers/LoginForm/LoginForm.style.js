import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { bg, border } = THEME;

export const Wrapper = styled.div`
  background-color: ${bg.main};
  border-radius: 4px;
  width: 360px;
  
  .title {
    padding: 2rem 0;
    border-bottom: 1px solid ${border.input};
    text-align: center;
    
    h3.ant-typography {
      margin-bottom: 0
    }
    
    .ant-typography-secondary {
      font-size: 0.9rem;
    }
  }
  
  .form {
    padding: 2rem 0;
    height: 360px;
    position: relative;
    
    button[data-provider-id="password"] {
      pointer-events: none;
      opacity: 0;
    }
  }
`;
