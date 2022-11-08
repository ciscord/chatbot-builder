import styled from 'styled-components';
import { THEME } from '../../../constants/theme';

const { border, colors } = THEME;

export const Wrapper = styled.div`
  display: flex;
  padding: 8px;
  border: 1px solid ${border.input};
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    color: ${colors.info};
  }
`;
