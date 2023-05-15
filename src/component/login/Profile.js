import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  return (
    <>
      <div>welcome {auth.user}</div>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}

export default Profile;