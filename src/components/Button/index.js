// Import bibliotecas
import React from 'react'

// Imports auxiliares
import { BtnEdit } from './styles'

const Button = ({ click, text, color }) => (
    <BtnEdit color={color} onClick={click}>{text}</BtnEdit>
)

export default Button