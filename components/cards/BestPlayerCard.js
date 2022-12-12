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
            <div className=" rounded-r-lg h-full w-full lg:h-5/6 lg:w-1/2 bg-white">
                <motion.div
                    className="h-full w-full"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <motion.div className="h-full w-full" variants={cardVariants}>
                        <div className="flex h-full w-full">
                            <div className="flex flex-col justify-center w-full">
                                <h2 className="font-poppins w-full font-bold text-neutral-900 text-6xl md:text-8xl ml-4 md:ml-16">
                                    { props.data.name }
                                </h2>
                                <div className="flex flex-col text-center m-10 mb-0">
                                    <div className="flex justify-center">
                                        <div className="bg-neutral-900 shadow-lg rounded-lg px-3 py-5 mx-1 md:mx-4">
                                            <h1 className="font-poppins font-black bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600
                                            text-transparent text-6xl md:text-8xl m-4">{ props.data.goals_scored }</h1>
                                        </div>
                                        <div className="bg-neutral-900 shadow-lg rounded-lg px-3 py-5 mx-1 md:mx-4">
                                            <h1 className="font-poppins font-black bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600
                                            text-transparent text-6xl md:text-8xl m-4">{ props.data.assists }</h1>
                                        </div>
                                        <div className="bg-neutral-900 shadow-lg rounded-lg px-3 py-5 mx-1 md:mx-4">
                                            <h1 className="font-poppins font-black bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600
                                            text-transparent text-6xl md:text-8xl m-4">{ props.data.total_points }</h1>
                                        </div>
                                    </div>
                                    <p className="font-poppins font-medium text-neutral-800 text-1xl mt-8">Goals &nbsp; -  &nbsp; Assists &nbsp; -  &nbsp;Points</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <div className=" rounded-l-lg h-5/6 w-1/5 bg-white invisible lg:visible">

            </div>
        </div>
    );
}
