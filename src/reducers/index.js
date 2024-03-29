import types from '../constants/';

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return state;
    case types.FETCH_SUCCESS:
      return {...state, todos: action.payload};
    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          }
        ],
      }
    case types.DELETE_TODO:
        return {
          ...state,
          todos: [
            ...state.todos.filter( todo =>(todo.id !== action.id))
          ],
        }
    default:
      return state;
  }

}

export default reducer;
