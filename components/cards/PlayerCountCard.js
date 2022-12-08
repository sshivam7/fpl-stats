import React, {useState} from "react";
import CountUp from "react-countup";

export default function PlayerCountCard(props) {
    let hasRun = false;

    return (
        <div className="flex flex-col justify-between p-20 w-full  md:w-1/2 h-3/4 bg-[url('/player.png')] bg-right bg-contain bg-no-repeat bg-right">
            <h2 className="font-poppins font-black w-2/3 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                                        text-transparent text-7xl"><span className="text-neutral-800">TOTAL</span> PLAYERS</h2>
            <CountUp
                start={(props.numPlayers / 1000) - 500}
                end={props.numPlayers / 1000}
                enableScrollSpy={true}
                duration={5}
                separator={","}
                onStart={() => hasRun = !hasRun}
            >
                {({ countUpRef, start }) => {
                    if (props.atPos === true && !hasRun) {
                        start();
                        console.log("start")
                    }
                    return (
                    <div className="flex items-baseline">
                        <p className="font-anton pb-10 bg-clip-text text-transparent bg-gradient-to-bl from-blue-500 to-green-400 text-8xl sm:text-9xl" ref={countUpRef}></p>
                        <p className="font-anton text-neutral-800 text-7xl px-2">K</p>
                    </div>
                    )
                }}
            </CountUp>
        </div>
    );
}


