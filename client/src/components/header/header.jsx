import './header.css';
import Nav from '../nav/nav';
import Logo from '../../assets/oblivionMC.png';

function Header(){
    return(
        <div className="header">
            <Nav />
            
            <div className="header-content">
                <img src={Logo} alt="OblivionMC" className='logo'/>
            </div>
        </div>
    )
}

export default Header;