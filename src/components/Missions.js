import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actiondataget';
import MissionDetails from './MissionDetails';

const Missions = () => {
  const dispatch = useDispatch();
  const { loading, users, errors } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (errors) {
    return (
      <h1>
        Error:
        {errors}
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
        {users.map((user) => (
          <MissionDetails
            key={user.id} // Moved the 'key' prop inside MissionDetails
            missionName={user.mission_name} // Pass props to MissionDetails component
            description={user.description}
            reserved={user.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
