import {useState} from 'react'
const ASide = () => {
  const [theme, setTheme] = useState(false)
  return (
      <nav aria-label="primary navigation" className="dashboard__aside">
        <svg className="dashboard__aside--logo">
          <use href="./assets/sprite.svg#icon-logo"/>
        </svg>
        <svg className="dashboard__aside--theme" onClick={() => setTheme(!theme)}>
          <use href={`./assets/sprite.svg#icon-icon-${theme ? 'moon' : 'sun'}`}/>
        </svg>
        <span className="dashboard__aside--horizontal"/>
        <img src="./assets/image-avatar.jpg" alt="Image avatar" className="dashboard__aside--profile-link"/>
      </nav>
  );
};

export default ASide;
