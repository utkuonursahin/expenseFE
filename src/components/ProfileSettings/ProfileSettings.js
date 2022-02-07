import {Link} from "react-router-dom";

const ProfileSettings = ({isProfileClicked, setIsProfileClicked}) => {
  return (
      <div className={`${!isProfileClicked ? 'hidden-profile' : ''} profile-settings `}>
        <img src="./assets/image-avatar.jpg" alt="Profile avatar"/>
        <ul>
          <li>Change Avatar</li>
          <li>Change Password</li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li>Logout</li>
          <li onClick={() => setIsProfileClicked(!isProfileClicked)}>Close</li>
        </ul>
      </div>
  );
};

export default ProfileSettings;