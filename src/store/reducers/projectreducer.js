// Since there is no state to begin with, add initState

const projectReducer = (state = {}, action) => {
  
    switch (action.type){
      case 'CREATE_PROJECT':
        console.log('created a project', action.project)
        return state;
      case 'CREATE_PROJECT_ERROR':
        console.log("Creat project error")
      break
      default:
        return state;
    }

}

export default projectReducer