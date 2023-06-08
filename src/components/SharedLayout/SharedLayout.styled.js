import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
min-height: 80px;
margin-bottom: 16px;
border-bottom: 1px solid #2a363b;
padding: 20px 30px;
text-align: center;

`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #000000;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active,
  &:hover,
  &:focus {
  color: #8f28aa;
  text-decoration: underline;
  }
`;

export const LoadingDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Dot = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #1c85ff;
 `;