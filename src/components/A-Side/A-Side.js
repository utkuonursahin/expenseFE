import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import { useAuth } from '../../context/AuthContext';

const ASide = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false)
  const { user } = useAuth();
  const location = useLocation();
  const { pathname } = location

  return (
    <nav aria-label="primary navigation" className="aside">
      <svg className="aside--logo">
        <use href="./assets/sprite.svg#icon-logo" />
      </svg>
      <div className='bottom'>
        <Link to="/profile" className={`${pathname === "/profile" ? "active" : ""}`}>Profile</Link>
        <Link to="/" className={`${pathname === "/" ? "active" : ""}`}>Dashboard</Link>
        <button className="btn btn-logout" onClick={() => { localStorage.removeItem("user"); window.location.reload() }}>Logout</button>
      </div>
      <img src={`http://18.192.215.189/uploads/users/${user.profile_image}`} alt="Profile avatar"
        className="aside--profile-link" onClick={() => setIsProfileClicked(!isProfileClicked)} />
      <ProfileSettings isProfileClicked={isProfileClicked} setIsProfileClicked={setIsProfileClicked} />
    </nav>
  );
};

export default ASide;
