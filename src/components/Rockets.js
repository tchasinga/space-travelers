import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, setReserve } from '../redux/Rockets/rocketsSlice';

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
        <div key={rocket.id} className="rocket-card" id={rocket.id}>
          <img className="rocketImg" src={rocket.flickr_images} alt="rocket-img" />
          <div className="desc-section">
            <h3>{rocket.rocket_name}</h3>
            <p>
              {rocket.reserved ? <span className="reserved-span">Reserved</span> : ''}
              {' '}
              {rocket.description}
            </p>
            {!rocket.reserved && <button type="button" className="reserve-rocket-btn" onClick={() => { dispatch(setReserve({ id: rocket.id, reserved: !rocket.reserved })); }}>Reserve Rocket</button> }
            {rocket.reserved && <button type="button" className="cancel-reserve-btn" onClick={() => { dispatch(setReserve({ id: rocket.id, reserved: !rocket.reserved })); }}>Cancel Reservation</button> }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
