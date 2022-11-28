/*
Footer é um componente que cria o rodapé de nosso sistema
*/

import React from "react"
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <p id="tituloFooter">Chamada Automática</p>
            <p className="descricao">Este projeto tem como foco otimizar o tempo de aula por meio de uma chamada mais rápida para que a quantidade de alunos não interfira no tempo para ela ser feita. Dessa forma é possível ter uma aula mais produtiva.</p>
            <p>Engenharia de computação UPX5</p>
            <p>&copy; all rights reserved 2022</p>
        </footer>
    )
}