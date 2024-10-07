import styled from "styled-components";

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 300px;
  gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 20px 0;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #630609;
`;

const Error = styled.div`
  display: inline;
  color: #000000;
`;

export { AccountContainer, InputContainer, ErrorContainer, Error };
