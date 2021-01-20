export const createProject = (project) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const profile = getState().firebase.profile;
      const authroId = getState().firebase.auth.uid;

      firestore
        .collection("projects")
        .add({
          ...project,
          authorFirstName: profile.firstName,
          authorLastname: profile.lastName,
          authroId: authroId,
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