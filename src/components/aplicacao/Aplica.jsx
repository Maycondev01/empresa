import React from 'react'
import './AplicaEstilo.css';
import aditivo from '../../assets/aditivo.jpg'
import misutra from '../../assets/mistura.jpg'
import {Link} from 'react-scroll'

const Aplica = () => {
  return (
    <div className='aplica'>
        <div className='container'>
            <div className='esquerda'>
              <h1>Aplicação</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta dictum turpis, eu mollis justo gravida ac. Proin non eros blandit, rutrum est a, cursus quam. Nam ultricies, velit ac suscipit vehicula, turpis eros sollicitudin lacus, at convallis mauris magna non justo. Etiam et suscipit elit. Morbi eu ornare nulla, sit amet ornare est. Sed vehicula ipsum a mattis dapibus. Etiam volutpat vel enim at auctor
              </p>
              <Link style={{cursor: 'pointer'}} activeClass="active" to="contato" spy={true} smooth={true} offset={50} duration={500}>Contato</Link>
              <div className='direita'> 
                <div className='img-container'>
                  <div className='img-principal'>
                      <img className='img' src={aditivo} />
                  </div>
                  <div className='img-fundo'>
                      <img className='img' src={misutra} />
                  </div>
                  
                </div>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default Aplica