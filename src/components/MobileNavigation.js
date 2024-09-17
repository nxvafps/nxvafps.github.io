import React, { useState, useEffect } from 'react';
import styles from '../styles/MobileNavigation.module.scss';
import NavButton from "./NavButton";
import logo from '../assets/images/icons/novaLogo.png';
import supabase from '../config/supabaseClient';

const MobileNavigation = () => {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img className={styles.headerLogo} src={logo} alt='logo'></img>
                <p className={styles.headerText}>novaFPS</p>
            </div>
            <div className={styles.headerRight}>
            
            </div>
        </div>
    )
}

export default MobileNavigation;