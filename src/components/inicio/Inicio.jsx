import React from 'react'
import './InicioEstilo.css'
import {Link} from 'react-scroll'

const Inicio = () => {
    return(
        <div className='inicio'>
            <div className='container'>
                <div className='titulo'>
                    <h1>Arazim</h1>
                    <p>Conheça um dos melhores aditivos para tintas o Umectante</p>
                </div>
                <div className='sub-t'>
                    <Link style={{cursor: 'pointer'}} activeClass="active" to="video" spy={true} smooth={true} offset={1} duration={900}>Saiba Mais</Link>
                    <Link style={{cursor: 'pointer'}} activeClass="active" to="contato" spy={true} smooth={true} offset={50} duration={900}>Contato</Link>
                </div>
            </div>
        </div>
    )
}

export default Inicio;