import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Components
import { Title, Subtitle, Button, InputText } from "../../../components";

//Contexts
import { useAuth } from "../../../stores/contexts";

//Hooks
import {
  useFetchUserData,
  useDisplayNameValidation,
  useSetDisplayName,
} from "./hooks";

//Styles
import {
  AccountContainer,
  InputContainer,
  ErrorContainer,
  Error,
} from "./styles";

const Account = () => {
  const navigate = useNavigate();
  const { signOut, errorMessage } = useAuth();
  const { displayName, loading } = useFetchUserData();
  const { validateDisplayName } = useDisplayNameValidation();
  const { handleSetDisplayName } = useSetDisplayName(newDisplayName);

  const [newDisplayName, setNewDisplayName] = useState("");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AccountContainer>
      <Title text={"Account"} />
      {displayName ? (
        <Subtitle text={`Hello, ${displayName}!`} />
      ) : (
        <InputContainer>
          <Subtitle text={"Please choose a username"} />
          <InputText
            width="300px"
            placeholder="Username"
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
          />
          <Button
            width="300px"
            text="Set Username"
            onClick={() =>
              handleSetDisplayName(newDisplayName, validateDisplayName)
            }
          />
        </InputContainer>
      )}
      <Button
        width="300px"
        text="Reset Password"
        onClick={() => navigate("/resetpassword")}
      />
      <Button
        width="300px"
        text="Sign Out"
        onClick={async () => {
          try {
            await signOut();
          } catch (error) {
            console.error(error);
          }
        }}
      />
      <ErrorContainer>
        {errorMessage && (
          <Error>
            <p>{errorMessage}</p>
          </Error>
        )}
      </ErrorContainer>
    </AccountContainer>
  );
};

export default Account;
