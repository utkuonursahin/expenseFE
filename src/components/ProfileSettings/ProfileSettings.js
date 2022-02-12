import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const ProfileSettings = ({ isProfileClicked, setIsProfileClicked }) => {
  const location = useLocation();
  const { user } = useAuth();
  const { pathname } = location
  return (
    <div className={`${!isProfileClicked ? 'hidden-profile' : ''} profile-settings `}>
      <img src={`https://www.expendid.site/uploads/users/${user.profile_image}`} alt="Profile avatar" />
      <ul>
        <li><Link to="/" className={`${pathname === "/" ? "active" : ""}`}>Dashboard</Link></li>
        <li><Link to="/profile" className={`${pathname === "/profile" ? "active" : ""}`}>Profile</Link></li>
        <li onClick={() => { localStorage.removeItem("user"); window.location.reload() }}>Logout</li>
        <li onClick={() => setIsProfileClicked(!isProfileClicked)}>Close</li>
      </ul>
    </div>
  );
};

export default ProfileSettings;