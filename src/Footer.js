import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__icons">
                <a href="https://www.facebook.com/manuaguis/"><FacebookIcon style={{ fontSize: 32 }} className='footer__icon'/></a>
                <a href="https://www.instagram.com/manu__7u7/"><InstagramIcon style={{ fontSize: 32 }} className='footer__icon'/></a>
                <a href="#"><TwitterIcon style={{ fontSize: 32 }} className='footer__icon'/></a>
                <a href="https://www.twitch.tv/manu_7n7"><YouTubeIcon style={{ fontSize: 32 }} className='footer__icon'/></a>
            </div>
            <div className="footer__options">
                <div className="footer__row">
                    <span>Audio y subtitulos</span>
                    <span>Prensa</span>
                    <span>Privacidad</span>
                    <span>Contáctanos</span>
                </div>
                <div className="footer__row">
                    <span>Audio descriptivo</span>
                    <span>Relaciones con inversionistas</span>
                    <span>Avisos legales</span>
                </div>
                <div className="footer__row">
                    <span>Centro de ayuda</span>
                    <span>Empleo</span>
                    <span>Preferencias de cookies</span>
                </div>
                <div className="footer__row">
                    <span>Tarjetas de regalo</span>
                    <span>Terminos de uso</span>
                    <span>Informacion corporativa</span>
                </div>
            </div>
            <button className='footer__button'>Codigo de servicio</button>
            <div className="footer__copyright">
                <span>© 1997-2021 Netflix, Inc Created by Manu Aguis</span>
            </div>
        </div>
    )
}

export default Footer
