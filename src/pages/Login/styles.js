import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #be202f;
    height: 100vh;

    img{
        margin: 50px 0;
    }

    label{
        margin-left: -230px;
        color: #fff;
        font-size: 22px;
    }

    input{
        padding: 10px;
        width: 450px;
        height: 50px;
        border-radius: 4px;
        border: 1px solid #333;
        font-size: 18px;
        box-shadow: 1px 1px 10px #333;
    }

    button{
        margin-top: 50px;
        padding: 5px;
        height: 50px;
        width: 150px;
        background: #ffcc01;
        border-radius: 4px;
        box-shadow: 2px 1px 10px #2d6ab3;
        border: 1px solid #2d6ab3;
        font-size: 20px;
        font-weight: bold;
        color: #2d6ab3;
        transition: all 0.4s;

        &:hover{
            transform: scale(1.2);
        }
    }

    @media(max-width: 1280px){
        img{
            height: 250px;
        }

        label{
            font-size: 18px;
        }

        input{
            width: 400px;
        }
    }

    @media(max-width: 1024px){
        img{
            height: 180px;
            margin-bottom: 80px;
        }
    }
`