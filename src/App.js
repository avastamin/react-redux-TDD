import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import PropTypes from 'prop-types';
import actions from './actions/';

const App = ({ submitTodo, todos }) =>(
  <div>
    <h2>Todo List</h2>
    <AddTodo submitTodo={submitTodo} />
    <TodoList todos={todos} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
