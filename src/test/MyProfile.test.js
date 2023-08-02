// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import configureStore from 'redux-mock-store';
// import MyProfile from '../components/MyProfile';

// const middlewares = []

// const mockStore = configureStore(middlewares)
// describe('Profile Component', () => {
//   let store;

//   beforeEach(() => {
//     store = mockStore({
//       rockets: {
//         allRockets: [
//           {
//             id: 'rocket1',
//             rocket_name: 'Rocket 1',
//             reserved: true,
//           },
//           {
//             id: 'rocket2',
//             rocket_name: 'Rocket 2',
//             reserved: true,
//           },
//         ],
//       },
//       missions: {
//         missions: [
//           {
//             id: '1',
//             name: 'mission 1',
//             description: 'mission 1 desc',
//             reserved: true,
//           },
//           {
//             id: '2',
//             name: 'mission 2',
//             description: 'mission 2 desc',
//             reserved: true,
//           },
//         ],
//       },
//     });
//   });

//   test('renders Profile component correctly', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <MyProfile />
//       </Provider>,
//     );
//     expect(getByText('My Rockets')).toBeInTheDocument();
//   });

//   it('Matches the snapshot', () => {
//     const { container } = render(
//       <Provider store={store}>
//         <MyProfile />
//       </Provider>,
//     );

//     expect(container).toMatchSnapshot();
//   });
// });
