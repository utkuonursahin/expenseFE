import ThemeButton from "./ThemeButton/ThemeButton";
import ProfileLink from "./ProfileLink/ProfileLink";

const ASide = () => {
  return (
      <nav aria-label="primary navigation" className="aside">
        <div className="aside__logo-container">
          <img src="/assets/logo.svg" alt="Invoice app logo"/>
        </div>
        <ThemeButton/>
        <ProfileLink/>
      </nav>
  );
};

export default ASide;
