import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { bg, border, text, colors } = THEME;

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
    padding: 2rem 48px 3rem 48px;
    position: relative;
    color: ${text.main};
    
    .field {
      margin-bottom: 16px;
      
      .label {
        font-weight: 500;
        font-size: 0.9rem;
      }
    }
    
    .footer {
      padding-top: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      a {
        font-size: 0.9rem;
      }
    }
    
    .info {
      font-size: 0.9rem;
      text-align: center;
      color: ${colors.success};
      margin-top: 24px;
    }
    
    .links {
      font-size: 0.9rem;
      text-align: center;
      margin-top: 24px;
    }
  }
`;
