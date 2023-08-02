import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './datagetmissionreducers';
import rocketReducer from './Rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: rootReducer,
    rockets: rocketReducer,
  },
});

export default store;
