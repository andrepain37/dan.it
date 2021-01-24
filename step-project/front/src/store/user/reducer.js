const initialState = {
    user_info: [],
    isLogin: false,
    isAuth: localStorage.getItem('isAuth') || false
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_LOGIN':
            const { ...user_info } = action.payload;
            localStorage.setItem('isAuth', true);
            return {
                user_info,
                isLogin: true,
                isAuth: true
            }
        case 'SEND_LOGOUT':
            localStorage.removeItem('isAuth');
            return {user_info: [], isLogin: false, isAuth: false}
        case 'SET_AVATAR':
            return {...state, user_info: {...state.user_info, image: action.payload}}
        default:
            return state;
    }
}

export default user;
