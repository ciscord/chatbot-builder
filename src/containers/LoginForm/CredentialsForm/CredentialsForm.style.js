import styled from 'styled-components';
import { THEME } from '../../../constants/theme';

const { text } = THEME;

export const Wrapper = styled.div`
  display: block;
  padding: 0 48px;
  color: ${text.main};
  
  #login-form {
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
      justify-content: flex-end;
    }
  }
`;
