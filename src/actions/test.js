import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import actions from '.';
import types from '../constants/';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions', () => {
  const todoText = 'A todo';
  const id =  Math.random().toString(36).substr(-8);

  it('Should create an action to add a todo', () => {
    const expectedAction = {
      type: types.SUBMIT_TODO,
      id:  id,
      text: todoText,
    };

    expect(actions.submitTodo(id,todoText)).toEqual(expectedAction);
  });

  it('Should create an action to delete a todo', () => {
    const expectedAction = {
      type: types.DELETE_TODO,
      id: 1
    };
  expect(actions.deleteTodo(1)).toEqual(expectedAction);
  });
});


describe('async actions', () => {

  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  });

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock
      .getOnce('http://localhost:5001/todos', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } })


    const expectedActions = [
      { type: types.FETCH_REQUEST },
      { type: types.FETCH_SUCCESS, payload: ['do something'] }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchPostsWithRedux()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

})
