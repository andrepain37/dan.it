
export const saveCart = (cart) => ({
    type: 'SAVE_CART',
    payload: cart
})

export const saveProducts = (products) => ({
    type: 'SAVE_PRODUCTS',
    payload: products
})

export const saveWishlist = (wishlist) => ({
    type: 'SAVE_WISHLIST',
    payload: wishlist
})

export const saveAddedToCart = (addedToCart) => ({
    type: 'SAVE_ADDED_TO_CART',
    payload: addedToCart
})

export const saveDeletedFromCart = (deletedFromCart) => ({
    type: 'SAVE_DEL_FROM_CART',
    payload: deletedFromCart
})

export const saveShowModal = (showModal) => ({
    type: 'SAVE_SHOW_MODAL',
    payload: showModal
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

