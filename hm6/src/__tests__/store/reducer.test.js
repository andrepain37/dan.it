
import reducer from '../../store/reducer';


let initialStore;

beforeEach(() => {
    initialStore =  {
        products: [],
        cart: [],
        addedToCart: [],
        deletedFromCart: [],
        wishlist: [],
        showModal: false
    }
})



describe('Testing shop reducer', () => {
  test('SAVE_CART save product in the cart', () => {
    
    const action = {
      type: 'SAVE_CART',
      payload: [{id: 1}]
    }

    const newState = reducer(initialStore, action);

    expect(newState.cart).toBe(action.payload)
  })

  test('SAVE_PRODUCTS saves products in store', () => {
    
    const action = {
      type: 'SAVE_PRODUCTS',
      payload: [{id: 1}, {id: 2}]
    }

    const newState = reducer(initialStore, action);

    expect(newState.products).toBe(action.payload)
  })

  test('SAVE_WISHLIST saves products in wishlist', () => {
    
    const action = {
      type: 'SAVE_WISHLIST',
      payload: [{id: 1}, {id: 2}]
    }

    const newState = reducer(initialStore, action);

    expect(newState.wishlist).toBe(action.payload)
  })

  test('SAVE_ADDED_TO_CART save product before add to cart for Modal', () => {
    
    const action = {
      type: 'SAVE_ADDED_TO_CART',
      payload: [{id: 1, name: 'Test'}]
    }

    const newState = reducer(initialStore, action);

    expect(newState.addedToCart).toBe(action.payload)
  })

  test('SAVE_DEL_FROM_CART save product before delete from cart for Modal', () => {
    
    const action = {
      type: 'SAVE_DEL_FROM_CART',
      payload: [{id: 1, name: 'Test'}]
    }

    const newState = reducer(initialStore, action);

    expect(newState.deletedFromCart).toBe(action.payload)
  })

  test('SAVE_SHOW_MODAL save showing modal', () => {
    
    const action = {
      type: 'SAVE_SHOW_MODAL',
      payload: true
    }

    const newState = reducer(initialStore, action);

    expect(newState.showModal).toBe(action.payload)
  })

  test('CLEAR_CART deleted all products from cart', () => {

    initialStore.cart = [{id: 1}];
    
    const action = {
      type: 'CLEAR_CART'
    }

    const newState = reducer(initialStore, action);

    expect(newState.cart).toEqual([]);
  })

})
