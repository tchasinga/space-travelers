import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar Should render as expected', () => {
  it('should be similar with the snapshot', () => {
    const output = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });

  it('Redirect to the Rocket or Home page when the Rocket Link is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const rocket = getByText('Rocket');
    fireEvent.click(rocket);
    expect(window.location.pathname).toBe('/');
  });
});
