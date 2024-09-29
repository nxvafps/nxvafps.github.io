export const calculateRankNumber = (rankValue, percentage) => {
    const ranks = ['bronze', 'silver', 'gold', 'platinum', 'diamond', 'masters', 'grandmaster', 'champion'];
    const [rank, division] = rankValue.split(' ');
    const rankIndex = ranks.findIndex(r => r === rank);
    const rankNumber = rankIndex * 500 + (5 - parseInt(division, 10)) * 100 + parseInt(percentage, 10);
    return rankNumber;
};

export const parseRankNumber = (rankNumber) => {
    const ranks = ['bronze', 'silver', 'gold', 'platinum', 'diamond', 'masters', 'grandmaster', 'champion'];
    const rankIndex = Math.floor(rankNumber / 500);
    const division = 5 - Math.floor((rankNumber % 500) / 100);
    const percentage = rankNumber % 100;
    const rankName = ranks[rankIndex];
    return { rankName, division, percentage };
};