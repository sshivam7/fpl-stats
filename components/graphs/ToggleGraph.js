import React, {useState} from "react";
import BarChart from "./BarChart";
import temp from "../../constants/temp"

export default function ToggleGraph(props) {
    const [avgSel, setAvgSel] = useState(true);

    return (
        <div className="flex flex-col">
            { avgSel ? (
                <BarChart width={props.width} height={props.height} data={temp.temp} alt={avgSel}/>
            ) : (
                <BarChart width={props.width} height={props.height} data={temp.temp2} alt={avgSel}/>
            )}

            <h3 className="font-roboto flex mb-8 -mt-6 justify-center">Game Week</h3>
            <div className="flex justify-center">
                <button onClick={() => setAvgSel(true)} className={`font-roboto rounded-l-md border-r-0 px-3 py-1 ${avgSel ? 'bg-gradient-to-r from-cyan-400 to-green-400 text-neutral-800' : 'hover:bg-white hover:text-black'}`}>Average Points</button>
                <button onClick={() => setAvgSel(false)} className={`font-roboto rounded-r-md border-l-0 px-3 py-1 ${!avgSel ? 'bg-gradient-to-r from-purple-400 to-pink-600 text-neutral-800' : 'hover:bg-white hover:text-black'}`}>Highest Points</button>
            </div>
        </div>
    );
}

