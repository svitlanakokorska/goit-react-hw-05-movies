import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px;
  margin-right: 16px;
  font-size: 16px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: 3px solid #2b21ff;
  background-color: #11ffff;

  padding: 10px 38px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #2b21ff;
    color: #ffffff;
  }
`;
