import React, { useContext, useState } from "react";

//Components
import { Title } from "../../../../components/Titles/Titles";

//Context
import UpdatePasswordContext from '../../../../contexts/UpdatePasswordContext';

//Config
import supabase from "../../../../config/supabaseClient";

//Styles
import styles from './UpdatePasswordMain.module.scss';


const UpdatePasswordMain = () => {
    const { setCurrentView } = useContext(UpdatePasswordContext);
    const [password1, setPassword1] = useState('');
    const [passwordError1, setPasswordError1] = useState([]);
    const [password2, setPassword2] = useState('');
    const [passwordError2, setPasswordError2] = useState([]);
    const [otherError, setOtherError] = useState('');

    const changePassword = async () => {
        setPasswordError1([]);
        setPasswordError2([]);

        if(!password1) {
            setPasswordError1(prevErrors => [...prevErrors, 'Please enter a value']);
        } else {

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
        }

        if (password2 !== password1) {
            setPasswordError2(prevErrors => [...prevErrors, 'Passwords must match']);
        }
        if (passwordError1.length > 0 || passwordError2.length > 0) {
            return;
        }
        const { data: passwordChanged, error: passwordError } = await supabase.auth.updateUser({ password: password1 })
        if(passwordChanged) {
            setCurrentView('updatePasswordSuccess');
        }
        if(passwordError) {
            setOtherError('Error updating password, please wait 60 seconds and then try again.');
        }
    }
    return(
        <div className={styles.pageContent}>
            <Title text='Update Password' />
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

            {otherError && (
                <div className={styles.specificErrorContainer}>
                    <p className={styles.specificError}>{otherError}</p>
                </div>
            )}

        </div>
    )
}

export default UpdatePasswordMain;