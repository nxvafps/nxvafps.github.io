import React from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from 'react';
import NavButton from "../components/NavButton";
import styles from '../styles/Nv1.module.scss';
import dps from '../assets/images/nv1/roleIcons/DPS icon@1x.png';
import support from '../assets/images/nv1/roleIcons/Support icon@1x.png';
import tank from '../assets/images/nv1/roleIcons/Tank icon@1x.png';

const Nv1 = () => {
    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    if(!session) {
        return (
            <div>
                <PageTitle text='You need to sign in to access this project' />
                <div className={styles.buttonContainer}>
                    <NavButton text="Sign Up" href="/signUp" />
                    <NavButton text="Login" href="/login" />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <PageTitle text='Overwatch tools' />
                <div className={styles.pageContent}>
                    <p className={styles.selectRoleText}>Select a role you would like to track games for:</p>
                    <div className={styles.roleIcons}>
                        <img src={tank} alt="tankIcon" className={styles.tankIcon} />
                        <img src={dps} alt='dpsIcon' className={styles.dpsIcon} />
                        <img src={support} alt='supportIcon' className={styles.supportIcon} />
                    </div>
                </div>
            </div>
        )
    }
};

export default Nv1;
