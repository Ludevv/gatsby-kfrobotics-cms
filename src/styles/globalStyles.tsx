import { createGlobalStyle } from "styled-components";
import 'bootstrap-css-only/css/bootstrap.min.css';


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
        padding: 125px 0 0;
        font-family: 'Roboto';

        @media (max-width: 500px) {
            padding: 100px 0 0 0;
	    }
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

    a:hover {
        color: black;
        text-decoration: none;
    }
`;