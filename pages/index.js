import React, {Suspense, useEffect, useRef, useState} from "react";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

import Sphere from "./../components/AnimatedSphere"
import ActiveButton from "../components/ActiveButton"
import ScrollIndicator from "../components/ScrollIndicator";
import Card3D from "../components/Card";
import PlayerCountCard from "../components/PlayerCountCard";
import InfoCard from "../components/InfoCard";
import FAQ_DATA from "../constants/Data"

export default function Home() {
    const parallax = useRef();
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        if (parallax.current) {
            setScrollPos(parallax.current.current / parallax.current.space)
            console.log(parallax.current.current /  parallax.current.space)
        }
    }

    useEffect(() => {
        const container = document.querySelector('.parallax-class')
        container.addEventListener('scroll', handleScroll)
        return () => {
            container.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <Parallax pages={5} ref={parallax} className="parallax-class">
                <ParallaxLayer
                    factor={3}
                    style={{backgroundImage: `url(/background.svg)`, backgroundSize: 'cover'}}>
                </ParallaxLayer>
                <ParallaxLayer offset={0} sticky={{start: 0, end: 4}}>
                    <ScrollIndicator />
                </ParallaxLayer>
                <ParallaxLayer offset={0} sticky={{start: 0, end: 1}}>
                    <div className="absolute top-1/4 left-4 right-4 h-1/2 lg:left-16 lg:w-1/2">
                        <h1 className="font-poppins font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                                        text-transparent text-7xl sm:text-9xl">
                            <span className="text-neutral-800">FPL</span> Statistics
                        </h1>
                        <p className="font-roboto font-medium text-neutral-800 mb-6 sm:mb-3 text-2xl sm:text-left">
                            Get an overview of your Fantasy Premier League Statistics.
                        </p>
                        <ActiveButton href="#get-started" text="Get Started"/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1}>
                    <div className="absolute w-full md:right-4 md:w-1/2 h-full">
                        <Canvas className="">
                            <OrbitControls enableZoom={false}/>
                            <ambientLight intensity={0.5}/>
                            <directionalLight position={[-2, 5, 2]} intensity={1}/>
                            <Suspense fallback={null}>
                                <Sphere scale={0.3} position={[2, 1, 1]} color="#ff1a72"/>
                                <Sphere scale={0.7} position={[1, -1, 0.5]} color="#ff9700"/>
                                <Sphere scale={0.5} position={[-1, 0, 1]} color="#6600ff"/>
                            </Suspense>
                        </Canvas>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5} className="invisible sm:visible">
                    <div className="absolute w-full md:right-4 md:w-1/2 h-full">
                        <Canvas>
                            <OrbitControls enableZoom={false}/>
                            <ambientLight intensity={0.5}/>
                            <directionalLight position={[-2, 5, 2]} intensity={1}/>
                            <Suspense fallback={null}>
                                <Card3D rotation={[ 0.1,-2.1, 0]} position={[1, 1.7 ,-1.5]}/>
                            </Suspense>
                        </Canvas>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} className="bg-background">
                    <div className="flex justify-center justify-around w-full h-full">
                        <PlayerCountCard scrollPos={scrollPos}/>
                        <div className="flex items-center flex-col h-5/6 w-1/2">
                            <h2 className="font-stat font-bold text-neutral-800 text-7xl m-4">Haaland</h2>
                            <div className="flex flex-col items-center justify-center h-1/2 w-full bg-[url('/card2d.svg')] bg-no-repeat bg-center bg-contain">
                                <p className="text-white font-stat text-9xl mt-20">38</p>
                                <p className="font-poppins text-white">Gameweek Points</p>
                            </div>


                            <div className="flex flex-col items-center">
                                <h1 className="font-poppins font-black text-neutral-800 text-9xl m-4">3 &nbsp; 2 &nbsp; 90</h1>
                                <p className="font-poppins font-medium bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600
                                        text-transparent text-2xl">Goals &nbsp; -  &nbsp; Assists &nbsp; -  &nbsp;Minutes</p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.5}>
                    <h3 className="absolute right-0 font-stat tracking-wide text-5xl bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600
                                        text-transparent rotate-90">Game Week - 23</h3>
                </ParallaxLayer>
                <ParallaxLayer offset={3} className="bg-background">

                </ParallaxLayer>
                <ParallaxLayer offset={4} id="get-started"  sticky={{start: 4, end: 5}} className="bg-background">
                    <div className="flex items-center justify-center justify-around w-full h-full">
                        <h2 className="font-poppins font-black bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                                        text-transparent text-7xl px-5 sm:px-10"><span className="text-neutral-800">FAQ</span> & ABOUT</h2>
                        <div className="grid grid-flow-row-dense gap-6 grid-cols-3 grid-rows-2 w-2/5 h-3/5 mr-20">
                            {FAQ_DATA.map((item) => {
                                return (
                                    <InfoCard
                                        key={item.key}
                                        span={item.span}
                                        title={item.title}
                                        content={item.content}
                                        full_title={item.full_title}
                                        full_content={item.full_content}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

//TODO: Make FOOTER
// <a target="_blank" href="https://icons8.com/icon/85018/expand-arrow">Expand Arrow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>