import { useState } from "react";
import supabase from "../../../../../config";
import * as Utils from "../utils";

const useSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [agree, setAgree] = useState(false);
    const [displayNameError, setDisplayNameError] = useState([]);
    const [emailError, setEmailError] = useState([]);
    const [passwordError, setPasswordError] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [agreeError, setAgreeError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const signUp = async () => {
        setDisplayNameError([]);
        setEmailError([]);
        setPasswordError([]);
        setErrorMessage('');
        setAgreeError('');

        if (!email || !password || !displayName) {
            setErrorMessage('Please enter a value for all fields');
            return;
        }

        const displayNameErrors = await Utils.validateDisplayName(displayName);
        const emailErrors = await Utils.validateEmail(email);
        const passwordErrors = Utils.validatePassword(password);

        if (displayNameErrors.length > 0) setDisplayNameError(displayNameErrors);
        if (emailErrors.length > 0) setEmailError(emailErrors);
        if (passwordErrors.length > 0) setPasswordError(passwordErrors);

        if (!agree) {
            setAgreeError('You must confirm that you have read the privacy policy and terms of service');
        }

        if (displayNameErrors.length > 0 || emailErrors.length > 0 || passwordErrors.length > 0 || !agree) {
            return;
        }

        const { error: signUpError } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    display_name: displayName
                }
            },
        });

        if (signUpError) {
            setErrorMessage('Error signing up, please try again');
            return;
        }

        const { error: logError } = await supabase
            .from('usernames')
            .insert({ email: email, displayName: displayName });

        if (logError) {
            setErrorMessage('Error adding details to the system, please try again');
            return;
        } else {
            setIsSubmitted(true);
        }
    };

    return {
        email, setEmail,
        password, setPassword,
        displayName, setDisplayName,
        agree, setAgree,
        displayNameError,
        emailError,
        passwordError,
        errorMessage,
        agreeError,
        isSubmitted,
        signUp
    };
};

export default useSignUp;
