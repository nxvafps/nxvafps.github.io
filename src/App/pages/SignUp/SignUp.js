import React from "react";
import { Link } from "react-router-dom";
import { Title, Button } from "../../../../components";
import { useSignUp, useResendEmail } from "./hooks";

import {
  Container,
  Input,
  CheckboxContainer,
  Checkbox,
  Label,
  ErrorContainer,
  SuccessContainer,
  SignIn,
  SpecificErrorContainer,
  PageContent,
  Text,
  Button,
  ErrorBox,
  Error,
} from "./styles";

const SignUp = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    displayName,
    setDisplayName,
    agree,
    setAgree,
    displayNameError,
    emailError,
    passwordError,
    errorMessage,
    agreeError,
    isSubmitted,
    signUp,
  } = useSignUp();

  const { resendEmail, resendError } = useResendEmail(email);

  return (
    <div>
      <Title text={"Sign Up"} />
      {isSubmitted ? (
        <PageContent>
          <Title text={"Success!"} />
          <Text>
            Please check your emails for a button to confirm your account!
            <br /> The button will only work for 10 minutes and then you will
            need to request another email!
          </Text>
          <div>
            <Button onClick={resendEmail}>Resend email</Button>
          </div>
          {resendError && (
            <ErrorBox>
              <Error>{resendError}</Error>
            </ErrorBox>
          )}
        </PageContent>
      ) : (
        <Container>
          <Input
            type="text"
            placeholder={"User Name"}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />

          {displayNameError.length > 0 && (
            <SpecificErrorContainer>
              {displayNameError.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </SpecificErrorContainer>
          )}

          <Input
            type="email"
            placeholder={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {emailError.length > 0 && (
            <SpecificErrorContainer>
              {emailError.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </SpecificErrorContainer>
          )}

          <Input
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {passwordError.length > 0 && (
            <SpecificErrorContainer>
              {passwordError.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </SpecificErrorContainer>
          )}

          <CheckboxContainer>
            <Checkbox
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <Label htmlFor="agree"></Label>

            <p>
              I agree to the{" "}
              <Link
                to="/privacypolicy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                to="/termsofservice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </Link>
            </p>
          </CheckboxContainer>

          {agreeError && (
            <SpecificErrorContainer>
              <p>{agreeError}</p>
            </SpecificErrorContainer>
          )}

          <div>
            <Button width="300px" text="Sign Up" onClick={signUp} />
          </div>

          {errorMessage && (
            <ErrorContainer>
              <p>{errorMessage}</p>
            </ErrorContainer>
          )}
          {successMessage && (
            <SuccessContainer>
              <p>{successMessage}</p>
            </SuccessContainer>
          )}

          <SignIn>
            Already have an account? <Link to="/login">Sign In</Link>
          </SignIn>
        </Container>
      )}
    </div>
  );
};

export default SignUp;
