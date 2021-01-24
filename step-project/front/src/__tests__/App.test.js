import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import App from '../App';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
 
describe('Testing render component App', () => {
  let store;
 
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
  });
 


  test('Smoke test of App.js', () => {
    const shallowWrapper = shallow(<Provider store={store}><App /></Provider>);
    shallowWrapper.debug()
  })

});