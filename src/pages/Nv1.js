import React from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from 'react';
import NavButton from "../components/NavButton";
import styles from '../styles/Nv1.module.scss'

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
                    <p className={styles.wip}>This project is a work in progress and is currently not publically accessible, please check back soon or look out for updates on my twitter @nxvafps</p>
                </div>
            </div>
        )
    }
};

export default Nv1;
