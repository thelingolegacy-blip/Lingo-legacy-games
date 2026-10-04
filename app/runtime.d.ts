export {};
declare global { interface Window { LingoGamesRuntime?: { boot:()=>unknown; emit:(name:string,detail?:unknown)=>void }; LingoMusic?: { start:()=>void; stop:()=>void }; } }