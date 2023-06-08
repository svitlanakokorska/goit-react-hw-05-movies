import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  border: 1px solid #8e57dd;
  border-radius: 4px;
  background-color: #d5d1f2;

  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #0d88aa;
    color: #ffffff;
  }
`;
