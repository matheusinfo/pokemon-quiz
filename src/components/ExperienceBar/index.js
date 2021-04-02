// Import bibliotecas
import React from 'react'

// Imports auxiliares
import { StatusBar } from './styles'

const ExperienceBar = ({color, text, level, percentToNextLevel, currentExperience, nextLevelExperience, type}) => (
    <StatusBar color={color}>
        <h2>{text} {level}</h2>
        <span style={{marginRight: "10px"}}>0{type}</span>
        <div>
            <div style={{ width: `${percentToNextLevel}%` }}></div>
            <span style={{left: `${percentToNextLevel}%`, marginTop: '5px'}}>{currentExperience}{type}</span>
        </div>
        <span style={{marginLeft: "10px"}}>{nextLevelExperience}{type}</span>
    </StatusBar>
)

export default ExperienceBar