import localServer from '../apis/localServer';
import history from '../history';

export const adminLogin =( userData ) => {
    return async ( dispatch ) => {
        localServer.post('/admin/login', userData)
            .then(response => {
                history.push('/');
                dispatch({type: 'ADMIN_LOGIN', payload: response.data});    
            })
            .catch((err) => {
                dispatch({type: 'ADMIN_LOGIN', payload: err.response.data});
            })
    }
} 

export const userLogin =( userData ) => {
    return async ( dispatch ) => {
        localServer.post('/auth/login', userData)
            .then(response => {
                history.push('/');
                dispatch({type: 'USER_LOGIN', payload: response.data});    
            })
            .catch((err) => {
                dispatch({type: 'USER_LOGIN', payload: err.response.data});
            })
    }
}

export const userSignup =( userData ) => {
    return async ( dispatch ) => {
        localServer.post('/auth/signup', userData)
            .then(response => {
                history.push('/');
                dispatch({type: 'USER_SIGNUP', payload: response.data});    
            })
            .catch((err) => {
                dispatch({type: 'USER_SIGNUP', payload: err.response.data});
            })
    }
}

export const logout = () => {
    history.push('/');
    return ({type: 'LOGOUT', payload: 'logout'});
}