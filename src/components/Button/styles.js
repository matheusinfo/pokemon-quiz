import styled from 'styled-components'

export const BtnEdit = styled.button`
    margin-top: 15px;
    height: 50px;
    width: 200px;
    font-size: 18px;
    background: ${props => props.color};
    color: #fff;
    border: 1px solid ${props => props.color};
    border-radius: 4px;
    transition: all 0.6s;

    &:hover{
        transform: scale(0.9);
    }
`