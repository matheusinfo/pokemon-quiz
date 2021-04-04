// Import bibliotecas
import React from 'react'

// Imports auxiliares
import { InputEdit } from './styles'

const Input = ({ type, placeholder, onChange, value }) => (
    <InputEdit type={type} placeholder={placeholder} onChange={(e) => onChange(e)} value={value}/>
)

export default Input