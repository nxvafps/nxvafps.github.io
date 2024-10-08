import React, { useState } from "react";

import { Title } from "../../../components";

import { SubmittedView, FormView } from "./views";

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <Title text="Forgot Password" />
      {isSubmitted ? (
        <SubmittedView />
      ) : (
        <FormView setIsSubmitted={setIsSubmitted} />
      )}
    </>
  );
};

export default ForgotPassword;
