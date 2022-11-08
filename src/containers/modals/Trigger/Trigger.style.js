import styled from 'styled-components';
import { THEME } from '../../../constants/theme';

const { maxHeight } = THEME;

export const Wrapper = styled.div`
  display: block;
  min-height: ${maxHeight.modal};
  
  .system-type {
    margin-bottom: 16px;
  }
  
  .btn-preview {
    padding: 8px 0 0 0;
  }
`;
