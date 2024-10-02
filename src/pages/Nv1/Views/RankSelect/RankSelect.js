import React, { useContext, useEffect, useState } from "react";

//Components
import PageTitle from "../../../../components/PageTitle/PageTitle";
import Dropdown from "../../../../components/Select/Select";
import NumberInput from "../../../../components/NumberInput/NumberInput";

//Configs
import supabase from "../../../../config/supabaseClient";

//Contexts
import Nv1Context from "../../../../contexts/Nv1Context";

//Styles
import styles from './RankSelect.module.scss';

//Utils
import { calculateRankNumber } from "../../../../utils/nv1/rankUtils";


const RankSelect = () => {
    const { userId, setCurrentView, role, setTankRank, setDpsRank, setSupportRank } = useContext(Nv1Context);
    const [selectedRank, setSelectedRank] = useState(null);
    const [percentage, setPercentage] = useState('');
    const [ranks, setRanks] = useState([]);

    useEffect(() => {
        const fetchRanks = async () => {
            const { data, error } = await supabase
                .from('ranks')
                .select('id, rank');

            if (error) {
                console.log('Error fetching ranks:', error);
            } else {
                setRanks(data.map(rank => ({value: rank.rank.toLowerCase(), label: rank.rank})));
            }
        };

        fetchRanks();
    }, []);

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
                    <Dropdown
                        options={ranks} 
                        onChange={handleRankChange}
                        placeholder='Select Rank'
                        value={selectedRank}
                        height={40}
                        width={200}
                    />
                    <NumberInput 
                        value={percentage} 
                        onChange={handlePercentageChange}
                        placeholder='Enter Percentage'
                        minValue = {0}
                        maxValue = {99}
                        maxDigits = {2}
                        height = {40}
                        width = {200}
                    />
                    <button className={styles.button} onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default RankSelect;