import React, { useState } from "react";
import { Link } from "react-router-dom";

//Components
import { Title } from "../../../components";

//Hooks
import { useAuthHandler } from "./hooks";

//Styles
import {
  InputContainer,
  Input,
  Button,
  Text,
  Messages,
  SpecificErrorContainer,
  SpecificError,
} from "./styles";

const SignIn = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { identifierError, passwordError, errorMessage, Login } =
    useAuthHandler();

  const handleSubmit = async () => {
    await Login(identifier, password);
  };

  return (
    <div>
      <Title text={"Sign In"} />
      <InputContainer>
        <Input
          type="text"
          placeholder={"Username or Email"}
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        {identifierError && (
          <SpecificErrorContainer>
            <SpecificError>{identifierError}</SpecificError>
          </SpecificErrorContainer>
        )}
        <Input
          type="password"
          placeholder={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <SpecificErrorContainer>
            <SpecificError>{passwordError}</SpecificError>
          </SpecificErrorContainer>
        )}
        <Button onClick={handleSubmit}>Log In</Button>
        {errorMessage && (
          <SpecificErrorContainer>
            <SpecificError>{errorMessage}</SpecificError>
          </SpecificErrorContainer>
        )}
        <Messages>
          <Text>
            Forgot your password? <Link to="/forgotpassword">Click Here!</Link>
          </Text>
          <Text>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Text>
        </Messages>
      </InputContainer>
    </div>
  );
};

export default SignIn;
