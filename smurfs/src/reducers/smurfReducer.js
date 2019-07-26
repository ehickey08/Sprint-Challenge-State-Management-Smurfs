import {ATTEMPTING_UPDATE,
    GOT_SMURFS,
    DELETED_SMURF,
    UPDATED_SMURF,
    ADDED_SMURF,
    ATTEMPT_ERROR} from '../actions/actions'

export const initialState = {
    smurfs: [],
    isUpdating: false,
    error: ''
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
        default:
            return state
    }
}