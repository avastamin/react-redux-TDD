import types from '../constants/';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit todo', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('Delete a Todo', () => {

    it('Should return the correct state after Delete', () =>{
      const action = {
        type: types.DELETE_TODO,
        id: 1
      };
      
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };


      const expectedState = {
          todos: [],
        };
      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
