import React from 'react';
import Comments from '../../components/Comments';
import { render, fireEvent, waitFor } from "@testing-library/react";
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'


let store,
mockGetComments = jest.fn(),
mockCommentPost = jest.fn();
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


jest.mock('../../store/posts/operations', () => ({
  getComments: () => mockGetComments,
  commentPost: () => mockCommentPost
}))

beforeEach(() => {

  store =  mockStore({})
      
})



describe('Testing component Comments', () => {


  test('Smoke test of Comments.js', () => {
    render(
      <Provider store={store}>
        <Comments/>
      </ Provider>
    );
  })

  test('Check empty comments for Comments.js', () => {
 
    const {container} = render(
      <Provider store={store}>
        <Comments />
      </ Provider>
    );
    
    expect(container.querySelectorAll('.comments-comment').length).toEqual(0);
  })

  test('Check full comments for Comments.js', () => {

    const lastComments = [
      {
        id: 1,
        name: 'test1',
        comment: 'testmess1'
      },
      {
        id: 2,
        name: 'test2',
        comment: 'testmess2'
      }
    ];


    const {container} = render(
      <Provider store={store}>
        <Comments lastComments={lastComments} />
      </ Provider>
    );
    
    expect(container.querySelectorAll('.comments-comment').length).toEqual(2);
    expect(container.querySelectorAll('.comments-comment--name')[1].textContent).toBe(lastComments[1].name);  
    expect(container.querySelectorAll('.comments-comment--comment')[1].textContent).toBe(lastComments[1].comment);  
  })

  test('Check load comments for Comments.js', () => {

    const lastComments = [
      {
        id: 1,
        name: 'test1',
        comment: 'testmess1'
      }
    ];

    const {container} = render(
      <Provider store={store}>
        <Comments lastComments={lastComments} />
      </ Provider>
    );

    const loader = container.querySelector('.comments-loader');

    expect(loader).toBeInTheDocument();

    fireEvent.click(loader);

    expect(container.querySelector('.comments-loader')).not.toBeInTheDocument();
    expect(mockGetComments.mock.calls.length).toEqual(1);
  })

  test('Check sending comment for Comments.js', async () => {

    const {container} = render(
      <Provider store={store}>
        <Comments />
      </ Provider>
    );

    const add_comment = container.querySelector('input[name="add_comment"]');
    fireEvent.change(add_comment, { persist: jest.fn(), target: { value: 'test comment' } });

    fireEvent.click(container.querySelector('[type="submit"]'));

    await waitFor(() => {
      expect(container.querySelectorAll('.text-error').length).toBe(0);
      expect(mockCommentPost.mock.calls.length).toEqual(1);
    })

  })

});