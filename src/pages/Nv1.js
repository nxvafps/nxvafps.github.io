import React from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from 'react';
import NavButton from "../components/NavButton";
import styles from '../styles/pages/Nv1.module.scss';
import Home from "../views/nv1/Home";
import RoleSelect from "../views/nv1/RoleSelect";
import TrackGames from "../views/nv1/TrackGames";

const Nv1 = () => {
    const season = process.env.REACT_APP_COMPETETIVE_SEASON;
    const [session, setSession] = useState(null);
    const [currentView, setCurrentView] = useState('home');
    const [role, setRole] = useState('');
    const [user, setUser] = useState(null);
    const [ranks, setRanks] = useState(null);

    const onRanksTable = async (user) => {
        const { data: onRankTable } = await supabase
            .from('ranks')
            .select('user_id')
            .eq('user_id', user);
    
        if (onRankTable.length > 0) {
            const { data: ranks } = await supabase
                .from('ranks')
                .select('tank', 'dps', 'support')
                .eq('user_id', user);
            setRanks(ranks);
        } else {
            await supabase
                .from('ranks')
                .insert({ user_id: user });
        }
    };
    
    useEffect(() => {
        const fetchUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
    
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user.id);
    
            if (user.id) {
                await onRanksTable(user.id);
            }
        };
    
        fetchUser();
    
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    
        return () => subscription.unsubscribe();
    }, []);
    

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
                {currentView === 'roleSelect' && <RoleSelect setCurrentView={setCurrentView} setRole={setRole} ranks={ranks} />}
                {currentView === 'trackGames' && <TrackGames setCurrentView={setCurrentView} role={role} season={season} user={user}/>}
            </div>
        )
    }
};

export default Nv1;
