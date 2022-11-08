import styled from 'styled-components';
import { THEME } from '../../../../constants/theme';

const { text } = THEME;

export const Wrapper = styled.div`
  display: block;
  max-width: 360px;
  
  .editable-text {
    font-weight: normal;
    font-size: 0.9rem;
    margin-top: 8px;
  }
  
  .info {
    font-weight: normal;
    font-size: 0.8rem;
    margin-top: 4px;
    color: ${text.second};
  }
`;
