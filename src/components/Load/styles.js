import styled from 'styled-components'

export const Loading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding-top: 250px;

    a{
        margin-top: 50px;
        text-decoration: none;
        color: #ffcc01;

        &:hover{
            text-decoration: underline;
        }
    }
`