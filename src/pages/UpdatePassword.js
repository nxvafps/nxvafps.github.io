import React, { useState, useEffect } from "react";
import styles from '../styles/UpdatePassword.module.scss'
import PageTitle from "../components/PageTitle";


const UpdatePassword = () => {
    const [password1, setPassword1] = useState('');
    const [passwordError1, setPasswordError1] = useState([]);
    const [password2, setPassword2] = useState('');
    const [passwordError2, setPasswordError2] = useState([]);

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
        
        if (passwordError1 || passwordError2) {
            return;
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


        </div>
    )
}

export default UpdatePassword;