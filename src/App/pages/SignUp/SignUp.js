import React from "react";
import { Link } from "react-router-dom";
import { Title, Button } from "../../../../components";
import useSignUp from "./Hooks";
import styles from "./SignUp.module.scss";

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

  return (
    <div>
      <Title text={"Sign Up"} />
      {isSubmitted ? (
        <div className={styles.successMessage}>
          <p>
            We have sent you an email with a link to confirm your account. If
            you have received this, you can close this page. Otherwise, click
            the button below to send another confirmation link.
          </p>
          <button className={styles.button} onClick={signUp}>
            Resend Confirmation Link
          </button>
        </div>
      ) : (
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder={"User Name"}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />

          {displayNameError.length > 0 && (
            <div className={styles.specificErrorContainer}>
              {displayNameError.map((error, index) => (
                <p key={index} className={styles.specificError}>
                  {error}
                </p>
              ))}
            </div>
          )}

          <input
            className={styles.input}
            type="email"
            placeholder={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {emailError.length > 0 && (
            <div className={styles.specificErrorContainer}>
              {emailError.map((error, index) => (
                <p key={index} className={styles.specificError}>
                  {error}
                </p>
              ))}
            </div>
          )}

          <input
            className={styles.input}
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {passwordError.length > 0 && (
            <div className={styles.specificErrorContainer}>
              {passwordError.map((error, index) => (
                <p key={index} className={styles.specificError}>
                  {error}
                </p>
              ))}
            </div>
          )}

          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              className={styles.checkbox}
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree"></label>

            <p className={styles.label}>
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
          </div>

          {agreeError && (
            <div className={styles.specificErrorContainer}>
              <p className={styles.specificError}>{agreeError}</p>
            </div>
          )}

          <div className={styles.buttonContainer}>
            <Button width="300px" text="Sign Up" onClick={signUp} />
          </div>

          {errorMessage && (
            <div className={styles.errorContainer}>
              <p className={styles.error}>{errorMessage}</p>
            </div>
          )}
          {successMessage && (
            <div className={styles.successContainer}>
              <p className={styles.success}>{successMessage}</p>
            </div>
          )}

          <p className={styles.signIn}>
            Already have an account?{" "}
            <Link className={styles.signInLink} to="/login">
              Sign In
            </Link>
          </p>
        </div>
      )}
      ;
    </div>
  );
};

export default SignUp;
