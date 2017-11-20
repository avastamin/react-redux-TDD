import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/addTodo';
import PropTypes from 'prop-types';
import actions from './actions/';

const App = ({ submitTodo }) =>(
  <div>
    <h2>Todo List</h2>
    <AddTodo submitTodo={submitTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
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
