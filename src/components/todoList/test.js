/* global describe, it, expect, jest */

import React from 'react';
import Enzyme, { shallow }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TodoList from '.';


describe('TodoList component', () => {

  const deleteMock = jest.fn();

  const props = {
      todos: [
        {
          id: 'b1yyu6mx',
          text: 'A todo',
        },
      ],
      deleteTodo: deleteMock,
    };

    const { todos, deleteTodo } = props;

  const component = shallow(<TodoList todos={todos} deleteTodo= {deleteTodo} />);

  it('Should render successfully', () => {
      expect(component.exists()).toEqual(true);
    });

    it('Should display a todo when passed in as a prop', () =>{
      expect(component.find('.todo-text').text()).toEqual(todos[0].text);
    });

    it('Should call the deleteTodo function when Delete button is clicked', () =>{
      expect(deleteMock.mock.calls.length).toEqual(0);
      component.find('.todo-delete').simulate('click');
      expect(deleteMock.mock.calls.length).toEqual(1);
    });
});
