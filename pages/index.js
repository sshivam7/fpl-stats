import React, {Suspense, useState} from "react";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

import Sphere from "./../components/AnimatedSphere"
import ActiveButton from "../components/buttons/ActiveButton"
import ScrollIndicator from "../components/ScrollIndicator";
import Card3D from "../components/cards/Card3D";
import PlayerCountCard from "../components/cards/PlayerCountCard";
import ToggleGraph from "../components/graphs/ToggleGraph"
import InfoCard from "../components/cards/InfoCard";
import BestPlayerCard from "../components/cards/BestPlayerCard";
import FAQ_DATA from "../constants/Data"
import {Waypoint} from "react-waypoint";
import Link from "next/link";
import getCurrentGW from "../services/getTopPlayerStats";
import getTopPlayerStats from "../services/getTopPlayerStats";
import getGameWeekData from "../services/getGameWeekData";

export default function Home(props) {
    const TOTAL_PAGES = 9;
    const [atPlayerCard, setAtPlayerCard] = useState(false);

    return (
        <>
            <Parallax pages={TOTAL_PAGES}>
                {/* Background and Sticky Layers */}
                <ParallaxLayer
                    factor={3}
                    style={{backgroundImage: `url(/background.svg)`, backgroundSize: 'cover'}}>
                </ParallaxLayer>
                <ParallaxLayer offset={0} sticky={{start: 0, end: 4}}>
                    <ScrollIndicator />
                </ParallaxLayer>
                <ParallaxLayer offset={0} sticky={{start: 0, end: 2}}>
                    <div className="absolute top-1 left-0 w-full h-[7%]">
                        <div className="flex px-9">
                            <Link href="#overview">
                                <a className="text-black font-stat text-2xl tracking-wide p-5 hover:text-pink-600">Overview</a>
                            </Link>
                            <Link href="#get-started">
                                <a className="text-black font-stat text-2xl tracking-wide p-5 hover:text-pink-600">My Stats</a>
                            </Link>
                            <Link href="#faq">
                                <a className="text-black font-stat text-2xl tracking-wide p-5 hover:text-pink-600">FAQ & About</a>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute top-1/3 left-4 right-4 h-1/2 lg:left-16 lg:w-1/2">
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
                {/* 3D Card and spheres layer */}
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
                        <h3 className="absolute w-40 right-0 top-72 text-2xl font-stat bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400
                                        text-transparent">"View your FPL Statistics"</h3>
                        <h3 className="absolute w-40 left-44 top-52 text-2xl font-stat bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400
                                        text-transparent">"See the top scoring player"</h3>
                        <h3 className="absolute w-40 left-56 bottom-56 text-2xl font-stat bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                                        text-transparent">"View gameweek point totals"</h3>
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
                {/* General Stats Layers  */}
                <ParallaxLayer offset={2} className="bg-background">
                    <div className="absolute w-full left-1/2 h-full">
                        <Waypoint onEnter={() => setAtPlayerCard(true)}/>
                        <PlayerCountCard atPos={atPlayerCard} numPlayers={props.total_players}/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer id="overview" offset={3} factor={2} className="bg-gradient-to-b from-background to-cyan-400">
                    <div className="flex flex-col h-full">
                        <div className="w-2/3 h-full mx-auto text-center">
                            <h2 className="mb-2 mt-40 font-poppins font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                                        text-transparent text-9xl">
                                <span className="text-9xl text-neutral-800">&nbsp;Overview&nbsp;</span> and Statistics
                            </h2>
                            <p className="font-roboto font-medium text-neutral-500 text-2xl">
                                Get an overview of the current match-week as well as other general statistics.
                                View point totals and stats for the best performing player and compare your scores with
                                others.
                            </p>
                        </div>
                        <BestPlayerCard data={props.bestGWPlayer}/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.25}>
                    <h3 className="absolute right-0 top-1/2 font-stat tracking-wide text-6xl bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600
                                        text-transparent rotate-90">Game Week - 23</h3>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.5}>
                    <h3 className="absolute -right-5 top-1/2 font-stat tracking-wide text-6xl text-neutral-800 rotate-90">Best Player</h3>
                </ParallaxLayer>
                <ParallaxLayer offset={5} factor={2} className="bg-neutral-900">
                    <div className="flex flex-col m-40 mb-36">
                        <h2 className="w-2/3 h-full font-poppins text-8xl font-bold text-white">Points By Gameweek</h2>
                        <h3 className="text-white">View average and highest points across the 38 premier league gameweeks.</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <ToggleGraph width={1000} height={600} data={props.gameweekData} />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={7} className="bg-neutral-900">
                    <div id="get-started" className="flex flex-col m-40 -mt-28 rtl">
                        <h2 className="w-2/3 h-full font-poppins text-8xl font-bold text-white">View Your FPL Statistics</h2>
                        <h3 className="text-white">Get an overview of your Fantasy Premier League statistics across all 38 gameweeks</h3>
                    </div>
                    <div className="flex w-full m-40">
                        <div className="flex flex-col mr-10 w-3/5">
                            <label className="text-white font-roboto " htmlFor="name">Enter your manager ID (see FAQ for help)</label>
                            <input className="bg-neutral-700 text-white border-none rounded-lg h-14 p-2" type="text" id="name" name="name" />
                        </div>
                        <div className="mt-auto mb-0">
                            <button className="bg-gradient-to-tr text-white rounded-lg px-14 py-4 from-rose-500 to-orange-400 hover:from-white hover:to-white hover:text-neutral-900">Get Your Stats</button>
                        </div>
                    </div>
                </ParallaxLayer>
                {/* FAQ and About */}
                <ParallaxLayer offset={8} id="faq" className="bg-background">
                    <div className="flex flex-wrap items-center justify-center justify-around w-full h-full">
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
                        <div className="absolute bottom-0 w-full bg-dk-background h-7">
                            <div className="flex justify-between">
                                <h1 className="mx-3 my-1 text-[14px] font-roboto text-neutral-800">
                                    <a target="_blank" href="https://icons8.com/icon/85018/expand-arrow" rel="noreferrer">Expand Arrow</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
                                </h1>
                                <h1 className="mx-3 my-1 text-[14px] font-roboto text-neutral-800">
                                    Overview &nbsp;
                                    My Stats &nbsp;
                                    FAQ
                                </h1>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=86400'
    )

    const response = await fetch("https://fantasy.premierleague.com/api/bootstrap-static/");
    let data = await response.json();

    return {
        props: {
            total_players: data.total_players,
            bestGWPlayer: await getTopPlayerStats(data),
            gameweekData: getGameWeekData(data.events)
        },
    }
}