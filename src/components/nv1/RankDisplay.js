import React from "react";
import styles from '../../styles/components/nv1/RankDisplay.module.scss';
import { parseRankNumber } from "../../utility/nv1/rankUtils";

const RankDisplay = ({value}) => {
    if (value == null) {
        return (
            <div className={styles.rankDisplay}>
                <p className={styles.text}>Unranked</p>
            </div>
        );
    } else {
        const { rankName, division, percentage } = parseRankNumber(value);

        const iconPath = require(`../../assets/images/nv1/ranks/${rankName}/${rankName}${division}.png`);
        

        return (
            <div className={styles.rankDisplay}>
                <img className={styles.rankImg} src={iconPath} alt={`${rankName} ${division}`} />
                <p className={styles.text}>{percentage}%</p>
            </div>
        );
    }
}

export default RankDisplay;