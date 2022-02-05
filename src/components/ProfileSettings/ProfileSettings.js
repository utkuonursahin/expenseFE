import {useProfile} from "../../context/ProfileContext";

const ProfileSettings = () => {
  const {isProfileClicked, setIsProfileClicked} = useProfile()
  return (
      <div className={`${!isProfileClicked ? 'hidden-profile' : ''} profile-settings `}>
        <img src="./assets/image-avatar.jpg" alt="Profile avatar"/>
        <ul>
          <li>Change Avatar</li>
          <li>Change Password</li>
          <li>Logout</li>
          <li onClick={() => setIsProfileClicked(!isProfileClicked)}>Close</li>
        </ul>
      </div>
  );
};

export default ProfileSettings;
