import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
    @font-face {font-family: "FR73PixelW00-Regular"; src: url("//db.onlinewebfonts.com/t/7c2857cbd04acdf539eeb197ca8fd6c2.eot"); src: url("//db.onlinewebfonts.com/t/7c2857cbd04acdf539eeb197ca8fd6c2.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/7c2857cbd04acdf539eeb197ca8fd6c2.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/7c2857cbd04acdf539eeb197ca8fd6c2.woff") format("woff"), url("//db.onlinewebfonts.com/t/7c2857cbd04acdf539eeb197ca8fd6c2.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/7c2857cbd04acdf539eeb197ca8fd6c2.svg#FR73PixelW00-Regular") format("svg"); }

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