import React from "react";
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import styles from '../styles/ForgotPassword.module.scss'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const sendEmail = async () => {
        setEmailError('');

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

        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'https://novafps.com/updatepassword',
          })

    }

    return (
        <div className={styles.pageContent}>
            <h1 className={styles.warning}>This feature is currently not working, I will try to push a fix as soon as I can</h1>
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
        </div>
    )
}

export default ForgotPassword;