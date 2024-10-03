import React, { useContext, useState } from "react";

//Components
import { Title } from "../../../../components/Titles/Titles";

//Config
import supabase from "../../../../config/supabaseClient";

//Context
import ForgotPasswordContext from "../../../../contexts/ForgotPasswordContext";

//Styles
import styles from './RequestMagicLink.module.scss';


const RequestMagicLink = () => {
    const { setCurrentView } = useContext(ForgotPasswordContext);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('');

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

        
        const { data } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
            // set this to false if you do not want the user to be automatically signed up
            shouldCreateUser: false,
            emailRedirectTo: 'https://novafps.com',
            },
        })

        if (data) {
            setEmailError('');
            setError('');
            setCurrentView('magicLinkSent')
        } else {
            setError('There was an issue signing up, please wait 60 seconds and then try again.')
        }

          

    }

    return (
        <div className={styles.pageContent}>
            <Title text={'Forgot Password'} />
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

export default RequestMagicLink;