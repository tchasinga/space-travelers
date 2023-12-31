import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchRockets } from '../redux/Rockets/rocketsSlice';

// Create a mock store
const mockStore = configureMockStore([thunk]);

describe('FetchRockets async action', () => {
  let store;

  beforeEach(() => {
    // Create a new store before each test
    store = mockStore({});
  });

  it('dispatches the correct actions when API call is successful', async () => {
    // Mock the fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([
        {
          id: '1', name: 'Falcon 1', description: 'The Falcon 1 was an expendable launch system', type: 'none', flickrimages: 'Falcon 1-Img', reserved: false,
        },
        {
          id: '2', name: 'Falcon 9', description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX', type: 'none', flickrimages: 'Falcon 9-Img', reserved: false,
        },
      ]),
    });

    // Define the expected actions that should be dispatched
    const expectedActions = [
      fetchRockets.pending().type,
      fetchRockets.fulfilled([
        {
          id: '1', name: 'Falcon 1', description: 'The Falcon 1 was an expendable launch system', type: 'none', flickrimages: 'Falcon 1-Img', reserved: false,
        },
        {
          id: '2', name: 'Falcon 9', description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX', type: 'none', flickrimages: 'Falcon 9-Img', reserved: false,
        },
      ]).type,
    ];

    // Dispatch the async action
    await store.dispatch(fetchRockets());

    // Get the dispatched actions from the store
    const dispatchedActions = store.getActions();

    // Verify that the dispatched actions match the expected actions
    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });
});
