import styled from 'styled-components';
import { THEME } from '../../../constants/theme';

const { colors } = THEME;

export const Button = styled.button`
  position: absolute;
  top: 212px;
  left: 70px;
  display: flex;
  align-items: center;
  width: 220px;
  height: 40px;
  padding: 8px 16px;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0;
  overflow: hidden;
  line-height: normal;
  background-color: ${colors.firebaseRed};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  cursor: pointer;
  border: none;
  border-radius: 2px;
`;
