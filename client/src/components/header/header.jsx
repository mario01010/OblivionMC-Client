import './header.css';
import Nav from '../nav/nav';
import Logo from '../../assets/oblivionMC.png';
import Link from '../link/link';

import { mdiMinecraft } from '@mdi/js';
import { IoLogoDiscord } from "react-icons/io5";

import { useState, useEffect } from 'react';

function Header() {
    const [online, setOnline] = useState(null);
    const [discordOn, setDiscordOn] = useState([]);

    useEffect(() => {
        async function fetchDiscord() {
            try {
                const response = await fetch('https://discord.com/api/guilds/1078670950456893460/widget.json');
                const data = await response.json();

                if (data.members) {
                    setDiscordOn(data.members.filter(member => member.status === 'online'));
                }
            } catch (error) {
                console.error('errore nel fetching degli utenti discord', error);
            }
        }

        fetchDiscord();

        const interval = setInterval(fetchDiscord, 30000);
        return () => clearInterval(interval);
    }, []); 

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
                    text2={online === null
                        ? 'Caricamento...'
                        : online == 'offline'
                        ? offline
                        : online > 1
                            ? `${online} Utenti online`
                            : `${online} Utente online`
                    }
                />
                <img src={Logo} alt="OblivionMC" className='logo'/>
                <Link 
                    icon={IoLogoDiscord} 
                    text={'Entra ora'} 
                    text2={discordOn !== null 
                        ? discordOn.length > 1 
                        ? `${discordOn.length} Utenti online` 
                        : `${discordOn.length} Utente online` 
                        : 'Caricamento...'
                    } 
                />
            </div>
        </div>
    );
}

export default Header;
