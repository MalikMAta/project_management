// here will connect all the reducers
import authReducer from './authReducer'
import  projectReducer from './projectreducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({

    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer

})

export default rootReducer