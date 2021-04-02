import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *, body, input, button{
        font-family: FR73PixelW00-Regular;
    }

    button{
        cursor: pointer;
    }
`

export default GlobalStyle