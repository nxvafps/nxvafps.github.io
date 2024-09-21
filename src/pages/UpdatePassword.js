import React, { useState } from "react";
import styles from '../styles/UpdatePassword.module.scss'
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
    const [password1, setPassword1] = useState('');
    const [passwordError1, setPasswordError1] = useState([]);
    const [password2, setPassword2] = useState('');
    const [passwordError2, setPasswordError2] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const changePassword = async () => {
        setPasswordError1([]);
        setPasswordError2([]);

        if (password1.length < 8) {
            setPasswordError1(prevErrors => [...prevErrors, 'Password must be at least 8 characters long']);
        }
        
        if (!/[a-z]/.test(password1)) {
            setPasswordError1(prevErrors => [...prevErrors, 'Password must contain at least one lowercase letter']);
        }
        
        if (!/[A-Z]/.test(password1)) {
            setPasswordError1(prevErrors => [...prevErrors, 'Password must contain at least one uppercase letter']);
        }
        
        if (!/\d/.test(password1)) {
            setPasswordError1(prevErrors => [...prevErrors, 'Password must contain at least one number']);
        }
        
        if (!/[@$!%*?&]/.test(password1)) {
            setPasswordError1(prevErrors => [...prevErrors, 'Password must contain at least one special character']);
        }

        if (password2 !== password1) {
            setPasswordError2('Passwords must match');
        }
        console.log('test1');
        if (passwordError1 > 0 || passwordError2 > 0) {
            return;
        }
        console.log('test2');
        const { data, error } = await supabase.auth.updateUser({ password: password1 })
        console.log('test3');
        if(data) {
            navigate('/successfulpasswordreset');
            console.log('sucess');
        }
        if(error) {
            setError('Error updating password, please wait 60 seconds and then try again.');
            console.log('error');
        }
    }
    return(
        <div className={styles.pageContent}>
            <PageTitle text='Update Password' />
            <p className={styles.text}>Enter your new password below.</p>

            <input
                className={styles.input}
                type="password"
                placeholder={'New Password'}
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
            />
                
            {passwordError1.length > 0 && (
                <div className={styles.specificErrorContainer}>
                    {passwordError1.map((error, index) => (
                        <p key={index} className={styles.specificError}>{error}</p>
                    ))}
                </div>
            )}

            <input
                className={styles.input}
                type="password"
                placeholder={'Confirm Password'}
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
            />
                
            {passwordError2.length > 0 && (
                <div className={styles.specificErrorContainer}>
                    {passwordError2.map((error, index) => (
                        <p key={index} className={styles.specificError}>{error}</p>
                    ))}
                </div>
            )}

            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={changePassword}>Update Password</button>
            </div>

            {error && (
                <div className={styles.specificErrorContainer}>
                    <p className={styles.specificError}>{error}</p>
                </div>
            )}

        </div>
    )
}

export default UpdatePassword;