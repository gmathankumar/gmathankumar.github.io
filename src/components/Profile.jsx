import React from 'react';

const Profile = () => {
  return (
    <header className="profile">
      <img 
        src="https://avatars.githubusercontent.com/u/31972774"
        alt="Profile"
        className="profile-image"
      />
      <div className="profile-content">
        <h1>Mathan Kumar</h1>
        <p>Quick introduction about yourself and what kind of offers/deals you share.</p>
      </div>
    </header>
  );
};
export default Profile;