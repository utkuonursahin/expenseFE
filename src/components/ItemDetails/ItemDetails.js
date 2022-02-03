import {useExpenses} from "../../context/ExpensesContext";

const ItemDetails = () => {
  const {isDetailsClicked} = useExpenses()
  return (
      <div className={`item-details ${!isDetailsClicked ? 'hidden' : ''}`}>

      </div>
  );
};

export default ItemDetails;
