import {
  FETCH_MISSIONS_REQUEST,
  FETCH_MISSIONS_SUCCESS,
  FETCH_MISSIONS_FAILURE,
} from './actiondataget';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MISSIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        missions: action.payload,
        error: '',
      };
    case FETCH_MISSIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        missions: [],
      };
    default:
      return state;
  }
};

export default missionReducer;
