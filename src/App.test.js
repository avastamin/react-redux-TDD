import React from 'react';
import Enzyme, { shallow }  from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const mockFunction = jest.fn();
  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
    />,
  );
  expect(component.exists()).toEqual(true);
});
