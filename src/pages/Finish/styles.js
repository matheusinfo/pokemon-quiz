import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #be202f;
    color: #fff;

    h1{
        font-size: 45px;
    }

    img{
        height: 250px;
    }

    div{
        display: flex;

        strong{
            margin: 0 25px;
            font-size: 25px;
        }
    }

    button{
        margin-top: 50px;
        padding: 5px;
        height: 50px;
        width: 250px;
        background: #ffcc01;
        border-radius: 4px;
        box-shadow: 2px 1px 10px #2d6ab3;
        border: 1px solid #2d6ab3;
        font-size: 20px;
        font-weight: bold;
        color: #2d6ab3;
        transition: all 0.6s;

        &:hover{
            transform: scale(1.2);
        }
    }

    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 0;
        
        a{
            text-decoration: none;
            color: #fff;

            &:hover{
                text-decoration: underline;
            }
        }
    }
`

