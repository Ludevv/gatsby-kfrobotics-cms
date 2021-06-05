import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, 
    *::before,
    *::after {
        box-sizing: inherit;
    }


    body {
        margin: 0;
        padding: 125px 85px;
        font-family: 'Roboto';
        height: 200vh;
        background-color: #ddd;
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Rubik';
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
`;