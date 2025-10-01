import './header.css';
import Nav from '../nav/nav';
import Logo from '../../assets/oblivionMC.png';
import Link from '../link/link';
import { mdiMinecraft } from '@mdi/js';
import { IoLogoDiscord } from "react-icons/io5";
import { useState, useEffect } from 'react';

function Header() {
    const [online, setOnline] = useState(null);

        useEffect(() => {
            async function fetchStatus() {
                try {
                    const res = await fetch("https://api.mcsrvstat.us/2/mc.oblivion-rp.it");
                    const data = await res.json();
                    setOnline(data.players?.online ?? "Offline");
                } catch {
                    setOnline("Offline");
                }
            }
            fetchStatus();
        }, []);


    return (
        <div className="header">
            <Nav />
            
            <div className="header-content">
                <Link 
                    icon={mdiMinecraft} 
                    text={'Entra ora'} 
                    text2={online !== null ? `${online} utenti online` : 'Caricamento...'} 
                />
                <img src={Logo} alt="OblivionMC" className='logo'/>
                <Link 
                    icon={IoLogoDiscord} 
                    text={'Entra ora'} 
                    text2={'100 utenti online'} 
                />
            </div>
        </div>
    );
}

export default Header;
