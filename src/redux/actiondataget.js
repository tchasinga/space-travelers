import axios from 'axios';

export const FETCH_MISSIONS_REQUEST = 'FETCH_MISSIONS_REQUEST';
export const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
export const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE';

export const fetchMissionsRequest = () => ({
  type: FETCH_MISSIONS_REQUEST,
});

export const fetchMissionsSuccess = (missions) => ({
  type: FETCH_MISSIONS_SUCCESS,
  payload: missions,
});

export const fetchMissionsFailure = (error) => ({
  type: FETCH_MISSIONS_FAILURE,
  payload: error,
});

export const fetchMissions = () => (dispatch) => {
  dispatch(fetchMissionsRequest());
  axios
    .get('https://api.spacexdata.com/v3/missions')
    .then((response) => {
      const missions = response.data;
      dispatch(fetchMissionsSuccess(missions));
    })
    .catch((error) => {
      dispatch(fetchMissionsFailure(error.message));
    });
};
