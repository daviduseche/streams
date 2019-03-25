import { combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'  //rename on fly to be clear which reducer is being used 
import authReducer from './authReducer'
import streamReducer from './streamReducer'

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer,
})