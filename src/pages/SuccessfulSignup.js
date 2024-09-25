import React from "react";
import PageTitle from "../components/PageTitle";
import styles from '../styles/pages/SuccessfulSignup.module.scss'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import supabase from "../config/supabaseClient";

const SuccessfulSignup = () => {
    const location = useLocation();
    const { email } = location.state || {};
    const [errorMessage, setErrorMessage] = useState('');

    const resendEmail = async () => {
        setErrorMessage('')
        const { error } = await supabase.auth.resend({
            type: 'signup',
            email: `${email}`,
            options: {
              emailRedirectTo: 'https://novafps.com/login'
            }
          })
        if (error) {
            setErrorMessage('Error resending verification email, please wait 60seconds and then try again');
        }          
    }

    return (
        <div className={styles.pageContent}>
            <PageTitle text={'Success!'} />
            <p className={styles.text}>Please check your emails for a button to confirm your account!<br /> The button will only work for 10 minutes and then you will need to request another email!</p>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={resendEmail}>Resend email</button>
            </div>
            {errorMessage && (
                <div className={styles.errorBox}>
                    <p className={styles.error}>{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default SuccessfulSignup;