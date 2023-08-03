import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyProfile from '../components/MyProfile';
import store from '../redux/store';

describe('Testing Profile page', () => {
  it('My Profile Page should be rendered correctly', () => {
    const rocketsPage = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(rocketsPage).toMatchSnapshot();
  });
});
