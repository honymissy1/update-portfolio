import '../assets/styles/nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () =>{
    return(
        <nav>
            <h1>ONIMISI</h1>
            <ul>
                <a href="#home"><li>Home</li></a>
                <a href="#profiles"><li>Profiles</li></a>
                <a href="#project"><li>Projects</li></a>
                <a href="#contact"><li>Contact</li></a>

            </ul>
        </nav>
    )
}

export default Nav