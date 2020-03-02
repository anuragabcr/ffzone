export default (state = {}, action) => {
    if (localStorage.getItem('admin')) {
        state.admin = JSON.parse(localStorage.getItem('admin'));
    }
    if (localStorage.getItem('user')) {
        state.user = JSON.parse(localStorage.getItem('user'));
    }

    switch (action.type) {
        case 'ADMIN_LOGIN':
            if (action.payload.status) {
                localStorage.setItem('user', '');
                state.user = '';
                localStorage.setItem('admin', JSON.stringify(action.payload));
            }
            return { ...state, admin: action.payload };
        case 'USER_LOGIN':
            if (action.payload.status) {
                localStorage.setItem('admin', '');
                state.admin = '';
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
            return { ...state, user: action.payload };
        case 'USER_SIGNUP':
            if (action.payload.status) {
                localStorage.setItem('admin', '');
                state.admin = '';
                localStorage.setItem('user', JSON.stringify(action.payload));
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

