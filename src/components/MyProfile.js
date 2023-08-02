import { useSelector } from 'react-redux';

const Myprofile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reserved = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <table className="profile-table">
      <tr>
        <th>My Missions</th>
        <th>My Rockets</th>
      </tr>
      <tr className="data-row">
        <td> - </td>
        <td>{ reserved ? reserved.map((rocket) => (<p key={rocket.id} className="rocket-data-profile">{rocket.rocket_name}</p>)) : ''}</td>
      </tr>
    </table>
  );
};

export default Myprofile;
