import styled, { keyframes } from "styled-components";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: ${spin} 1s linear infinite;
`;

export default Spinner;
