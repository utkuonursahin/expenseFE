import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileSettings from "../ProfileSettings/ProfileSettings";

const ASide = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false)

  return (
    <nav aria-label="primary navigation" className="aside">
      <svg className="aside--logo">
        <use href="./assets/sprite.svg#icon-logo" />
      </svg>
      <span className="dashboard__aside--horizontal" />
      <button className="btn btn-profile"><Link to="/profile">Profile</Link></button>
      <button className="btn btn-logout" onClick={() => { localStorage.removeItem("user"); window.location.reload() }}>Logout</button>
      <img src="./assets/image-avatar.jpg" alt="Profile avatar"
        className="aside--profile-link" onClick={() => setIsProfileClicked(!isProfileClicked)} />
      <ProfileSettings isProfileClicked={isProfileClicked} setIsProfileClicked={setIsProfileClicked} />
    </nav>
  );
};

export default ASide;
