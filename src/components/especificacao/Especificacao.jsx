import React from 'react'
import './EspecEstilo.css'
import { Link } from 'react-scroll'

const Especificacao = () => {
  return (
    <div className='especificacao'>
        <h1>Especificação</h1> 
        <div className='corpo'>
            <div className='card'>
                <h3>Descrição Química:</h3>
                <span className='barra'></span>
                <p>Estado físico: líquido límpido</p>
                <p>Valor pH (Tal qual): 5,5 – 7,0 (25ᵒC)</p>
                <p>Caráter Iônico: Não Iônico</p>
                <p>Inflamabilidade: o produto não é inflamável</p>
                <p>Solubilidade: solúvel em água</p>
                <h3>Proteção pessoal:</h3>
                <p>Não respirar a poeira. Evitar a liberação ao ambiente. Consultar às instruções especiais/às folhas dados de segurança e FISPQ do produto.</p>
                <p>Para maiores informações procure nosso departamento técnico.</p> <br/>
                <Link activeClass="active" to="aplica" spy={true} smooth={true} offset={50} duration={800}>Aplicação</Link>
            </div>
            <div className='card'>
                <h3>Armazenagem:</h3>
                <span className='barra'></span>
                <p>O ARAZIM possui validade de 12 meses, desde que mantido em recipiente fechado à temperatura de 20ºC a 30ºC</p>
                <p>Valor pH (Tal qual): 5,5 – 7,0 (25ᵒC)</p>
                <h3>Proteção pessoal:</h3>
                <p>Não respirar a poeira. Evitar a liberação ao ambiente. Consultar às instruções especiais/às folhas dados de segurança e FISPQ do produto.</p>
                <p>Para maiores informações procure nosso departamento técnico.</p> <br/> <br/>
                <Link activeClass="active" to="aplica" spy={true} smooth={true} offset={50} duration={800}>Aplicação</Link>

            </div>
            <div className='card'>
                <h3>Propriedades:</h3>
                <span className='barra'></span>
                <p><b>pré-alvejamento (descontínuo)</b> <br/>
                1,0 – 3 g/L adicionado a receita padrão do pré-alvejamento.</p>
                <p><b>alvejamento (descontínuo)</b> <br/>
                0,5 a 2 g/L adicionado a receita padrão do alvejamento.</p>
                <h3>Proteção pessoal:</h3>
                <p>Não respirar a poeira. Evitar a liberação ao ambiente. Consultar às instruções especiais/às folhas dados de segurança e FISPQ do produto.</p>
                <p>Para maiores informações procure nosso departamento técnico.</p> <br/>
                <Link activeClass="active" to="aplica" spy={true} smooth={true} offset={50} duration={800}>Aplicação</Link>

            </div>
        </div>
        

    </div>
  )
}

export default Especificacao