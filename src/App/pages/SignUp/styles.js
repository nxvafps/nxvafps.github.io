import styled from "styled-components";

export const Container = styled.div`
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

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

  & + label {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    background-color: #7b7777;
    border: 1px solid #ffffff;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;

    &:after {
      content: "";
      position: absolute;
      width: 10px;
      height: 20px;
      border: solid #ffffff;
      border-width: 0 4px 4px 0;
      transform: rotate(45deg);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      opacity: 0;
    }
  }

  &:checked + label {
    background-color: #7b7777;
    border: none;

    &:after {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  text-align: center;
  display: inline-block;
  color: #ffffff;

  a {
    color: #ffffff;
    text-decoration: underline;

    &:hover {
      color: #434343;
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7b7777;
  border: 1px solid #630609;
  min-height: 40px;

  p {
    font-size: 15px;
    text-align: center;
    color: #630609;
  }
`;

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7b7777;
  border: 1px solid #03470d;
  height: 40px;

  p {
    text-align: center;
    color: #03470d;
  }
`;

export const SignIn = styled.p`
  text-align: center;
  color: #ffffff;

  a {
    color: #ffffff;
    text-decoration: underline;

    &:hover {
      color: #434343;
    }
  }
`;

export const SpecificErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #7b7777;
  border: 1px solid #630609;
  min-height: 40px;

  p {
    font-size: 15px;
    text-align: center;
    color: #630609;
  }
`;

export const PageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  width: 60%;
  max-width: 300px;
`;

export const Text = styled.p`
  text-align: center;
  color: #ffffff;
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

export const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7b7777;
  border: 1px solid #630609;
  min-height: 40px;
`;

export const Error = styled.p`
  font-size: 15px;
  text-align: center;
  color: #630609;
`;
