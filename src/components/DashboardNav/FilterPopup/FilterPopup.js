import {useInvoice} from "../../../context/ExpensesContext";
const FilterPopup = () => {
  const {setInvoices} = useInvoice();
  const handleClick = (e) => {
    if(e.target.tagName !== 'INPUT') return
    setInvoices()
  }
  return (
      <form action="#" className="dashboard__nav--filter" onClick={handleClick}>
        <label htmlFor="draft">
          <input type="radio" id="draft" value="draft" name="radio-input"/>
          <span>Draft</span>
        </label>

        <label htmlFor="pending">
          <input type="radio" id="pending" value="pending" name="radio-input"/>
          <span>Pending</span>
        </label>

        <label htmlFor="paid">
          <input type="radio" id="paid" value="paid" name="radio-input"/>
          <span>Paid</span>
        </label>
      </form>
  );
};

export default FilterPopup;
