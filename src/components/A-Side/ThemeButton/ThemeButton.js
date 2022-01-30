import {useState} from "react";

const ThemeButton = () => {
  const [theme, setTheme] = useState(false)
  //move theme state to a context
  return (
      <button onClick={() => setTheme(prev => !prev)} className="aside__theme-button">
        <img src={`/assets/icon-${theme ? 'moon' : 'sun'}.svg`} alt="Icon sun"/>
      </button>
  );
};

export default ThemeButton;
