import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/Rockets/rocketsSlice';
import Rocketcard from './displayRockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const loading = useSelector((state) => state.rockets.isloading);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="rocket-parent">
      {rockets.map((rocket) => (
        <Rocketcard
          key={rocket.id}
          keyID={rocket.id}
          rocketName={rocket.rocket_name}
          rocketdescrption={rocket.description}
          rocketImage={rocket.flickr_images}
        />
      ))}
    </div>
  );
};

export default Rockets;
