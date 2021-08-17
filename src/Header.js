import React, {useEffect, useState} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom'

//
function Header() {

    //Funcion para desvanecer un header dependiendo de la posicion de la scrollbar
    const [show, handleShow] = useState(false);
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else handleShow(false);
    });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`header ${show && 'header__black'}`}>

            <div className="header__logo">
                <img src = "http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt = "Logo Netflix"/>
                <a href = "#inicio">Inicio</a>
                <a href = "#series">Series</a>
                <a href = "#peliculas">Peliculas</a>
                <a href = "#novedades">Novedades populares</a>
                <a href = "#lista">Mi Lista</a>
                
            </div>

            <div className="header__user">
                <div className="header__option">
                    <SearchIcon  style={{ fontSize: 24 }}/>
                </div>               
                <div className="header__option">
                    <CardGiftcardIcon style={{ fontSize: 21 }}/>
                </div>
                <div className="header__option">
                    <NotificationsIcon style={{ fontSize: 22 }}/>
                </div>
                <Link to='/login'className="header__option">
                        <img src = "https://occ-0-2620-116.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeZakDz11ZWzhgfol0EvY3nQQfPNItHRE_Ek8LFdWkZ3fEf_a2By9czWI0zTV-AtR_B66axVhJUOqTD6vMmPlhnFyZaE.png" 
                        alt = "Logo Netflix"/> 
                </Link>
            </div>

        </div>
    )
}

export default Header;
