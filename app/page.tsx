"use client";
import {useEffect,useState} from "react";
const games=[
 {title:"Tricia's Escape",genre:"Fantasy Action-Adventure",realm:"Enchanted Frontier",modes:"Solo · Co-op Expeditions",mini:"Rune Match · Potion Craft · Relic Hunt"},
 {title:"Doughboy Oasis",genre:"Persistent Virtual World",realm:"Stylized Oasis",modes:"Solo · Social Multiplayer",mini:"Cooking · Arcade · Delivery · Decorating"},
 {title:"Crazy Weasol's",genre:"Dark 3D Platform Adventure",realm:"Surreal Laboratory",modes:"Solo · Challenge Co-op",mini:"Reaction Trials · Physics Rooms · Chases"},
 {title:"Silly in Philly: The Streets",genre:"Urban Open-World Action Comedy",realm:"Fictionalized City",modes:"Solo Story · Multiplayer Free-Roam",mini:"Basketball · Rhythm Battles · Courier Runs"},
 {title:"Jersey Shore & the Undead",genre:"Co-op Survival Horror",realm:"Coastal Outbreak",modes:"Solo · 2–4 Player Co-op",mini:"Barricade Repair · Scavenging · Arcade Survival"}
];
const features=["Realms","Story Modes","Solo Play","Co-op","Multiplayer","Mini-Games","Stores","Progression","Adaptive Music","Visual Assets","Photo Mode","Character Creator","Quest + Codex","Achievements","Parties + Presence","Live Events"];
export default function GamesStudio(){const[ready,setReady]=useState(false);useEffect(()=>{const s=document.createElement("script");s.src="/runtime/base-system.js";s.onload=()=>{window.LingoGamesRuntime?.boot();setReady(true)};document.body.appendChild(s);const m=document.createElement("script");m.src="/audio/music-engine.js";document.body.appendChild(m);return()=>{s.remove();m.remove()}},[]);
return <main><section className="hero"><p className="eyebrow">THE LINGO LEGACY · GAME STUDIO</p><h1>Five worlds.<br/>Infinite ways to play.</h1><p className="lede">Original realms with story campaigns, solo adventures, co-op sessions, multiplayer spaces, mini-games, stores, progression, adaptive audio, cinematic visuals, and live-service foundations.</p><div className="controls"><a className="cta" href="#games">Enter the studio</a><button className="audio" onClick={()=>window.LingoMusic?.start()} disabled={!ready}>Start studio score</button></div></section>
<section id="games" className="grid" aria-label="Game portfolio">{games.map((g,i)=><article className="card" key={g.title}><span className="index">0{i+1}</span><h2>{g.title}</h2><p>{g.genre}</p><small><b>Realm:</b> {g.realm}</small><small><b>Modes:</b> {g.modes}</small><small><b>Mini:</b> {g.mini}</small></article>)}</section>
<section className="architecture"><p className="eyebrow">SHARED STUDIO SYSTEM</p><h2>One technology foundation. Every game gets its own identity.</h2><div className="stack">{features.map(x=><span key={x}>{x}</span>)}</div></section></main>}
