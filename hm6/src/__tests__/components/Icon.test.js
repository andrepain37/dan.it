import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Icon from '../../components/Icon';



describe('Testing component Icon', () => {
 

    test('Smoke test Icon.js', () => {

        render(<Icon/>);
    })

    test('Test render props for Icon.js', () => {

        const mockCallBack = jest.fn();

        const props = {
            type: 'like',
            classes: 'test',
            onClick: mockCallBack
        }

        const shallowIcon = shallow(<Icon {...props} />);
        expect(shallowIcon.html()).not.toBeNull();
        expect(shallowIcon.hasClass('test')).toBeTruthy();
        shallowIcon.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
        
    })

    test('Test empty props for Icon.js', () => {

        const shallowIcon = shallow(<Icon />);
        expect(shallowIcon.html()).toBeNull();
        
    })


});