import config from '../../config'

export const createProject = (project) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {

            // Make async call
            dispatch({type: 'CREATE_PROJECT', project})

    }
}