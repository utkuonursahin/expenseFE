import {useExpenses} from "../../context/ExpensesContext";

const Overlay = () => {
  const {isFormClicked, setIsFormClicked, isDetailsClicked, setIsDetailsClicked} = useExpenses()
  const showOverlay = isFormClicked || isDetailsClicked
  const handleCloseModals = () => {
    /*There are two cases which we need to render Overlay. Expense Form and Details Modal
    * These two are dependent to two states, isFormClicked and isDetailsClicked but Overlay should work for both of them
    * So, if isFormClicked === false (means Details Modal on the page) work for isDetailsClicked state
    * otherwise if isFormClicked === true (means Expense Form on the page) work for isFormClicked state*/
    isFormClicked ? setIsFormClicked(prev => !prev) : setIsDetailsClicked(prev => !prev)
  }
  return (
      <div className={`overlay ${!showOverlay ? 'hidden' : ''}`} onClick={handleCloseModals}/>
  );
};

export default Overlay;
