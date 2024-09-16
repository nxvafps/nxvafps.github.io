import React from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import styles from '../styles/SignUp.module.scss'

const SignUp = () => {
    const signUp = async (displayName, email, password) => {
        await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                display_name: displayName, 
            },
        },
      })
    }
    return (
        <div>
            <PageTitle text={'Sign Up'} />
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={'User Name'}
                />
                <input
                    className={styles.input}
                    type="email"
                    placeholder={'Email'}
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder={'Password'}
                />
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
