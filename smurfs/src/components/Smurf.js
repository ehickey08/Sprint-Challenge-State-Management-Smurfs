import React from 'react'
import { deleteSmurf } from '../actions/actions'
import { useStateValue } from '../hooks/useStateValue'

const Smurf = ({smurf}) => {
    const {name, age, height, id} = smurf
    const [,dispatch] = useStateValue()
    
    return (
        <div>
            <h2>{name}</h2>
            <h4>{age}</h4>
            <h4>{height}</h4>
            <button onClick={() => deleteSmurf(id, dispatch)}>Delete</button>
        </div>
    )
}

export default Smurf
