// MyProfile.js
import React from 'react';
import { useSelector } from 'react-redux';
import Styles from '../styles/Mission.module.css';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const bookedMission = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <>
      <div className={styles.missionsRockets}>
        <div className={styles.missions}>
          <h2>My Missions</h2>
          <ul>
            {bookedMission.length ? (
              bookedMission.map((mission) => (
                <li key={mission.mission_id} className={Styles.profileRow}>
                  {mission.mission_name}
                </li>
              ))
            ) : (
              <p>There are no booked missions</p>
            )}
          </ul>
        </div>

        <div className={styles.rockets}>
          <h2>My Rockets</h2>
          <ul>
            {reservedRockets.length ? (
              reservedRockets.map((rocket) => (
                <li key={rocket.id} className={Styles.profileRow}>
                  {rocket.rocket_name}
                </li>
              ))
            ) : (
              <p>There are no booked reservations</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
