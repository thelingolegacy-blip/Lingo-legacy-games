import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Lingo Legacy Games Studio", description: "Original worlds from The Lingo Legacy." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
