const initialState = {
    products: [],
    cart: [],
    addedToCart: [],
    deletedFromCart: [],
    wishlist: [],
    showModal: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_CART':
            return {...state, cart: action.payload}
        case 'SAVE_PRODUCTS':
            return {...state, products: action.payload}
        case 'SAVE_WISHLIST':
            return {...state, wishlist: action.payload}
        case 'SAVE_ADDED_TO_CART':
            return {...state, addedToCart: action.payload}
        case 'SAVE_DEL_FROM_CART':
            return {...state, deletedFromCart: action.payload}
        case 'SAVE_SHOW_MODAL':
            return {...state, showModal: action.payload}
        case 'CLEAR_CART':
            return {...state, cart: []}
        default:
            return state;
    }
}

export default reducer;
