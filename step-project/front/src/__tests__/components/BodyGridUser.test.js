import React from 'react';
import BodyGridUser from '../../components/BodyGridUser';
import { render, waitFor } from "@testing-library/react";
import axios from 'axios';



jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}))


const data = [];


describe('Testing component BodyGridUser', () => {

  beforeEach(() => {
    axios.post = jest.fn().mockReturnValueOnce(data);
  })


  test('Smoke test of BodyGridUser.js', () => {
    render(<BodyGridUser/>);
  })

  test('Check loader for BodyGridUser.js', () => {

    
    const {container} = render(<BodyGridUser />);
    expect(container.querySelector('.loader')).toBeInTheDocument();
    

  })

  test('Check empty posts for BodyGridUser.js', async () => {
    const data = {
      data: {
        posts: []
      }
    };
    
    let BodyGridUserContainer = null
    axios.post = jest.fn().mockReturnValueOnce(data);
    await waitFor(() => {
      const {container} = render(<BodyGridUser />);
      BodyGridUserContainer = container;

    });

    expect(BodyGridUserContainer.querySelector('.empty')).toBeInTheDocument();
   
  })

  test('Check full posts for BodyGridUser.js', async () => {
    const data = {
      data: {
        posts: [
          {
            _id: 1,
            likes: 2,
            comments: 3,
            image: '',
          },
          {
            _id: 2,
            likes: 45,
            comments: 12,
            image: '',
          }
        ]
      }
    };
    
    let BodyGridUserContainer = null
    axios.post = jest.fn().mockReturnValueOnce(data);
    await waitFor(() => {
      const {container} = render(<BodyGridUser />);
      BodyGridUserContainer = container;

    });

    expect(BodyGridUserContainer.querySelectorAll('img').length).toEqual(2);
    expect(BodyGridUserContainer).toHaveTextContent('45');
    expect(BodyGridUserContainer).toHaveTextContent('12');
  })

});