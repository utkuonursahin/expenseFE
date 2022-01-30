import {useEffect, useState} from "react";
import FilterPopup from "./FilterPopup/FilterPopup";
import {useInvoice} from "../../context/ExpensesContext";

const DashboardNav = () => {
  const [renderFilterPopup, setRenderFilterPopup] = useState(false)
  const {setInvoices} = useInvoice()

  useEffect(() => !renderFilterPopup && setInvoices(),[renderFilterPopup])

  return (
      <nav aria-label="secondary navigation" className="home__nav">
        <h1 className="home__nav--heading heading-1">Invoices</h1>
        <span className="home__nav--info">There are 6 total invoices</span>
        <button className="btn btn-filter" onClick={() => setRenderFilterPopup(prev => !prev)}>
          Filter by status
          <img src="/assets/icon-arrow-down.svg" alt="Filter button icon"/>
        </button>
        <button className="btn btn-new-invoice">
          <img src="/assets/icon-plus.svg" alt="Icon plus"/>
          New Invoice
        </button>
        {renderFilterPopup && <FilterPopup/>}
      </nav>
  );
};

export default DashboardNav;
