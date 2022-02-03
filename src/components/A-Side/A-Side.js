const ASide = () => {
  return (
      <nav aria-label="primary navigation" className="dashboard__aside">
        <svg className="dashboard__aside--logo">
          <use href="./assets/sprite.svg#icon-logo"/>
        </svg>
        <span className="dashboard__aside--horizontal"/>
        <img src="./assets/image-avatar.jpg" alt="Image avatar" className="dashboard__aside--profile-link"/>
      </nav>
  );
};

export default ASide;
