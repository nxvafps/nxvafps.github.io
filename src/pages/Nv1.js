import React from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from 'react';
import NavButton from "../components/NavButton";
import styles from '../styles/Nv1.module.scss';
import Home from "../views/nv1/Home";
import RoleSelect from "../views/nv1/RoleSelect";

const Nv1 = () => {
    const [session, setSession] = useState(null);
    const [currentView, setCurrentView] = useState('home');

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
                {currentView === 'home' && <Home setCurrentView={setCurrentView} />}
                {currentView === 'roleSelect' && <RoleSelect setCurrentView={setCurrentView} />}
            </div>
        )
    }
};

export default Nv1;
