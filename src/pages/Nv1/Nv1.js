import React, { useContext, useState, useEffect } from "react";

//Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavButton from "../../components/NavButton/NavButton";

//Configs
import supabase from "../../config/supabaseClient";

//Contexts
import AuthContext from "../../contexts/AuthContext";
import Nv1Context from "../../contexts/Nv1Context";

//Styles
import styles from './Nv1.module.scss';

//Views
import Home from './Views/Home/Home';
import RoleSelect from './Views/RoleSelect/RoleSelect';
import TrackGames from './Views/TrackGames/TrackGames';
import RankSelect from './Views/RankSelect/RankSelect';


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
            .from('user_ranks')
            .select('user_id')
            .eq('user_id', userId);
    
        if (onRankTable.length > 0) {
            const { data: ranks } = await supabase
                .from('user_ranks')
                .select('*')
                .eq('user_id', userId);
            setTankRank(ranks[0].tank);
            setDpsRank(ranks[0].dps);
            setSupportRank(ranks[0].support);
        } else {
            await supabase
                .from('user_ranks')
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
                {currentView === 'rankSelect' && <RankSelect />}
                {currentView === 'trackGames' && <TrackGames />}
            </Nv1Context.Provider>
        )
    }
};

export default Nv1;
