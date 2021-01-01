
export const createProject = (project) => {
    return(dispatch, getState, {getFirebase}) => {

        
            // Make async call
            // create e reference to the database
            const firestore = getFirebase().firestore()
            firestore.collection('projects').add({
                // samee as using project.title && project.content
                ...project, 
                authorFirstName: 'Alex',
                authorLastname: 'SandersThree',
                authorId: '123455',
                createAt: new Date()
        //promise
            }).then(() => {
                dispatch({type: 'CREATE_PROJECT', project})

            }).catch((err) => {
                dispatch({type: 'CREATE_PROJECT_ERROR', err})
            })

    }
}