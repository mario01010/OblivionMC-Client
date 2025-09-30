import './nav.css';
import { BiSolidHome } from "react-icons/bi";
import { MdForum } from "react-icons/md";
import { MdLocalGroceryStore } from "react-icons/md";

function Nav(){
    return(
        <nav>
            <li>
                <button><BiSolidHome /> Home</button>
            </li>
            <li>
                <button>???</button>
            </li>
            <li>
                <button className='active'><MdForum /> Forum</button>
            </li>
            <li>
                <button><MdLocalGroceryStore /> Store</button>
            </li>
            <li>
                <button>???</button>
            </li>
        </nav>
    )
}

export default Nav;