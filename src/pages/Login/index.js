// Import bibliotecas
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

// Imports auxiliares
import { Form } from './styles'
import Logo from '../../assets/logo.png'
import history from '../../services/history'
import { PokeContext } from '../../contexts/PokeContext'

const Login = () => {
    const { handleName, setLogged } = useContext(PokeContext)
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        schema.validate(data).then(function (response){ 
            history.push('/dashboard')
            handleName(data.name)
            setLogged(true)
        }).catch(function(error){
            toast.warning(error.message)
        })
    }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <img src={Logo} alt="Logo pokémon"/>
            <label htmlFor="name">Digite seu nome</label>
            <input type="text" id="name" {...register("name")}/>
            <button>Jogar</button>
        </Form>
    )
}

const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório")
})

export default Login