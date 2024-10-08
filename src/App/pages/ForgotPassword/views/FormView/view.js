import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, LoadingSpinner } from "../../../../../components";
import { useAuth } from "../../../../../stores/contexts";
import { useEmailRegisteredCheck, useValidateEmail } from "../../../hooks";
import { PageContent, Text, Input, ErrorContainer, Error } from "./styles";

const FormView = ({ setIsSubmitted }) => {
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const { email, emailCheckError, isValidEmail, handleEmailChange } =
    useValidateEmail();
  const { emailRegistered, loading, emailRegisteredError } =
    useEmailRegisteredCheck(email);
  const { signInWithOtp } = useAuth();

  useEffect(() => {
    handleEmailErrors();
  }, [emailCheckError, emailRegistered, emailRegisteredError, email]);

  const handleEmailErrors = () => {
    if (emailCheckError) {
      setEmailError("Invalid email format.");
    } else if (!emailRegistered && email) {
      setEmailError(emailRegisteredError || "Email is not registered.");
    } else {
      setEmailError(null);
    }
  };

  const sendEmail = async () => {
    if (isValidEmail && emailRegistered) {
      try {
        await signInWithOtp(email);
        setError(null);
        setIsSubmitted(true);
      } catch (error) {
        setError("Failed to send email. Please try again later.");
        console.error("Error sending email:", error); // Optional: Log error for debugging
      }
    } else {
      setError("Please enter a valid and registered email.");
    }
  };

  return (
    <PageContent>
      <Text>Please enter your email below to get a password reset email.</Text>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && (
        <ErrorContainer>
          <Error>{emailError}</Error>
        </ErrorContainer>
      )}
      <Button
        text={loading ? <LoadingSpinner /> : "Send Email"}
        onClick={sendEmail}
        disabled={loading || !isValidEmail}
      />
      {error && (
        <ErrorContainer>
          <Error>{error}</Error>
        </ErrorContainer>
      )}
    </PageContent>
  );
};

FormView.propTypes = {
  setIsSubmitted: PropTypes.func.isRequired,
};

export default FormView;
