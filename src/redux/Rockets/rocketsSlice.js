import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketURL = 'https://api.spacexdata.com/v3/rockets/';

const initialState = {
  rockets: [],
  isLoading: false,
  error: undefined,
};

// Action creator that fetches rockets
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (thunkAPI) => {
  try {
    // Fetch API
    const response = await axios.get(rocketURL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`There was an error: ${error}`);
  }
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const rocketsArray = action.payload;
        state.isLoading = false;
        state.rockets = rocketsArray;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default rocketSlice.reducer;
