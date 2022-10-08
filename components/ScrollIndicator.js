import React from "react";
import {motion} from "framer-motion";

export default function ScrollIndicator() {
    return (
        <motion.div
            animate={{scale: [1, 1.2, 1, 1.2, 1, 1.2, 1]}}
            transition={{delay:0.2, duration: 5, repeat: Infinity}}
            className="absolute bottom-3 invisible sm:visible left-1/2 flex items-center flex-col">
            <p className="font-roboto font-light text-neutral-400">〈 Scroll 〉</p>
            <img src="/expand-icon.png" alt="scroll down icon" className="w-7 h-7"/>
        </motion.div>
    );
}