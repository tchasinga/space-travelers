import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Mission.module.css';
import { joinMission, leaveMission } from '../redux/Missions/missionSlice';

const MissionDetails = ({
  missionName, description, id, reserved,
}) => {
  const myStatus = {
    backgroundColor: reserved ? '#379cf6' : '#36454F',
    display: 'block',
    width: '120px',
    border: '1px solid gray',
    color: 'white',
    alignSelf: 'center',
  };
  const styleRow = {
    backgroundColor: reserved ? 'white' : '#E5E4E2',
  };

  const dispatch = useDispatch();
  const [text, setText] = useState(reserved ? 'Active Member' : 'Not a Member');

  const handleJoin = (e) => {
    e.preventDefault();
    dispatch(joinMission(id));

    if (!reserved) {
      setText('Active Member');
    }
  };

  const handleLeave = (e) => {
    e.preventDefault();
    dispatch(leaveMission(id));
    if (reserved) {
      setText('Not a member');
    }
  };

  return (
    <tr style={styleRow}>
      <td className={styles.name}>{missionName}</td>
      <td className={styles.description}>{description}</td>
      <td>
        <span style={myStatus}>
          {' '}
          {text}
        </span>
      </td>
      <td>
        {!reserved && (
          <button type="button" className={styles.joinBtn} onClick={handleJoin}>
            Join Mission
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className={styles.leaveBtn}
            onClick={handleLeave}
          >
            Leave Mission
          </button>
        )}
      </td>
    </tr>
  );
};

MissionDetails.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionDetails;
