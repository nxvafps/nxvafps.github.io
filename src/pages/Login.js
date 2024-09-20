import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import PageTitle from "../components/PageTitle";
import styles from '../styles/SignIn.module.scss'

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const Login = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (!error) {
            setErrorMessage('')
            navigate('/account');
        } else {
            setErrorMessage('There was an issue signing in.');
        }

    }
    return (
        <div>
            <PageTitle text={'Log In'} />
            <div className={styles.inputContainer}>
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
                <button onClick={Login} className={styles.button}>Log In</button>
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