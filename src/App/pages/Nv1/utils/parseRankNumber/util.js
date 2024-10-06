const parseRankNumber = (rankNumber) => {
    const ranks = ['bronze', 'silver', 'gold', 'platinum', 'diamond', 'masters', 'grandmaster', 'champion'];
    const rankIndex = Math.floor(rankNumber / 500);
    const division = 5 - Math.floor((rankNumber % 500) / 100);
    const percentage = rankNumber % 100;
    const rankName = ranks[rankIndex];
    return { rankName, division, percentage };
};

export default parseRankNumber;