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
    const selectRocket = response.data.map((item) => ({
      id: item.id,
      rocket_name: item.rocket_name,
      description: item.description,
      flickr_images: item.flickr_images,
      reserved: false,
    }));
    return selectRocket;
  } catch (error) {
    return thunkAPI.rejectWithValue(`There was an error: ${error}`);
  }
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setReserve: (state, action) => {
      const { id, reserved } = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === id);
      if (rocket) {
        rocket.reserved = reserved;
      }
    },
  },
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

export const { setReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
