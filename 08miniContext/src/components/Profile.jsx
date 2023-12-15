import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <p>please login</p>;

  return <div>Welcome {user.username}</div>;
};

export default Profile;
