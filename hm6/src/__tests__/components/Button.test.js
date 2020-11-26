import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';


describe('Testing component Button', () => {
 

  test('Smoke test of Button.js', () => {
    const shallowButton= shallow(<Button/>);
    shallowButton.debug()
  })

  test('Empty props for Button.js', () => {

    const shallowButton = shallow(<Button/>);
    expect(shallowButton.text()).toBe('Click');
    expect(shallowButton.hasClass('')).toBeTruthy();
    expect(shallowButton.get(0).props.style.backgroundColor).toBe('')
    expect(shallowButton.get(0).props.onClick.apply()).toBeFalsy()

  })

  test('Any props for Button.js', () => {

    const props = {
        text: 'Test',
        backgroundColor: '#fff',
        classes: 'test test-two',
        onClick: () => 1 + 2
    }

    const {text, backgroundColor} = props;

    const shallowButton = shallow(<Button {...props}/>);
    expect(shallowButton.text()).toBe(text);
    expect(shallowButton.hasClass('test')).toBeTruthy();
    expect(shallowButton.hasClass('test-two')).toBeTruthy();
    expect(shallowButton.get(0).props.style.backgroundColor).toBe(backgroundColor);
    expect(shallowButton.get(0).props.onClick.apply()).toBe(3)

  })

});