import {useProfile} from "../../context/ProfileContext";
import ProfileSettings from "../ProfileSettings/ProfileSettings";

const ASide = () => {
  const {isProfileClicked, setIsProfileClicked} = useProfile()
  return (
      <nav aria-label="primary navigation" className="dashboard__aside">
        <svg className="dashboard__aside--logo">
          <use href="./assets/sprite.svg#icon-logo"/>
        </svg>
        <span className="dashboard__aside--horizontal"/>
        <img src="./assets/image-avatar.jpg" alt="Profile avatar"
             className="dashboard__aside--profile-link"
             onClick={() => setIsProfileClicked(!isProfileClicked)}
        />
        <ProfileSettings/>
      </nav>
  );
};

export default ASide;
