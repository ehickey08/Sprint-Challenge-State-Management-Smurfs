import axios from 'axios'

export const ATTEMPTING_UPDATE='ATTEMPTING_UPDATE'
export const GOT_SMURFS='GOT_SMURFS'
export const DELETED_SMURF="DELETED_SMURF"
export const UPDATED_SMURF="UPDATED_SMURF"
export const ADDED_SMURF="ADDED_SMURF"
export const ATTEMPT_ERROR="ATTEMPT_ERROR"

export const getSmurfs = (dispatch, url = 'http://localhost:3333/smurfs') => {
    dispatch({type: ATTEMPTING_UPDATE})
    axios
        .get(`${url}`)
        .then(res => {
            dispatch({type: GOT_SMURFS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: ATTEMPT_ERROR, payload: err.response})
        })
}

export const addSmurf = (dispatch, url= 'http://localhost:3333/smurfs') => {
    dispatch({type: ATTEMPTING_UPDATE})
    axios
        .post(`${url}`)
        .then(res => {
            dispatch({type: ADDED_SMURF, payload: res.data})
        })
        .catch(err => {
            dispatch({type: ATTEMPT_ERROR, payload: err.response})
        })
}

export const updateSmurf = (id, dispatch, url= 'http://localhost:3333/smurfs') => {
    dispatch({type: ATTEMPTING_UPDATE})
    axios
        .put(`${url}/${id}`)
        .then(res => {
            dispatch({type: UPDATED_SMURF, payload: res.data})
        })
        .catch(err => {
            dispatch({type: ATTEMPT_ERROR, payload: err.response})
        })
}

export const deleteSmurf = (id, dispatch, url= ' http://localhost:3333/smurfs') => {
    console.log(id)
    dispatch({type: ATTEMPTING_UPDATE})
    axios
        .delete(`${url}/${id}`)
        .then(res => {
            dispatch({type: DELETED_SMURF, payload: res.data})
        })
        .catch(err => {
            dispatch({type: ATTEMPT_ERROR, payload: err.response})
        })
}