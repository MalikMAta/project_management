export const createProject = (project) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();

      firestore
        .collection("projects")
        .add({
          ...project,
          authorFirstName: 'Net',
          authorLastname: 'Ninja',
          authroId: 1234,
          createdAt: new Date(),
         
        })
        .then(() => {
          dispatch({
            type: "ADD_TASK",
            project,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_TASK_ERR",
            err,
          });
        });
    };
  };