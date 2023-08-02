// MyProfile.js
import React from 'react';
import { useSelector } from 'react-redux';
import Styles from '../styles/Mission.module.css';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const bookedMission = missions.filter((mission) => mission.reserved);

  return (
    <>
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
    </>
  );
};

export default MyProfile;
