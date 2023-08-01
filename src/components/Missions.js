import { useEffect } from 'react';
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
    <div className="getTable">
      <div className="desiTable">
        <h3>Misssion</h3>
        <h3>Description</h3>
        <h3>Status</h3>
      </div>
      <ul>
        {users.map((user) => (
          <div key={user.mission_id}>
            <p>{user.mission_name}</p>
            <p>{user.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
