import types from '../constants/'
import * as todoAPI from '../utils/todosAPI';

const actions = {

  fetchPostsRequest() {
    return {
    type: "FETCH_REQUEST"
    }
  },
   fetchPostsSuccess(payload) {
    return {
      type: "FETCH_SUCCESS",
      payload
    }
  },
  fetchPostsError() {
    return {
      type: "FETCH_ERROR"
    }
  },

  submitTodo(id,text) {
    return {
      type: types.SUBMIT_TODO,
      id,
      text,
    };
  },
  deleteTodo(id) {
    return {
      type: types.DELETE_TODO,
      id: id
    }
  },
  fetchPostsWithRedux() {
  	return (dispatch) => {
    	dispatch(this.fetchPostsRequest());
      return todoAPI.getAll().then((response) =>{
        dispatch(this.fetchPostsSuccess(response))
        console.log(response);
    }).catch(error => {
      dispatch(this.fetchPostsError())
      console.log(error);
    });
  }
}
};

export default actions;
