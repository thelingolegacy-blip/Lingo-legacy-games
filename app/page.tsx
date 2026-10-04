"use client";
import { useEffect, useState } from "react";

const games = [
 {id:"thats-my-lingo", title:"That's My Lingo", genre:"Social Slot Adventure", realm:"The Lingo Lounge", identity:"Neon casino-noir", accent:"#18D6D0", modes:"Solo · Daily · Tournament", mini:"Reels · Missions · Bonus Rounds"},
 {id:"spades-is-my-lingo", title:"Spades Is My Lingo", genre:"Strategy Card Social", realm:"The Lingo Card Club", identity:"Velvet table swagger", accent:"#B88A44", modes:"Solo · Private Table · Multiplayer", mini:"Tricks · Challenges · Replays"},
 {id:"uhno-lingo-university", title:"UhNo Lingo University", genre:"Card Challenge Campus", realm:"Lingo University", identity:"Campus game-show energy", accent:"#F4C84A", modes:"Solo · Classroom · Challenge Co-op", mini:"Power Cards · Classes · Events"},
 {id:"lingo-eruptions", title:"Lingo Eruptions", genre:"Arcade Score Attack", realm:"The Eruption Zone", identity:"Volcanic arcade spectacle", accent:"#F05A28", modes:"Arcade · Score Attack · Co-op Challenge", mini:"Combos · Eruptions · Boss Rounds"},
 {id:"cashman-lingo-mania", title:"Cashman Lingo Mania", genre:"Retro Prize-Show Arcade", realm:"Lingo Spotlight", identity:"Glitzy retro chaos", accent:"#1ED6A5", modes:"Solo · Bonus Round · Tournament", mini:"Bonus Wheel · Collections · Events"}
];

const features=["Lingo ID","XP + Achievements","Virtual Economy Contract","Stores","Cloud-save Contract","Adaptive Audio","Asset Registry","Photo Mode","Parties + Presence","Live Events","Telemetry","Accessibility"];

export default function GamesStudio(){
 const [ready,setReady]=useState(false);
 const [selected,setSelected]=useState<string|null>(null);
 const [status,setStatus]=useState("STUDIO READY");
 useEffect(()=>{
  const s=document.createElement("script"); s.src="/runtime/base-system.js"; s.onload=()=>{window.LingoGamesRuntime?.boot();setReady(true)}; document.body.appendChild(s);
  const m=document.createElement("script"); m.src="/audio/music-engine.js"; document.body.appendChild(m);
  return()=>{s.remove();m.remove()};
 },[]);
 const selectedGame=games.find(g=>g.id===selected);
 const enter=(id:string)=>{setSelected(id);setStatus("DEMO SURFACE LOADED")};
 return <main>
  <section className="hero">
   <p className="eyebrow">THE LINGO LEGACY · GAME STUDIO</p>
   <div className="status"><span className={ready?"dot live":"dot"}></span>{status}</div>
   <h1>Five games.<br/>Five identities.<br/>One studio system.</h1>
   <p className="lede">Promotion-ready development surfaces with distinct worlds, interactive entry states, shared identity, progression, audio, assets, stores, and test contracts.</p>
   <div className="controls"><a className="cta" href="#games">Explore games</a><button className="audio" onClick={()=>window.LingoMusic?.start()} disabled={!ready}>Play studio score</button></div>
  </section>
  <section id="games" className="grid" aria-label="Game portfolio">
   {games.map((g,i)=><article className="card" style={{"--accent":g.accent} as React.CSSProperties} key={g.id}>
    <div className="badge">0{i+1}</div><div className="identity">{g.identity}</div><h2>{g.title}</h2><p>{g.genre}</p>
    <small><b>Realm:</b> {g.realm}</small><small><b>Modes:</b> {g.modes}</small><small><b>Mini:</b> {g.mini}</small>
    <button className="play" onClick={()=>enter(g.id)} aria-label={"Open "+g.title+" demo surface"}>Enter game</button>
   </article>)}
  </section>
  {selectedGame && <section className="launch-panel" aria-live="polite">
    <span className="eyebrow">DEMO / PROMO SURFACE</span><h2>{selectedGame.title}</h2>
    <p>{selectedGame.identity} · {selectedGame.realm}</p>
    <div className="launch-actions"><button onClick={()=>setStatus("SMOKE TEST READY")}>Run smoke test</button><button onClick={()=>setStatus("PROMO CTA READY")}>Preview promo CTA</button><button onClick={()=>setSelected(null)}>Close</button></div>
   </section>}
  <section className="architecture"><p className="eyebrow">SHARED GAME STUDIO RUNTIME</p><h2>Shared foundations. Unique game feeling.</h2><div className="stack">{features.map(x=><span key={x}>{x}</span>)}</div></section>
 </main>
}