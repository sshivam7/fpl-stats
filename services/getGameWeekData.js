export default function getGameWeekData(gameweeks) {
    let averageScore = [];
    let highScore = [];

    gameweeks.forEach((week) => {
        averageScore.push({
            week: week.id,
            value: week.average_entry_score
        })

        highScore.push({
            week: week.id,
            value: week.highest_score
        })
    });

    return { averageScore, highScore }
}