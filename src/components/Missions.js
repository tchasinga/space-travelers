// Missions.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/Missions/missionSlice';
import MissionDetails from './MissionDetails';

const Missions = () => {
  const dispatch = useDispatch();
  const { loading, missions, error } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return (
      <h1>
        Error:
        {error}
      </h1>
    );
  }

  return (
    <table className="missionTable">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionDetails
            key={mission.mission_id}
            missionName={mission.mission_name}
            description={mission.description}
            id={mission.mission_id}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
