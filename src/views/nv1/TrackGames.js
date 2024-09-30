import React, { useContext, useEffect, useState } from "react";
import styles from '../../styles/views/nv1/TrackGames.module.scss';
import PageTitle from "../../components/PageTitle";
import Nv1Context from "../../context/Nv1Context";
import RankDisplay from "../../components/nv1/RankDisplay";
import supabase from "../../config/supabaseClient"; 

const TrackGames = () => {
    const [roleRank, setRoleRank] = useState('');
    const { setCurrentView, role, season, userId, tankRank, setTankRank, dpsRank, setDpsRank, supportRank, setSupportRank } = useContext(Nv1Context);
    const [map, setMap] = useState('');
    const [mode, setMode] = useState('');
    const [formData, setFormData] = useState({
        userId: '',
        competitiveSeason: '',
        role: '',
        gameNumber: '',
        date: '',
        rankBeforeGame: '',
        myScore: '',
        enemyScore: '',
        result: '',
        srChange: '',
        rankAfterGame: '',
    });

    const setBaseFormData = () => {
        setFormData({
            userId: userId,
            competitiveSeason: season,
            role: role,
            gameNumber: '',
            date: '',
            rankBeforeGame: '',
            myScore: '',
            enemyScore: '',
            result: '',
            srChange: '',
            rankAfterGame: '',
        });
    }

    useEffect(() => {
        setBaseFormData();
        switch (role) {
            case 'tank':
                setRoleRank(tankRank);
                break;
            case 'dps':
                setRoleRank(dpsRank);
                break;
            case 'support':
                setRoleRank(supportRank);
                break;
            default:
                setRoleRank('');
        }
        setFormData(prevFormData => ({ ...prevFormData, rankBeforeGame: roleRank }));
    }, [role, tankRank, setTankRank, dpsRank, setDpsRank, supportRank, setSupportRank])
    
    

    useEffect(() => {
        const now = new Date();
        const formattedDateTime = `${now.getFullYear().toString().slice(-2)}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        setFormData(prevFormData => ({ ...prevFormData, date: formattedDateTime }));
        
    }, []);

    useEffect(() => {
        const fetchGamesPlayed = async () => {
            const { data: gamesPlayed, error } = await supabase
                .from('games')
                .select('*')
                .eq('user_id', userId)
                .eq('competitive_season', season)
                .eq('role', role);
    
            if (error) {
                console.error('Error fetching games:', error);
                return;
            }
    
            setFormData(prevFormData => ({ ...prevFormData, gameNumber: gamesPlayed.length + 1 }));
        };
    
        fetchGamesPlayed();
    }, [userId, season, role]);

    return (
        <div>
            <div className={styles.titleContainer}>
                <button className={styles.backButton} onClick={() => setCurrentView('roleSelect')}>Back</button>
                <div className={styles.title}>
                    <PageTitle text={`Track Game: ${role}`}/>
                </div>
            </div>
            <div className={styles.pageContent}>            
                <div className={styles.season}>
                    <p className={styles.seasonText}>Season: {season}</p>
                </div>
                <div className={styles.startingRank}>
                    <p className={styles.startingRankText}>Starting Rank: </p>
                    <RankDisplay value={roleRank} />
                </div>
            </div>
        </div>
    )
}

export default TrackGames;