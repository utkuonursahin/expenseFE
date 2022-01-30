import {useEffect, useState} from "react";
import FilterPopup from "./FilterPopup/FilterPopup";
import {useInvoice} from "../../context/ExpensesContext";

const DashboardNav = () => {
  const [renderFilterPopup, setRenderFilterPopup] = useState(false)
  const {setInvoices} = useInvoice()

  useEffect(() => !renderFilterPopup && setInvoices(),[renderFilterPopup])

  return (
      <nav aria-label="secondary navigation" className="dashboard__nav">
        <h3 className="dashboard__nav--heading heading-3">
          Invoices
          <span className="dashboard__nav--info">There are 6 total invoices</span>
        </h3>

        <button className="btn btn-filter" onClick={() => setRenderFilterPopup(prev => !prev)}>
          Filter by status
          <img src="/assets/icon-arrow-down.svg" alt="Filter button icon"/>
        </button>
        <button className="btn btn-add-expense">
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
