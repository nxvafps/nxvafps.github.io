import React from "react";

//Styles
import styles from './RankDisplay.module.scss';

//Utils
import { parseRankNumber } from "../../../utils/nv1/rankUtils";


const RankDisplay = ({value}) => {
    if (value == null) {
        return (
            <div className={styles.rankDisplay}>
                <p className={styles.text}>Unranked</p>
            </div>
        );
    } else {
        const { rankName, division, percentage } = parseRankNumber(value);

        const iconPath = require(`../../../assets/images/nv1/ranks/${rankName}/${rankName}${division}.png`);
        

        return (
            <div className={styles.rankDisplay}>
                <img className={styles.rankImg} src={iconPath} alt={`${rankName} ${division}`} />
                <p className={styles.text}>{percentage}%</p>
            </div>
        );
    }
}

export default RankDisplay;