import React, { useContext, useState } from "react";
import styles from '../../styles/views/nv1/RankSelect.module.scss';
import Nv1Context from "../../context/Nv1Context";
import PageTitle from "../../components/PageTitle";
import RankDropdown, { ranks } from "../../components/nv1/RankDropdown";
import PercentageInput from "../../components/nv1/PercentageInput";
import supabase from "../../config/supabaseClient";
import { calculateRankNumber } from "../../utility/nv1/rankUtils";

const RankSelect = () => {
    const { userId, setCurrentView, role, tankRank, setTankRank, dpsRank, setDpsRank, supportRank, setSupportRank } = useContext(Nv1Context);
    const [selectedRank, setSelectedRank] = useState(null);
    const [percentage, setPercentage] = useState('');

    const title = "Rank Select: " + role;

    const handleRankChange = (selectedOption) => {
        setSelectedRank(selectedOption);
    }

    const handlePercentageChange = (event) => {
        setPercentage(event.target.value);
    };

    const updateValue = async (rankValue, role, userId) => {
        switch (role) {
            case 'tank':
                setTankRank(rankValue);
                await supabase
                    .from('user_ranks')
                    .update({tank: rankValue})
                    .eq('user_id', userId)
                break;
            case 'dps':
                setDpsRank(rankValue);
                await supabase
                    .from('user_ranks')
                    .update({dps: rankValue})
                    .eq('user_id', userId)
                break;
            case 'support':
                setSupportRank(rankValue);
                await supabase
                    .from('user_ranks')
                    .update({support: rankValue})
                    .eq('user_id', userId)
                break;
            default:
                break;
        }
    }

    const handleSave = async () => {
        const rankValue = selectedRank ? selectedRank.value : null;
        const percentageValue = percentage ? parseInt(percentage, 10) : 0;

        if (rankValue) {
            const rankNumber = calculateRankNumber(rankValue, percentageValue);
            await updateValue(rankNumber, role, userId);
        }

        setCurrentView('trackGames');
    };

    return (
        <div>
            <div className={styles.titleContainer}>
                <button className={styles.backButton} onClick={() => setCurrentView('roleSelect')}>Back</button>
                <div className={styles.title}>
                    <PageTitle text={title}/>
                </div>
            </div>
            <div className={styles.pageContent}>
                <div className={styles.rankInput}>
                    <RankDropdown onChange={handleRankChange} />
                    <PercentageInput value={percentage} onChange={handlePercentageChange} />
                    <button className={styles.button} onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default RankSelect;