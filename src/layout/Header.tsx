import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import HeaderStyles from './styles/HeaderStyles';
import '../css/Navbar.css';
import { Button } from 'semantic-ui-react';

export interface IProps {

}

const Header: React.FunctionComponent<IProps> = (props) => {
    const [
        state, setState 
    ] = useState({
        clicked: false
    });

    const handleClick = () => {
        setState({clicked: !state.clicked })
    }

    return (
        <nav className="NavbarItems" style={{
            background: 'white',
            height: '100px',
            width: '100%'
        }}>
            <h1 className="navbar-logo">AR Team<i className="arlogo fab fa-wolf-pack-battalion"></i></h1>
            
            <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
                <li className="nav-links"><a>Citas</a></li>
                <li className="nav-links"><a>Ejercicios</a></li>
                <li className="nav-links"><a>Retos</a></li>
                <li className="nav-links"><a>Tienda</a></li>
            </ul>
            <div className="menu-icon" onClick={handleClick}>
                <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <Button className="nav-links-mobile" color="black">Log in</Button>
            
        </nav>
    )
}

export default Header;
