import styled from 'styled-components';

import { THEME } from '../../../constants/theme';

const { text, colors } = THEME;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  
  img {
  	width: 40px;
  	height: 40px;
  	border-radius: 50%;
  }
  
  span {
  	color: ${text.main};
		margin-left: 12px;
  }
  
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
  	height: 40px;
  	border-radius: 50%;
  	background-color: ${colors.info};
  	color: ${text.invert};
  }
`;
