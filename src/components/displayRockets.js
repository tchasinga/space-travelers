import React from 'react';

const Rocketcard = ({
  keyID, rocketName, rocketdescrption, rocketImage,
}) => (
  <div className="rocket-card" id={keyID}>
    <img className="rocketImg" src={rocketImage} alt="rocket-img" />
    <div className="desc-section">
      <h3>{rocketName}</h3>
      <p>{rocketdescrption}</p>
      <button className="Rocket-reserve-Btn" type="button">Reserve Rockets</button>
    </div>
  </div>
);

export default Rocketcard;
