import localServer from '../apis/localServer';
import firebase from '../apis/firebase';
import history from '../history';

export const createMatch = ( userData ) => {
    console.log(userData);
    return async ( dispatch ) => {
        const uploadTask = firebase.ref(`/ffzone/${userData.imgFile.name}`).put(userData.imgFile);
        uploadTask.on(
            "state_changed",
            snapshot => {
              // progress function ...
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              //this.setState({ progress });
              console.log(progress);
            },
            error => {
              // Error function ...
              console.log(error);
            },
            () => {
              // complete function ...
              firebase
                .ref("ffzone")
                .child(userData.imgFile.name)
                .getDownloadURL()
                .then(url => {
                  userData.img = url;
                  localServer.post('/admin/newMatch', userData)
                    .then(response => {
                        history.push('/');
                        dispatch({type: 'CREATE_MATCH', payload: response.data});
                    })
                    .catch(error => {
                        dispatch({type: 'CREATE_MATCH', payload: error.response.data});
                    })
                });
            }
          );
    }
}