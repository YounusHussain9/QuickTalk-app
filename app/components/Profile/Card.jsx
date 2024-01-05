import React from 'react';
import './UserProfile.css'; // Assume your CSS is in this file
import Image from 'next/image';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-photo-container">
        {/* <img src="profile-pic-url.jpg" alt="Profile" className="user-photo" /> */}
        <Image src="/profile-pic-url.jpg" alt="Profile"  width={60} height={60}></Image>  
      </div>
      <div className="user-header">
        <div className="user-verification">
          {/* <img src="verified-icon-url.png" alt="Verified" /> */}
        </div>
      </div>
      <div className="user-info">
        <h1 className="user-name">Colleen Larme</h1>
        <p className="user-location">Coppell, Virginia</p>
        <p className="user-distance">0.14 Miles Away</p>
      </div>
      <div className="user-tags">
        <span className="user-tag">#Education</span>
        <span className="user-tag">#Experience</span>
      </div>
      <div>
        <hr />
      </div>
      <div className="user-license">
        {/* <img src="license-icon-url.jpg" alt="License" className="license-icon" /> */}
        <span className="license-text">Door Supervisor Licence</span>
      </div>
      <div className="user-activity">
        <span className="activity-status">Active more than 10 days ago</span>
      </div>
    </div>
  );
};

export default UserProfile;
