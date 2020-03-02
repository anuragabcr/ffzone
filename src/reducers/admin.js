export default (state={}, action) => {
    switch(action.type) {
        case 'CREATE_MATCH':
            return { ...state, create: action.payload };
        default:
            return state;
    }
}