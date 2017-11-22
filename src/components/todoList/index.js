import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const TodoList = ({todos, deleteTodo}) => {
  const todoItems = todos.map(todo => (
    <li className="Listitem" key={todo.id}>
      <span className="todo-text">{todo.text}</span>
      <span className="todo-delete" onClick={() => deleteTodo(todo.id)} >x</span>
    </li>
    ));
  return (
      <ul className="Unorderlist">
        {todoItems}
      </ul>
    );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
