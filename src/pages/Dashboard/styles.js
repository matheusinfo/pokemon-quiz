import styled from 'styled-components'

export const Container = styled.div`
    background: #be202f;
    height: 100vh;
    min-width: 800px;
`

export const Player = styled.div`
   display: flex;
   text-align: center;
   background: #524e4d;
   height: 220px;
   justify-content: space-around;

   h1{
       color: whitesmoke;
       font-size: 40px;
   }
`

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.7;
`

export const Game = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: whitesmoke;
    margin-top: 50px;
    margin: 50px auto;
    width: 500px;
    height: 600px;
    border-radius: 8px;
    box-shadow: 1px 1px 8px #333;
`

export const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    h1{
        margin-top: 5px;
        color: #ffcc01;
        text-shadow: #164a7a 2px -1px 5px, #164a7a -1px 1px 5px, #164a7a 1px 1px 5px, #164a7a -1px -1px 5px;
        font-size: 40px;
    }

    img{
        margin: -60px auto 0px auto;
        width: 350px;
        height: 350px;
    }
`

export const WrapperButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -60px;

    input{
        height: 50px;
        width: 250px;
        border-radius: 4px;
        font-size: 18px;
        border: 1px solid #333;
        padding: 0 5px;
        margin-top: 15px;
    }
`