import styled from 'styled-components'

export const StatusBar = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0px 25px 0;
    color: #fff;

    h2{
        width: 150px;
        background: #ff3737;
        border-radius: 4px;
        padding: 5px;
        font-size: 18px;
        color: #fff;
        margin-right: 50px;
    }

    div{
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: #666;
        position: relative;
        
        div{
            height: 4px;
            border-radius: 4px;
            background: ${props => props.color};
        }

        span{
            position: absolute;
            top: 2px;
            transform: translateX(-50%);
            color: #fff;
        }
    }
`   