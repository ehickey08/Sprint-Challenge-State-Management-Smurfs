import React from 'react'
import styled from 'styled-components'

import { deleteSmurf, SET_UPDATING_SMURF } from '../actions/actions'
import { useStateValue } from '../hooks/useStateValue'

const Smurf = ({smurf, theme}) => {
    const {name, age, height, id} = smurf
    const [,dispatch] = useStateValue()
    
    return (
        <SmurfDiv theme={theme}>
            <h2>{name}</h2>
            <h4>Age: {age} Smurf years</h4>
            <h4>Height: {height}</h4>
            <SmurfButton onClick={() => deleteSmurf(id, dispatch)}>Delete</SmurfButton>
            <SmurfButton onClick={() => dispatch({type: SET_UPDATING_SMURF, payload: smurf})}>Update</SmurfButton>
        </SmurfDiv>
    )
}

export default Smurf

const SmurfDiv = styled.div`
    background: ${props => props.theme.lightBlue};
    width: 300px;
    height: 300px;
    margin: 20px;
    border-radius: 20px;
    padding: 20px;
    text-align: center;

    h2, h4{
        font-size: ${({theme}) => theme.largeFont};
        font-family: ${({theme}) => theme.standardFont};
        margin: 20px;
        color: ${({theme}) => theme.darkRed}
    }

    h2{
        text-decoration: underline;
    }
    
    h4{
        font-size: ${({theme}) => theme.mediumFont}
    }
}`

export const SmurfButton = styled.button`
    display: block;
    width: 120px;
    margin: 20px auto;
    padding: 10px 5px;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.darkRed}
    background: ${({theme}) => theme.lightRed}
    color: ${({theme}) => theme.darkBlue};
    font-size: 2rem;
    font-family: ${({theme}) => theme.standardFont};
    cursor: pointer;

    &:hover{
        background: ${({theme}) => theme.darkBlue}
        color: ${({theme}) => theme.lightRed}
    }
`