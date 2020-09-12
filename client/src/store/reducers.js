import { combineReducers } from 'redux'
import { apiReducers } from './api/reducers'

export default combineReducers({
    api: apiReducers
})