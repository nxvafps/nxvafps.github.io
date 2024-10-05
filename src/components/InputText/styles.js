import styled from "styled-components";

const StyledInput = styled.input`
  box-sizing: border-box;
  text-align: center;
  border: none;
  outline: none;
  border: 1px solid transparent;
  background-color: #7b7777;
  color: #ffffff;
  height: ${({ height }) => height || '40px'};
  width: ${({ width }) => width || '200px'};

  &::placeholder {
    color: #ffffff;
    font-size: 15px;
  }

  &:hover,
  &:focus,
  &:not(.hasValue) {
    border: 1px solid #ffffff;
  }

  &.hasValue:not(:focus):not(:hover) {
    border: 1px solid transparent;
  }
`;

export default StyledInput;