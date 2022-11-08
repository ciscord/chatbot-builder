import styled from 'styled-components';
import { THEME } from '../../../../constants/theme';

const { border, maxHeight } = THEME;

export const Wrapper = styled.div`
  display: block;
  overflow-y: auto;
  max-height: ${maxHeight.modalContent};
`;
