import {useInvoice} from "../../../context/ExpensesContext";
const FilterPopup = () => {
  const {setInvoices} = useInvoice();
  const handleClick = (e) => {
    if(e.target.tagName !== 'INPUT') return
    setInvoices()
  }
  return (
      <form action="#" className="home__nav--filter" onClick={handleClick}>
        <input type="radio" id="draft" value="draft" name="radio-input"/>
        <label htmlFor="draft">
          <span>Draft</span>
        </label>

        <input type="radio" id="pending" value="pending" name="radio-input"/>
        <label htmlFor="pending">
          <span>Pending</span>
        </label>

        <input type="radio" id="paid" value="paid" name="radio-input"/>
        <label htmlFor="paid">
          <span>Paid</span>
        </label>
      </form>
  );
};

export default FilterPopup;
