import axios from 'axios';

// action types
export const FETCH_USERS_REQUEST = 'GET_MISSIONS';
export const FETCH_USERS_SUCCESS = 'GET_MISSIONS_SUCCESS';
export const FETCH_USERS_FAILURE = 'GET_MISSIONS_FAILURE';

export const fetchUserRequest = (users) => ({
  type: FETCH_USERS_REQUEST,
  payload: users,
});

export const fetchUserSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

// action of fetching data

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUserRequest());
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      const users = response.data;
      dispatch(fetchUserSuccess(users));
    })
    .catch((error) => {
      dispatch(fetchUserFailure(error.message));
    });
};
