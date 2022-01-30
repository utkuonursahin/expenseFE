import ThemeButton from "./ThemeButton/ThemeButton";

const ASide = () => {
  return (
      <nav aria-label="primary navigation" className="aside">
        <div className="aside__logo-container">
          <img src="/assets/logo.svg" alt="Invoice app logo"/>
        </div>
        <ThemeButton/>
        <span className="aside__horizontal"/>
        <img src="/assets/image-avatar.jpg" alt="Image avatar" className="aside__profile-link"/>
      </nav>
  );
};

export default ASide;
