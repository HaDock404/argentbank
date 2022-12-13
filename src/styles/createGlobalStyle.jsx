import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body {
        margin: 0;
        display: flex;
        flex-direction column;
        width: 100%;
        min-height: 100vh;
        position: relative;
    }
    .margin{
        margin-right: 5px;
    }
    .size {
        font-size: 5rem;
    }
    `

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle