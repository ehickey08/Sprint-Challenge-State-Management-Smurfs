import React, { useEffect } from 'react'
import styled from 'styled-components'

import { getSmurfs } from '../actions/actions'
import { useStateValue } from '../hooks/useStateValue'
import Smurf from './Smurf'

const Smurfs = () => {
    const [{smurfs, isUpdating, error}, dispatch] = useStateValue()

    useEffect(() => {
        getSmurfs(dispatch)
    }, [dispatch]);

    return (
        <>
        <MessageDiv>
            {isUpdating && <h1>Fetching your Smurfs!</h1>}    
            {error && <h5>Error. Try again...</h5>}
        </MessageDiv>
        <SmurfsDiv >
            {smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
        </SmurfsDiv>
        </>
    )
}

export default Smurfs

const SmurfsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 1300px;
    margin: 0 auto;
`
const MessageDiv = styled.div`
    h5, h1{
        font-size: ${({theme}) => theme.hugeFont}
        margin: 10px;
        padding: 10px;
    }

    h5{
        color: ${({theme}) => theme.errorRed}
    }

    h1{
        color: ${({theme}) => theme.smurfBlue}
    }
`