import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actiondataget';

const Missions = () => {
  const dispatch = useDispatch();
  const { loading, users, errors } = useSelector((state) => state);

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
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              {' '}
              <td>{user.mission_name}</td>
              {' '}
              <td>{user.description}</td>
              {' '}
              <td>{user.reserved}</td>
              {' '}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">Loading</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Missions;
