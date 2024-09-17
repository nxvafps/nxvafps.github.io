import React, { useState, useEffect } from 'react';
import styles from '../styles/DesktopNavigation.module.scss';
import NavButton from "./NavButton";
import logo from '../assets/images/icons/novaLogo.png';
import supabase from '../config/supabaseClient';

const DesktopNavigation = () => {
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
                <hr className={styles.divider} />
                <nav className={styles.headerNav}>
                    <NavButton text="Home" href="/" />
                    <NavButton text="Portfolio" href="/portfolio" />
                    <NavButton text="Socials" href="/socials" />
                </nav>
            </div>
            <div className={styles.headerRight}>
                {user ? (
                    <NavButton text="Account" href="/account" />
                ) : (
                    <>
                        <NavButton text="Sign Up" href="/signup" />
                        <NavButton text="Login" href="/login" />
                    </>
                )}
            </div>
        </div>
    )
}

export default DesktopNavigation;