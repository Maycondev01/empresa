import React, {useState} from 'react'
import './NavEstilo.css';
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'


const Nav = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='nav'>
        <a><h1><Link activeClass="active" to="inicio" spy={true} smooth={true} offset={50} duration={800}>Exatacor</Link></h1></a>
        <ul className={click ? 'menu active' : 'menu'}>
            <li><a href='/'><Link activeClass="active" to="inicio" spy={true} smooth={true} offset={50} duration={800}>Inicio</Link></a></li>
            <li><a href='/'><Link activeClass="active" to="video" spy={true} smooth={true} offset={50} duration={900}>Sobre</Link></a></li>
            <li><a href='/'><Link activeClass="active" to="especificacao" spy={true} smooth={true} offset={50} duration={900}>Especificação</Link></a></li>
            <li><a href='/'><Link activeClass="active" to="aplica" spy={true} smooth={true} offset={50} duration={500}>Aplicação</Link></a></li>
            <li><a href='/'><Link activeClass="active" to="contato" spy={true} smooth={true} offset={50} duration={500}>Contato</Link></a></li>
        </ul>
        <div className='barra' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{color: '#f3f3f3'}}/>) :  (<FaBars size={30} style={{color: '#f3f3f3'}}/>)}
        </div>
    </div>
  )
}

export default Nav