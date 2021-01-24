import React from 'react';
import Header from '../../components/Header';
import { render, fireEvent} from "@testing-library/react";
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'


let store;
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

jest.mock('react-router-dom', () => ({
    Link: 'a'
}))

beforeEach(() => {

  store =  mockStore({
      user: {
        isLogin: false,
        userInfo: []
      }
      
  })
      
})



describe('Testing component Header', () => {


    test('Smoke test of Header.js', () => {
        render(
            <Provider store={store}>
                <Header/>
            </Provider>
        );
    })

});