import React from "react";
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import styles from '../styles/ForgotPassword.module.scss'
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const sendEmail = async () => {
        setEmailError('');
        setError('');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address of the form name@domain.xyz');
            return;
        }

        const { data: emailRegistered } = await supabase
            .from('usernames')
            .select('email')
            .eq('email', email)
            .single()

        if(!emailRegistered) {
            setEmailError('Email doesn\'t exist, please try again');
            return;
        }

        
        const { data, error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
            // set this to false if you do not want the user to be automatically signed up
            shouldCreateUser: false,
            emailRedirectTo: 'https://novafps.com/updatepassword',
            },
        })

        if (data) {
            setEmailError('');
            setError('');
            navigate('/magiclinksent')
        } else {
            setError('There was an issue signing up, please wait 60 seconds and then try again.')
        }

          

    }

    return (
        <div className={styles.pageContent}>
            <PageTitle text={'Forgot Password'} />
            <p className={styles.text}>Please enter your email below to get a password reset email.</p>
            <input
                className={styles.input}
                type="email"
                placeholder={'Email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {emailError && (
                <div className={styles.specificErrorContainer}>
                    <p className={styles.specificError}>{emailError}</p>
                </div>
            )}

            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={sendEmail}>Reset Password</button>
            </div>

            {error && (
                <div className={styles.specificErrorContainer}>
                    <p className={styles.specificError}>{error}</p>
                </div>
            )}
        </div>
    )
}

export default ForgotPassword;