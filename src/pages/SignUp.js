import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import styles from '../styles/pages/SignUp.module.scss';
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [agree, setAgree] = useState(false);
    const [displayNameError, setDisplayNameError] = useState([]);
    const [emailError, setEmailError] = useState([]);
    const [passwordError, setPasswordError] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [agreeError, setAgreeError] = useState('');
    const navigate = useNavigate();

    const signUp = async () => {

        setDisplayNameError([]);
        setEmailError([]);
        setPasswordError([]);
        setErrorMessage('');
        setAgreeError('')
        setSuccessMessage('');

        // Check for empty fields
        if (!email || !password || !displayName) {
            setErrorMessage(prevErrors => [...prevErrors, 'Please enter a value for all fields']);
            return;
        }

        if (displayName) {
            if (displayName.length < 3 || displayName.length > 15) {
                setDisplayNameError(prevErrors => [...prevErrors, 'Display name must be between 3 and 15 characters long']);
            }

            if (/\s/.test(displayName)) {
                setDisplayNameError(prevErrors => [...prevErrors, 'Display name must not contain spaces']);
            }

            if (/[^a-zA-Z0-9_.-]/.test(displayName)) {
                setDisplayNameError(prevErrors => [...prevErrors, 'Display name can only contain letters, numbers, underscores (_), hyphens (-), and periods (.)']);
            }

            if (!displayNameError){
                const { data: usernameTaken } = await supabase
                    .from('usernames')
                    .select('displayName')
                    .eq('displayName', displayName)
                    .single()
                    
                if(usernameTaken) {
                    setDisplayNameError(prevErrors => [...prevErrors, 'Username is already taken, please try again']);
                }
            }
        }

        if (email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                setEmailError(prevErrors => [...prevErrors, 'Please enter a valid email address of the form name@domain.xyz']);
            }
            if (!emailError) {
                const { data: emailTaken } = await supabase
                    .from('usernames')
                    .select('email')
                    .eq('email', email)
                    .single()

                if(emailTaken) {
                    setEmailError(prevErrors => [...prevErrors, 'Email is already taken, please try again'])
                }
            }
        }

        if(password) {
            if (password.length < 8) {
                setPasswordError(prevErrors => [...prevErrors, 'Password must be at least 8 characters long']);
            }
            
            if (!/[a-z]/.test(password)) {
                setPasswordError(prevErrors => [...prevErrors, 'Password must contain at least one lowercase letter']);
            }
            
            if (!/[A-Z]/.test(password)) {
                setPasswordError(prevErrors => [...prevErrors, 'Password must contain at least one uppercase letter']);
            }
            
            if (!/\d/.test(password)) {
                setPasswordError(prevErrors => [...prevErrors, 'Password must contain at least one number']);
            }
            
            if (!/[@$!%*?&]/.test(password)) {
                setPasswordError(prevErrors => [...prevErrors, 'Password must contain at least one special character']);
            }
        }

        // Check if user agreed to privacy policy and terms of service
        if (!agree) {
            setAgreeError('You must confirm that you have read the privacy policy and terms of service');
        }

        // Checks for any error message, and if it exists then stops the login process and displays the error
        if(errorMessage || displayNameError.length > 0 || emailError.length > 0 || passwordError.length > 0) {
            return;
        } else {
            const { error: signUpError } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        display_name: displayName
                    }
                },
            });

            if (signUpError) {
                setErrorMessage(prevErrors => [...prevErrors, 'Error signing up, please try again'])
                return;
            } 


            const { error: logError } = await supabase
                .from('usernames')
                .insert({email: email, displayName: displayName})
            

            if (logError) {
                setErrorMessage('Error adding details to the system, please try again');
                return;
            } else {
                navigate('/successfulsignup', { state: { email } });
            }
        }
    }

    return (
        <div>
            <PageTitle text={'Sign Up'} />
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={'User Name'}
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />

                {displayNameError.length > 0 && (
                    <div className={styles.specificErrorContainer}>
                        {displayNameError.map((error, index) => (
                            <p key={index} className={styles.specificError}>{error}</p>
                        ))}
                    </div>
                )}

                <input
                    className={styles.input}
                    type="email"
                    placeholder={'Email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {emailError.length > 0 && (
                    <div className={styles.specificErrorContainer}>
                        {emailError.map((error, index) => (
                            <p key={index} className={styles.specificError}>{error}</p>
                        ))}
                    </div>
                )}

                <input
                    className={styles.input}
                    type="password"
                    placeholder={'Password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                {passwordError.length > 0 && (
                    <div className={styles.specificErrorContainer}>
                        {passwordError.map((error, index) => (
                            <p key={index} className={styles.specificError}>{error}</p>
                        ))}
                    </div>
                )}

                <div className={styles.checkboxContainer}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        id="agree"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                    />
                    <label htmlFor="agree">
                        
                    </label>
                    <p className={styles.label}>
                    I agree to the <Link to="/privacypolicy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> and <Link to="/termsofservice" target="_blank" rel="noopener noreferrer">Terms of Service</Link>
                    </p>
                </div>

                {agreeError && (
                    <div className={styles.specificErrorContainer}>
                        <p className={styles.specificError}>{agreeError}</p>
                    </div>
                )}

                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={signUp}>Sign Up</button>
                </div>

                {errorMessage && <div className={styles.errorContainer}><p className={styles.error}>{errorMessage}</p></div>}
                {successMessage && <div className={styles.successContainer}><p className={styles.success}>{successMessage}</p></div>}

                <p className={styles.signIn}>Already have an account? <Link className={styles.signInLink} to='/login'>Sign In</Link></p>
            </div>
        </div>
    )
}

export default SignUp;
