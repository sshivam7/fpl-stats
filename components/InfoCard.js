import React, {useState} from "react";
import {motion} from "framer-motion";

export default function InfoCard(props) {
    const [expand, setExpand] = useState(false);

    const expandCard = () => {
        window.getSelection()?.removeAllRanges();
        setExpand(true)
    }

    const closeCard = () => {
        setExpand(false);
    }

    return (
        <>
            <StandardCard {...props}/>
            {expand === true ? <ExpandedCard {...props}/> : <></>}
        </>
    );

    function StandardCard(props) {
        return (
            <motion.div
                whileTap={{
                    scale: 1.4
                }}
                onTap={expandCard}
                whileHover={{
                    scale: 1.1
                }}
                className={`col-span-${props.span} shadow rounded-2xl bg-neutral-800 hover:cursor-pointer hover:shadow-2xl`}>
                <h3 className="font-stat font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                                        text-transparent text-4xl p-6">{props.title}</h3>
            </motion.div>
        );
    }

    function ExpandedCard(props) {
        return (
            <div className="fixed top-0 left-0 z-10 h-full w-full bg-neutral-50 bg-opacity-75">
                <div className="absolute top-1/4 left-1/4 h-3/5 w-1/2 rounded-2xl bg-neutral-800">
                    <button className="absolute top-4 right-4 bg-white text-2xl text-neutral-800 rounded-full px-4 py-2 " onClick={closeCard}>&#10006;</button>
                    <h3 className="font-poppins font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                                        text-transparent text-4xl p-10 pb-4">{props.full_title}</h3>
                    <p className="px-10 pb-4 font-roboto text-2xl text-white">{props.full_content}</p>
                </div>
            </div>
        );
    }
}


