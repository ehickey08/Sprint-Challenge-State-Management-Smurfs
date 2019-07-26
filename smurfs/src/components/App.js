import React from 'react'
import styled from 'styled-components'

import Smurfs from './Smurfs'
import AddSmurfForm from './AddSmurfForm'

const App = () => {
    return (
        <>
            <Header>Welcome to Your Smurf Village!</Header>
            <AddSmurfForm />
            <Smurfs />
        </>
    )
}

export default App

const Header = styled.h1`
    width: 500px;
    margin: 20px auto;
    font-size: 5rem;
    color: ${({theme}) => theme.smurfBlue};
    font-family: ${({theme}) => theme.headerFont};
    font-weight: 800;
    text-decoration: underline;
`
