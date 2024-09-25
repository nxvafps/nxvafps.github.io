import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import PageTitle from "../components/PageTitle";
import PageSubtitle from "../components/PageSubtitle";
import { useNavigate } from "react-router-dom";
import styles from '../styles/pages/Account.module.scss';

const Account = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [newDisplayName, setNewDisplayName] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const { data: { user } } = await supabase.auth.getUser();

            if (user) {
                setDisplayName(user.user_metadata.display_name || '');
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    const resetPassword = () => {
        navigate('/updatepassword');
    }

    const logout = async() => { 
        let { error } = await supabase.auth.signOut()

        if(!error) {
            navigate('/');
        } else {
            setErrorMessage('There was an issue logging out')
        }
    }

    const handleSetDisplayName = async () => {
        if (newDisplayName.length < 3 || newDisplayName > 15) {
            setErrorMessage('Display name must be between 3 and 15 characters long');
            return;
        }

        if (/\s/.test(newDisplayName)) {
            setErrorMessage('Display name must not contain spaces');
            return;
        }

        const { data: displayNameExists } = await supabase
            .from('auth.users')
            .select('user_metadata->display_name')
            .eq('user_metadata->display_name', newDisplayName)
            .single();

        if (displayNameExists) {
            setErrorMessage('Display name already in use');
            return;
        }

        const { error } = await supabase.auth.updateUser({
            data: { display_name: newDisplayName }
        });

        if (error) {
            setErrorMessage('There was an issue setting the display name');
        } else {
            setDisplayName(newDisplayName);
            setErrorMessage('');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.account}>
            <PageTitle text={'Account'} />
            {displayName ? (
                <PageSubtitle text={`Hello, ${displayName}!`} />
            ) : (
                <div className={styles.inputContainer}>
                    <PageSubtitle text={'Please choose a username'} />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder={'User Name'}
                        value={newDisplayName}
                        onChange={(e) => setNewDisplayName(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleSetDisplayName}>Set</button>
                </div>
            )}
            <button className={styles.button} onClick={resetPassword}>Reset Password</button>
            <button className={styles.button} onClick={logout}>Log out</button>
            <div className="errorContainer">
                {errorMessage && <div className={styles.error}><p>{errorMessage}</p></div>}
            </div>
        </div>
        
    )
}

export default Account;