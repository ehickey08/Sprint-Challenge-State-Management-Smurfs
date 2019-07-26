import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import App from "./components/App";
import StateProvider from './components/StateProvider'
import reducer, { initialState } from './reducers/smurfReducer'

import "./index.css";
import * as reset from './styles/reset.css'
import * as global from './styles/global.css'

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${global}
`
const theme={
    tinyFont: '1.2rem',
    smallFont: '1.5rem',
    mediumFont: '1.8rem',
    largeFont: '2.8rem',
    hugeFont: '3.2rem',
    smurfBlue: '#62CEFD',
    darkBlue: '#0EADF2',
    lightBlue: '#C3ECFE',
    lightYellow: '#FFEDC1',
    red: '#FF7B5B',
    darkRed: '#FF3404',
    lightRed: '#FFCDC1',
    errorRed: '#A7001E',
    headerFont: '"Butterfly Kids", cursive',
    standardFont: '"Roboto", sans-serif'
}

ReactDOM.render(
    <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </ThemeProvider>
    </>, 
document.getElementById("root"));
