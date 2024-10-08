import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
  margin: auto;
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

export const Button = styled.button`
  outline: none;
  border: none;
  width: 300px;
  max-width: 300px;
  height: 40px;
  color: #7b7777;
  background-color: #ffffff;
  text-align: center;
  font-size: 20px;

  &:hover {
    background-color: #434343;
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
`;

export const Text = styled.p`
  text-align: center;
  color: #ffffff;

  .link {
    color: #ffffff;
    text-decoration: underline;

    &:hover {
      color: #434343;
    }
  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const SpecificErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #7b7777;
  border: 1px solid #630609;
  min-height: 40px;
`;

export const SpecificError = styled.p`
  font-size: 15px;
  text-align: center;
  display: block;
  color: #630609;
`;
