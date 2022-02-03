import {useExpenses} from "../../context/ExpensesContext";

const Overlay = () => {
  const {isClicked, setIsClicked} = useExpenses()
  return (
      <div className={`overlay ${!isClicked ? 'hidden' : ''}`} onClick={() => setIsClicked(!isClicked)}/>
  );
};

export default Overlay;
