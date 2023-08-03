import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // You can use this library to mock the Redux store
import Missions from '../components/Missions';

// Mock the useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the fetchMissions action
jest.mock('./actions', () => ({
  fetchMissions: jest.fn(),
}));

describe('Missions Component', () => {
  const mockStore = configureStore([]);
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        loading: false,
        missions: [
          {
            mission_id: 1,
            mission_name: 'Mission 1',
            description: 'Mission 1 description',
            reserved: false,
          },
          // Add more missions if needed for different test scenarios
        ],
        error: null,
      },
    });
  });

  it('should render "Loading" when loading is true', () => {
    store.getState().missions.loading = true;
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('should render "Error" when there is an error', () => {
    const errorMessage = 'Failed to fetch missions.';
    store.getState().missions.error = errorMessage;
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  it('should render the table with mission details when missions are loaded', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    // Wait for the component to finish rendering missions
    await waitFor(() => {
      // Check if the table header is rendered
      expect(screen.getByText('Mission')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByText('Status')).toBeInTheDocument();

      // Check if the mission details are rendered
      expect(screen.getByText('Mission 1')).toBeInTheDocument();
      expect(screen.getByText('Mission 1 description')).toBeInTheDocument();
    });
  });

  // Add more tests for other scenarios if needed
});
