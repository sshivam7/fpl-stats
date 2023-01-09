import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

export default async function getTopPlayerStats(data) {
    const currentWeek = data.events.find(week => week.is_current);

    const response = await fetch(`https://fantasy.premierleague.com/api/element-summary/${currentWeek.top_element}/`);
    let playerData = await response.json();

    let playerSummary = data.elements.find(e => e.id == currentWeek.top_element);

    playerData = {
        name: `${playerSummary.first_name} ${playerSummary.second_name}`,
        ...playerData.history.at(-1)
    };

    return playerData;
}