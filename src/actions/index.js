import localServer from '../apis/localServer';

export const adminLogin =( userData ) => {
    return async ( dispatch ) => {
        localServer.post('/admin/login', userData)
            .then(response => {
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
                dispatch({type: 'USER_SIGNUP', payload: response.data});    
            })
            .catch((err) => {
                dispatch({type: 'USER_SIGNUP', payload: err.response.data});
            })
    }
}

export const logout = () => {
    return ({type: 'LOGOUT', payload: 'logout'});
}