import React, { useEffect } from 'react'
import { getSmurfs } from '../actions/actions'
import { useStateValue } from '../hooks/useStateValue'
import Smurf from './Smurf'
const Smurfs = () => {
    const [{smurfs, isUpdating, error}, dispatch] = useStateValue()

    useEffect(() => {
        getSmurfs(dispatch)
    }, [dispatch, smurfs]);

    return (
        <div>
            {isUpdating && <h3>Fetching your Smurfs!</h3>}    
            {error && <h3>Error. Try again...</h3>}
            {smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}

        </div>
    )
}

export default Smurfs
