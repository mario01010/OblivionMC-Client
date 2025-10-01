import './link.css';
import Icon from '@mdi/react';

function Link({icon, text, text2}){
    if(typeof icon == 'string'){
        return(
            <div className="link">
                <h2>{text}</h2>
                <p>{text2}</p>
                <Icon path={icon} size={4} color={'var(--primary)'} style={{ zIndex: 100, position: 'relative', marginTop: '55px' }}/>

            </div>
        )
    } else {
        const IconComponent = icon; 
        return (
            <div className="link">
                <IconComponent size={90} color="var(--primary)" style={{ zIndex: 100, position: 'relative', marginTop: '55px' }}/>
                <h2>{text}</h2>
                <p>{text2}</p>
            </div>
        )
    }
}

export default Link;