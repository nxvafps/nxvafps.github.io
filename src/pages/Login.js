import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import PageTitle from "../components/PageTitle";
import styles from '../styles/SignIn.module.scss'

const LogIn = () => {
    const [identifier, setIdentifier] = useState('');
    const [identifierError, setIdentifierError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    
    const Login = async () => {
        setIdentifierError('');
        setPasswordError('');
        setErrorMessage('');

        if(!identifier && !password) {
            setErrorMessage('Please enter a Username/Email and a password.');
            return;
        } else if (!identifier) {
            setIdentifierError('Please Enter a Username/Email.');
            return;
        } else if (!password) {
            setPasswordError('Please enter a password.')
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(identifier)) {
            const { data, error:emailCheckError } = await supabase
                    .from('usernames')
                    .select('email')
                    .eq('email', identifier);

            if (emailCheckError) {
                setErrorMessage('There was an issue checking your details.');
                return;
            } else if (data.length === 0) {
                setIdentifierError('This email address is not associated with a user.');
                return;
            }

            const { error: emailSignInError } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
    
            if (!emailSignInError) {
                navigate('/account');
            } else {    
                setPasswordError('This password is incorrect.');
                return;
            }
        } else {
            const { data, error:checkUsernameError } = await supabase
                .from('usernames')
                .select('*')
                .eq('displayName', identifier);

            if (checkUsernameError) {
                setErrorMessage('There was in issue checking your details.');
                return;
            } else if (data.length === 0) {
                setIdentifierError('This username does not exist');
                return;
            } else {
                const email = data[0].email;

                const { data, error:usernameSignInError } = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password,
                });

                if (!usernameSignInError) {
                    navigate('/account');
                } else {
                    setPasswordError('This password is incorrect.');
                }
            }
        }
    }
    return (
        <div>
            <PageTitle text={'Log In'} />
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={'Username or Email'}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                />

                {identifierError && (
                    <div className={styles.specificErrorContainer}>
                        <p className={styles.specificError}>{identifierError}</p>
                    </div>
                )}

                <input
                    className={styles.input}
                    type="password"
                    placeholder={'Password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {passwordError && (
                    <div className={styles.specificErrorContainer}>
                        <p className={styles.specificError}>{passwordError}</p>
                    </div>
                )}

                <button onClick={Login} className={styles.button}>Log In</button>

                {errorMessage && (
                    <div className={styles.specificErrorContainer}>
                        <p className={styles.specificError}>{errorMessage}</p>
                    </div>
                )}

                <div className={styles.messages}>
                    <p className={styles.text}>Forgot your password? <Link className={styles.link} to='/forgotpassword'>Click Here!</Link></p>
                    <p className={styles.text}>Don't have an account? <Link className={styles.link} to='/signup'>Sign Up</Link></p>
                </div>
                {errorMessage && <div className={styles.errorContainer}><p className={styles.error}>{errorMessage}</p></div>}
            </div>
        </div>
    )
}


export default LogIn;