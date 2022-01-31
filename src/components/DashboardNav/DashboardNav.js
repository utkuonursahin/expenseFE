import {useEffect, useState} from "react";
import FilterPopup from "./FilterPopup/FilterPopup";
import {useExpenses} from "../../context/ExpensesContext";

const DashboardNav = () => {
  const [renderFilterPopup, setRenderFilterPopup] = useState(false)
  const {setInvoices, setIsClicked} = useExpenses()

  useEffect(() => !renderFilterPopup && setInvoices(null),[renderFilterPopup])

  return (
      <nav aria-label="secondary navigation" className="dashboard__nav">
        <h3 className="dashboard__nav--heading heading-3">
          Expenses
          <span className="dashboard__nav--info">There are 6 total expenses</span>
        </h3>

        <button className="btn btn-filter" onClick={() => setRenderFilterPopup(prev => !prev)}>
          {renderFilterPopup ? 'Close Filter' : 'Filter by status'}
          <img src="/assets/icon-arrow-down.svg" alt="Filter button icon"/>
        </button>
        <button className="btn btn-add-expense" onClick={() => setIsClicked(prev => !prev)}>
          <div>
            <img src="/assets/icon-plus.svg" alt="Icon plus"/>
          </div>
          <span>Add Expense</span>
        </button>
        {renderFilterPopup && <FilterPopup/>}
      </nav>
  );
};

export default DashboardNav;
