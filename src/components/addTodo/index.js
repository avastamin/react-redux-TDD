
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const AddTodo = ({ submitTodo }) => {
  let input;

  return (
    <div className="form-wrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >

        <input
          className="todo-input"
          ref={(element) => {
            input = element;
          }}
        />

        <button type="submit" className="todo-submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};


AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};

export default AddTodo;
