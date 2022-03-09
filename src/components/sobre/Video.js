import React from "react";
import './VideoEstilo.css';
import { Link } from "react-scroll";

import tintavideo from '../../assets/tintavideo.mp4'

const Video = () => {
    return(
        <div className="pai">      
            <video autoPlay loop muted id="video" >
            <source src={tintavideo} type='video/mp4'/>
            </video>
            <div className="content"> 
            <h1 style={{color: '#fff', textAlign: 'center', background: 'transparent'}}>Umectante Arazim</h1>
            <p style={{color: '#fff', textAlign: 'center', background: 'transparent'}}>ARAZIM é um detergente para purgas de material têxtil para toda as fibras, tem uma boa estabilidade em pH ácido ou alcalino,
            muito bom poder emulsionador e detergente, excelente poder umectante e reumectante, especialmente indicado para purga ácida, purga alcalina e alvejamento com peróxido de hidrogênio </p> 
            <div className="botao">
                <a href="/" className="btn"><Link activeClass="active" to="especificacao" spy={true} smooth={true} offset={1} duration={900}>Especificação</Link></a>
                <a href="/" className="btn"><Link activeClass="active" to="aplica" spy={true} smooth={true} offset={1} duration={900}>Aplicação</Link></a>
            </div>
            </div>
        </div>
    )
}

export default Video;