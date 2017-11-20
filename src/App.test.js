import React from 'react';
import Enzyme, { shallow }  from 'enzyme';
import App from './App';
import { initialState } from './reducers/';
import store from './store';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const mockFunction = jest.fn();
  const component = shallow(
    <Provider store={ store }>
      <App />
    </Provider>,
  );
  expect(component.exists()).toEqual(true);
});
