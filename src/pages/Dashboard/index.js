// Import bibliotecas
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

// Imports auxiliares
import { Container, Player, Informations, Game, Pokemon, WrapperButtons } from './styles'
import { PokeContext } from '../../contexts/PokeContext'
import Button from '../../components/Button'
import Load from '../../components/Load'
import Input from '../../components/Input'
import ExperienceBar from '../../components/ExperienceBar'

const Dashboard = () => {
    const { username, handleCorrect, handleErrors, level, currentExperience, currentLife, nextLevelExperience, logged, finishGame } = useContext(PokeContext)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [load, setLoad] = useState(true)
    const [input, setInput] = useState("")

    const percentToNextLevel = Math.round(currentExperience * 100) / nextLevelExperience
 
    async function loadPokemon(){
        const number = Math.ceil(Math.random() * (850 - 1) + 1)
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
        setName(data.name)
        setImage(data.sprites.front_default)
        setLoad(false)
    }

    useEffect(() => {
        loadPokemon()
    }, [])

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleAnswer = () => {
        if(input.toLocaleLowerCase() === name){
            handleCorrect()
            toast.success("Você acertou :D")
        }else{
            handleErrors()
            toast.error(`Você errou, o nome correto é ${name} :(`)
        }
        setInput("")
        loadPokemon()
    }

    const handleFinish = () => {
        finishGame()
    }

    return(
        <Container>
            {(!load && logged) ? (
                <>
                    <Player>
                        <Informations>
                            <h1>Treinador {username}</h1>
                            <ExperienceBar 
                                color="#6ce600" 
                                text="Level"
                                level={level} 
                                percentToNextLevel={percentToNextLevel}
                                currentExperience={currentExperience}
                                nextLevelExperience={nextLevelExperience}
                                type="xp"
                            />
                            <ExperienceBar 
                                color="#ff3737" 
                                text="Life"
                                level={currentLife} 
                                percentToNextLevel={currentLife}
                                currentExperience={currentLife}
                                nextLevelExperience={currentLife}
                                type="hp"
                            />
                        </Informations>
                    </Player>

                    <Game>
                        <Pokemon >
                            <h1>Quem é este pokémon? </h1>
                            <img src={image} alt="Pokémon"/>
                        </Pokemon>
                        
                        <WrapperButtons>
                            <Input type="text" placeholder="Nome do pokémon" onChange={handleInput} value={input}/>
                            <Button click={handleAnswer} text="Responder" color="#20ad6b"/>
                            <Button click={handleFinish} text="Encerrar jogo" color="#ff3737"/>
                        </WrapperButtons>
                    </Game>
                </>
            ) : (
                <Load path="/" text="voltar ao menu"/>
            )}
        </Container>
    )
}

export default Dashboard