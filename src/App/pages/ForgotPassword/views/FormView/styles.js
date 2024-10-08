import styled from "styled-components";

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 80%;
  gap: 20px;
  margin: auto;
`;

export const Text = styled.p`
  color: #ffffff;
  text-align: center;
`;

export const Input = styled.input`
  height: 40px;
  border: 1px solid #ffffff;
  font-size: 20px;
  text-align: center;
  background-color: #7b7777;
  color: #ffffff;

  &::placeholder {
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #7b7777;
  border: 1px solid #630609;
  min-height: 40px;
`;

export const Error = styled.p`
  font-size: 15px;
  text-align: center;
  display: block;
  color: #630609;
`;
