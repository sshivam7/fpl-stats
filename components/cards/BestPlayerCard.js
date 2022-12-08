import React from "react";
import { motion } from "framer-motion";

export default function BestPlayerCard(props) {
    const cardVariants = {
        offscreen: {
            scale: 0
        },
        onscreen: {
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            }
        }
    };

    return (
        <div className="flex h-full w-full justify-between">
            <div className=" rounded-r-lg h-5/6 w-1/2 bg-white">
                <motion.div
                    className="h-full w-full"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <motion.div className="h-full w-full" variants={cardVariants}>
                        <div className="flex h-full w-full">
                            <div className="flex flex-col justify-center w-full">
                                <h2 className="font-poppins w-full font-bold text-neutral-900 text-8xl ml-16">
                                    { props.data.name }
                                </h2>
                                <div className="flex flex-col text-center m-10 mb-0">
                                    <div className="flex justify-center">
                                        <div className="bg-neutral-900 shadow-lg rounded-lg px-3 py-5 mx-4">
                                            <h1 className="font-poppins font-black bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600
                                            text-transparent text-8xl m-4">{ props.data.goals_scored }</h1>
                                        </div>
                                        <div className="bg-neutral-900 shadow-lg rounded-lg px-3 py-5 mx-4">
                                            <h1 className="font-poppins font-black bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600
                                            text-transparent text-8xl m-4">{ props.data.assists }</h1>
                                        </div>
                                        <div className="bg-neutral-900 shadow-lg rounded-lg px-3 py-5 mx-4">
                                            <h1 className="font-poppins font-black bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600
                                            text-transparent text-8xl m-4">{ props.data.total_points }</h1>
                                        </div>
                                    </div>
                                    {/*<h1 className="font-poppins font-black bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600*/}
                                    {/*        text-transparent text-8xl m-4">3 &nbsp; 2 &nbsp; 90</h1>*/}
                                    <p className="font-poppins font-medium text-neutral-800 text-1xl mt-8">Goals &nbsp; -  &nbsp; Assists &nbsp; -  &nbsp;Points</p>
                                </div>
                            </div>
                            {/*<div className="flex flex-col items-center justify-center h-1/2 w-full bg-[url('/card2d.svg')] bg-no-repeat bg-center bg-contain">*/}
                            {/*    <p className="text-white font-stat text-9xl mt-20">38</p>*/}
                            {/*    <p className="font-poppins text-white">Gameweek Points</p>*/}
                            {/*</div>*/}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <div className=" rounded-l-lg h-5/6 w-1/5 bg-white">

            </div>
        </div>
    );
}
