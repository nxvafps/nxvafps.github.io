import React from "react";
import { RankDisplayWrapper, RankImg, Text } from './styles';
import { parseRankNumber } from "../../utils";

const RankDisplay = ({ value }) => {
    if (value == null) {
        return (
            <RankDisplayWrapper>
                <Text>Unranked</Text>
            </RankDisplayWrapper>
        );
    } else {
        const { rankName, division, percentage } = parseRankNumber(value);
        const iconPath = require(`../../../assets/images/nv1/ranks/${rankName}/${rankName}${division}.png`);

        return (
            <RankDisplayWrapper>
                <RankImg src={iconPath} alt={`${rankName} ${division}`} />
                <Text>{percentage}%</Text>
            </RankDisplayWrapper>
        );
    }
}

export default RankDisplay;
