import React, { useContext, useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import NavButton from "../components/NavButton";
import styles from '../styles/pages/Nv1.module.scss';
import Home from "../views/nv1/Home";
import RoleSelect from "../views/nv1/RoleSelect";
import TrackGames from "../views/nv1/TrackGames";
import AuthContext from "../context/AuthContext";
import Nv1Context from "../context/Nv1Context";

const Nv1 = () => {
    const season = process.env.REACT_APP_COMPETETIVE_SEASON;
    const { user } = useContext(AuthContext);
    const [currentView, setCurrentView] = useState('home');
    const [role, setRole] = useState('');
    const [userId, setUserId] = useState(null);
    const [tankRank, setTankRank] = useState('');
    const [dpsRank, setDpsRank] = useState('');
    const [supportRank, setSupportRank] = useState('');

    const onRanksTable = async (userId) => {
        const { data: onRankTable } = await supabase
            .from('ranks')
            .select('user_id')
            .eq('user_id', userId);
    
        if (onRankTable.length > 0) {
            const { data: ranks } = await supabase
                .from('ranks')
                .select('tank', 'dps', 'support')
                .eq('user_id', userId);
            setTankRank(ranks.tank);
            setDpsRank(ranks.dps);
            setSupportRank(ranks.support);
        } else {
            await supabase
                .from('ranks')
                .insert({ user_id: userId });
        }
    };
    
    useEffect(() => {
        const fetchUserId = async () => {
            if (user) {
                setUserId(user.id);
        
                if (user.id) {
                    await onRanksTable(user.id);
                }
            }
        };
    
        fetchUserId();
    }, [user]);
    

    if(!user) {
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
            <Nv1Context.Provider value={{ setCurrentView, userId, season, role, setRole, tankRank, setTankRank, dpsRank, setDpsRank, supportRank, setSupportRank}}>
                {currentView === 'home' && <Home />}
                {currentView === 'roleSelect' && <RoleSelect />}
                {currentView === 'trackGames' && <TrackGames setCurrentView={setCurrentView} role={role} season={season} user={userId}/>}
            </Nv1Context.Provider>
        )
    }
};

export default Nv1;
