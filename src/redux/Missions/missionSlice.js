// missionSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  loading: false,
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
    },
    leaveMission: (state, action) => {
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.loading = false;
      state.missions = action.payload;
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
