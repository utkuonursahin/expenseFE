import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import ProfileSettings from "../ProfileSettings/ProfileSettings";

const ASide = () => {
  const navigate = useNavigate();
  const [isProfileClicked, setIsProfileClicked] = useState(false)
  return (
    <nav aria-label="primary navigation" className="aside">
      <svg className="aside--logo">
        <use href="./assets/sprite.svg#icon-logo" />
      </svg>
      <span className="aside--horizontal" />
      <button className="btn btn-link"><Link to="/profile">Profile</Link></button>
      <button className="btn btn-link"><Link to="/dashboard">Dashboard</Link></button>
      <button className="btn btn-logout" onClick={() => { localStorage.removeItem("user"); navigate("/") }}>Logout</button>
      <img src="./assets/image-avatar.jpg" alt="Profile avatar"
        className="aside--profile-link" onClick={() => setIsProfileClicked(!isProfileClicked)}/>
      <ProfileSettings isProfileClicked={isProfileClicked} setIsProfileClicked={setIsProfileClicked}/>
    </nav>
  );
};

export default ASide;
