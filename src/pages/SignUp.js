import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import styles from '../styles/SignUp.module.scss';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [agree, setAgree] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const signUp = async () => {
        // Check for empty fields
        if (!email || !password || !displayName) {
            setSuccessMessage('');
            setErrorMessage('All fields are required');
            return;
        }

        // Validate display name
        if (displayName.length < 3 || displayName.length > 15) {
            setSuccessMessage('');
            setErrorMessage('Display name must be between 3 and 15 characters long');
            return;
        }

        if (/\s/.test(displayName)) {
            setSuccessMessage('');
            setErrorMessage('Display name must not contain spaces');
            return;
        }

        if (/[^a-zA-Z0-9]/.test(displayName)) {
            setSuccessMessage('');
            setErrorMessage('Display name must not contain special characters');
            return;
        }

        // Check if user agreed to privacy policy and terms of service
        if (!agree) {
            setSuccessMessage('');
            setErrorMessage('You must confirm that you have read the privacy policy and terms of service');
            return;
        }

        const { data: usernameTaken } = await supabase
            .from('usernames')
            .select('displayName')
            .eq('displayName', displayName)
            .single()
            
        if(usernameTaken) {
            setSuccessMessage('')
            setErrorMessage('Username is already taken, please try again')
            return;
        }

        const { data: emailTaken } = await supabase
            .from('usernames')
            .select('email')
            .eq('email', email)
            .single()

        if(emailTaken) {
            setSuccessMessage('')
            setErrorMessage('Email is already taken, please try again')
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
            setSuccessMessage('');
            setErrorMessage('Error signing up, please try again')
            return;
        } 


        const { error: logError } = await supabase
            .from('usernames')
            .insert({email: email, displayName: displayName})
        

        if (logError) {
            setSuccessMessage('');
            setErrorMessage('Error adding details to the system, please try again');
        } else {
            setErrorMessage('');
            setSuccessMessage('Check your emails for a link to confirm your account!');
        }
    }

    return (
        <div>
            <PageTitle text={'Sign Up'} />
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={'User Name'}
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="email"
                    placeholder={'Email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder={'Password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.checkboxContainer}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        id="agree"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                    />
                    <label htmlFor="agree">
                        
                    </label>
                    <p className={styles.label}>
                    I agree to the <a href="/privacypolicy" target="_blank">Privacy Policy</a> and <a href="/termsofservice" target="_blank">Terms of Service</a>
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={signUp}>Sign Up</button>
                </div>
                {errorMessage && <div className={styles.errorContainer}><p className={styles.error}>{errorMessage}</p></div>}
                {successMessage && <div className={styles.successContainer}><p className={styles.success}>{successMessage}</p></div>}
            </div>
        </div>
    )
}

export default SignUp;
