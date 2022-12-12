export default function getGameWeekData(gameweeks) {
    let averageScore = [];
    let highScore = [];

    gameweeks.forEach((week) => {
        averageScore.push({
            week: week.id,
            value: week.average_entry_score ? week.average_entry_score : 0
        })

        highScore.push({
            week: week.id,
            value: week.highest_score ? week.highest_score : 0
        })
    });

    return { averageScore, highScore }
}