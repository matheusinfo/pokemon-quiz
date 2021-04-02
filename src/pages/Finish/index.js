// Import bibliotecas
import React, { useContext } from 'react'

// Imports auxiliares
import { Container } from './styles'
import history from '../../services/history'
import Pokebola from '../../assets/pokebola.png'
import { PokeContext } from '../../contexts/PokeContext'

const Finish = () => {
    const { username, corrects, errors, resetAnswers } = useContext(PokeContext)

    const handleClick = () => {
        history.push("/")
        resetAnswers()
    }

    return(
        <Container>
            <h1>Muito bem mestre {username}!</h1>
            {{corrects} <= 10 ? 
                <h2>Você se mostrou um verdadeiro mestre pokémon, parabéns!</h2>
            : 
                <h2>Você ainda tem muito oque melhorar mas confio no seu potencial.</h2>
            }
            <img src={Pokebola} alt=""/>
            <div>
                <strong>Acertos: {corrects}</strong>
                <strong>Erros: {errors}</strong>
            </div>
            <button onClick={handleClick}>voltar ao menu</button>
            <footer>
                <a href="https://github.com/MatheusINFO">Feito por @MatheusINFO</a>
            </footer>
        </Container>
    )
}


export default Finish