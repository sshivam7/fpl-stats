import React, {useState} from "react";
import CountUp from "react-countup";

export default function PlayerCountCard(props) {
    const [hasRun, setHasRun] = useState(true);

    return (
        <div className="grid place-items-center rounded-3xl w-full bg-neutral-900 md:w-1/3 h-5/6">
            <h2 className="font-poppins font-black bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                                        text-transparent text-7xl px-5 sm:px-10"><span className="text-neutral-50">TOTAL</span> PLAYERS</h2>
            <CountUp
                start={10000}
                end={10500}
                enableScrollSpy={true}
                duration={5}
                separator={","}
                onStart={() => setHasRun(!hasRun)}
            >
                {({ countUpRef, start }) => {
                    if (props.scrollPos > 1.2 && !hasRun) {
                        start();
                    }
                    return (
                    <div className="flex items-baseline">
                        <p className="font-anton pb-10 bg-clip-text text-transparent bg-gradient-to-bl from-blue-500 to-green-400 text-8xl sm:text-9xl" ref={countUpRef}></p>
                        <p className="font-anton text-neutral-50 text-7xl px-2">K</p>
                    </div>
                    )
                }}
            </CountUp>
        </div>
    );
}


