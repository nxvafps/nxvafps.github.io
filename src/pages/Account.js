import React from "react";
import supabase from "../config/supabaseClient";
import PageTitle from "../components/PageTitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from '../styles/Account.module.scss'

const Account = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const logout = async() => { 
        let { error } = await supabase.auth.signOut()

        if(!error) {
            navigate('/');
        } else {
            setErrorMessage('There was an issue logging out')
        }
    }
    return (
        <div className={styles.account}>
            <PageTitle text={'Account'} />
            <button className={styles.button} onClick={logout}>Log out</button>
            <div className="errorContainer">
                {errorMessage && <div className={styles.error}><p>{errorMessage}</p></div>}
            </div>
        </div>
        
    )
}

export default Account;