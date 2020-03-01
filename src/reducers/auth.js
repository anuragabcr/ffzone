import history from '../history';

export default (state = {}, action) => {
    if (localStorage.getItem('admin')) {
        state.admin = JSON.parse(localStorage.getItem('admin'));
        if (state.admin.status) {
            history.push('/')
        }
    }
    if (localStorage.getItem('user')) {
        state.user = JSON.parse(localStorage.getItem('user'));
        if (state.user.status) {
            history.push('/')
        }
    }

    switch (action.type) {
        case 'ADMIN_LOGIN':
            localStorage.setItem('admin', JSON.stringify(action.payload));
            if (action.payload.status) {
                localStorage.setItem('user', '');
                state.user = '';
                history.push('/');
            }
            return { ...state, admin: action.payload };
        case 'USER_LOGIN':
            localStorage.setItem('user', JSON.stringify(action.payload));
            if (action.payload.status) {
                localStorage.setItem('admin', '');
                state.admin = '';
                history.push('/');
            }
            return { ...state, user: action.payload };
        case 'USER_SIGNUP':
            localStorage.setItem('user', JSON.stringify(action.payload));
            if (action.payload.status) {
                localStorage.setItem('admin', '');
                state.admin = '';
                history.push('/');
            }
            return { ...state, user: action.payload }
        case 'LOGOUT':
            localStorage.setItem('admin', '');
            localStorage.setItem('user', '');
            return { ...state, admin: '', user: '' }
        default:
            return state;
    }
}

