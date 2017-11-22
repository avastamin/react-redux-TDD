import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import PropTypes from 'prop-types';
import actions from './actions/';


class App extends Component {

  componentDidMount(){
    this.props.fetchTodos();
  }

  render() {

    const { submitTodo, todos, deleteTodo } = this.props;
    return (
      <div className="App">
        <h2 className="App-title">Todo List</h2>
        <AddTodo submitTodo={submitTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    )
  }
}

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({

  fetchTodos: () => {
    dispatch(actions.fetchPostsWithRedux());
  },
  submitTodo: (text) => {
    const id = Math.random().toString(36).substr(-8);
    if (text) {

      dispatch(actions.submitTodo(id,text));
    }
  },

  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
