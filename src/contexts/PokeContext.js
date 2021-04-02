import { createContext, useState } from 'react'

import history from '../services/history'

export const PokeContext = createContext()

const PokeProvider = ({ children }) => {
    const [level, setLevel] = useState(0)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [currentLife, setCurrentLife] = useState(100)
    const [username, setUsername] = useState("")
    const [corrects, setCorrects] = useState(0)
    const [errors, setErrors] = useState(0)
    const [logged, setLogged] = useState(false)

    const nextLevelExperience = Math.pow((level + 1) * 4, 2)

    const handleName = (name) => {
        setUsername(name)
    }

    const handleCorrect = () => {
        setCorrects(corrects+1)
        const xp = Math.ceil(Math.random() * (15 - 5) + 5)
        if(nextLevelExperience <= (currentExperience+xp)){
            setLevel(level+1)
            setCurrentExperience((currentExperience + xp) - nextLevelExperience)
        }else{
            setCurrentExperience(currentExperience + xp)
        }
    }

    const finishGame = () => {
        setLevel(0)
        setCurrentExperience(0)
        setLogged(false)
        setCurrentLife(100)
        history.push("/finish")
    }

    const handleErrors = () => {
        setErrors(errors + 1)
        if(currentLife - 10 <= 0){
            finishGame()
        }else{
            setCurrentLife(currentLife - 10)
        }
    }

    const resetAnswers = () => {
        setErrors(0)
        setCorrects(0)
    }

    return (
        <PokeContext.Provider value={{
            username,
            handleName,
            corrects,
            errors,
            handleCorrect,
            handleErrors,
            level,
            currentExperience,
            currentLife,
            nextLevelExperience,
            logged,
            setLogged,
            resetAnswers,
            finishGame
        }}>
            {children}
        </PokeContext.Provider>
    )
}

export default PokeProvider