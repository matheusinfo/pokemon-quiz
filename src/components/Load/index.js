// Import bibliotecas
import React from 'react'
import {Link} from 'react-router-dom'

// Imports auxiliares
import { Loading } from './styles'

const Load = ({ path, text }) => (
    <Loading>
        <h1>Carregando...</h1>
        <h2>Caso não esteja logado, por favor volte ao menu</h2>
        <Link to={path}>{text}</Link>
    </Loading>
)

export default Load