import React from "react";
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import styles from '../styles/SignUp.module.scss'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const signUp = async () => {
        // Check for empty fields
        if (!email || !password || !displayName) {
            setErrorMessage('All fields are required');
            return;
        }

        // Validate display name
        if (displayName.length < 3 || displayName.length > 15) {
            setErrorMessage('Display name must be between 3 and 15 characters long');
            return;
        }

        if (/\s/.test(displayName)) {
            setErrorMessage('Display name must not contain spaces');
            return;
        }

        // Check if email or display name already exists
        const { data: emailExists } = await supabase
            .from('auth.users')
            .select('email')
            .eq('email', email)
            .single();

        const { data: displayNameExists } = await supabase
            .from('auth.users')
            .select('user_metadata->display_name')
            .eq('user_metadata->display_name', displayName)
            .single();

        if (emailExists) {
            setErrorMessage('Email already in use');
            return;
        }

        if (displayNameExists) {
            setErrorMessage('Display name already in use');
            return;
        }

        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: 'novafps.com/Login',
                data: {
                    display_name: displayName
                }
            },
        })

        if (error) {
            setSuccessMessage('')
            setErrorMessage('There was an issue signing up')
        } else {
            setErrorMessage('')
            setSuccessMessage('Check your emails for a link to confirm your account!')
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
