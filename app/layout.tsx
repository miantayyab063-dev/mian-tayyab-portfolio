import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Mian Muhammad Tayyab | People, Talent & Opportunity',description:'Explore the professional story of Mian Muhammad Tayyab: international recruitment, human resources, business development and creative media.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
