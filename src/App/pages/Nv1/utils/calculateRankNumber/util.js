const calculateRankNumber = (rankValue, percentage) => {
    const ranks = ['bronze', 'silver', 'gold', 'platinum', 'diamond', 'masters', 'grandmaster', 'champion'];
    const [rank, division] = rankValue.split(' ');
    const rankIndex = ranks.findIndex(r => r === rank);
    const rankNumber = rankIndex * 500 + (5 - parseInt(division, 10)) * 100 + parseInt(percentage, 10);
    return rankNumber;
};

export default calculateRankNumber;