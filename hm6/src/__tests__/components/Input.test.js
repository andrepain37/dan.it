import React from 'react';
import { render } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import Input from '../../components/Input';

jest.mock('formik', () => ({
    useField: (name) => 
        [
            {
                name
            },
            {
                touched: false,
                error: false
            }
        ]
}))

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})


describe('Testing component Input', () => {


  test('Smoke test of Input.js', () => {
    act(() => {
        render(<Input />, container)
    })
  })


  test('Any props for Input.js', () => {

    const props = {
        label: 'Test',
        name: 'test_name',
        classes: 'test',
        type: 'number'
    }

    const {label, name, classes, type } = props;

    act(() => {
        render(<Input {...props} />, container)
      })

    const input = document.getElementsByTagName('input')[0]
    expect(input.getAttribute('id')).toBe(name)
    expect(input.getAttribute('name')).toBe(name)
    expect(input.getAttribute('type')).toBe(type)

    const labelOne = document.getElementsByTagName('label')[0]
    expect(labelOne.classList.contains(classes)).toBeTruthy()
    expect(labelOne.getAttribute('for')).toBe(name)
    expect(labelOne.textContent).toBe(label)
  })

});