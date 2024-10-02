import React, { useContext, useState } from "react";

//Components
import PageTitle from "../../../../components/PageTitle/PageTitle";

//Configs
import supabase from "../../../../config/supabaseClient";

//Contexts
import SignUpContext from "../../../../contexts/SignUpContext";

//Styles
import styles from './SignUpSuccess.module.scss'


const SignUpSuccess = () => {
    const { email } = useContext(SignUpContext);
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

export default SignUpSuccess;