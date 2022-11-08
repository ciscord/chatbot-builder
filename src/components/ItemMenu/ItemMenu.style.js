import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { border, colors } = THEME;

export const Wrapper = styled.div`
  display: block;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: block;
  
  .item {
    padding: 4px 0;
    cursor: pointer;
    
    &:hover {
      color: ${colors.info};
    }
  }
`;
