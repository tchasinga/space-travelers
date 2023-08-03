import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);
describe('MyRockets', () => {
  it('render Rockets Components', () => {
    render(<Missions />);
    expect(Missions).toMatchSnapshot();
  });
});
