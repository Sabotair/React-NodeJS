import { PUT_NOTE_ID, PUT_ALL_NOTES } from './actions'
const defaultState = {
    notes: [],
    note: {}
}


export const apiReducers = (state = defaultState, action) => {
    switch (action.type) {
        case PUT_NOTE_ID:
            return { ...state, note: action.payload }
        case PUT_ALL_NOTES:
            return { ...state, notes: action.payload }
        default:
            return state;
    }
}