import {ATTEMPTING_UPDATE,
    GOT_SMURFS,
    DELETED_SMURF,
    UPDATED_SMURF,
    ADDED_SMURF,
    ATTEMPT_ERROR,
    SET_UPDATING_SMURF} from '../actions/actions'

export const initialState = {
    smurfs: [],
    isUpdating: false,
    error: '',
    activeSmurf: {
        name: '',
        height: '',
        age: '',
        id: ''
    }
}

export default (state, {type, payload}) => {
    switch(type){
        case ATTEMPTING_UPDATE:
            return {
                ...state,
                isUpdating: true,
                error: ''
            }
        case GOT_SMURFS:
            return {
                ...state,
                smurfs: payload,
                isUpdating: false
            }
        case DELETED_SMURF:
            return {
                ...state,
                smurfs: payload,
                isUpdating: false
            }
        case UPDATED_SMURF:
            return {
                ...state,
                smurfs: payload,
                isUpdating: false
            }
        case ADDED_SMURF:
            return {
                ...state,
                smurfs: payload,
                isUpdating: false
            }
        case ATTEMPT_ERROR:
            return {
                ...state,
                isUpdating: false,
                error: payload
            }
        case SET_UPDATING_SMURF:
            return {
                ...state,
                activeSmurf: payload
            }
        default:
            return state
    }
}