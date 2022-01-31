import {useExpenses} from "../../../context/ExpensesContext";
const FilterPopup = () => {
  const {setInvoices} = useExpenses();
  const handleClick = (e) => {
    if(e.target.tagName !== 'INPUT') return
    setInvoices()
  }
  return (
      <form action="#" className="dashboard__nav--filter" onClick={handleClick}>
        <label htmlFor="draft">
          <input type="radio" id="draft" value="draft" name="radio-input"/>
          <span className="checkbox"/>
          <span>Draft</span>
        </label>

        <label htmlFor="pending">
          <input type="radio" id="pending" value="pending" name="radio-input"/>
          <span className="checkbox"/>
          <span>Pending</span>
        </label>

        <label htmlFor="paid">
          <input type="radio" id="paid" value="paid" name="radio-input"/>
          <span className="checkbox"/>
          <span>Paid</span>
        </label>
      </form>
  );
};

export default FilterPopup;
