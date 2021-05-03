import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<any>`
    body {
        margin: 0;
        padding: 0;
        background: ${(props) => props.theme.body.background};
        font-family: Open-Sans, Helvetica, Sans-Serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

`;
