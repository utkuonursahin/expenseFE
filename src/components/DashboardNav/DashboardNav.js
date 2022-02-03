import { useState } from "react";
import FilterPopup from "./FilterPopup/FilterPopup";
import { useExpenses } from "../../context/ExpensesContext";

const DashboardNav = () => {
  const [renderFilterPopup, setRenderFilterPopup] = useState(false)
  const { expenses, setIsClicked } = useExpenses()
  return (
    <nav aria-label="secondary navigation" className="dashboard__nav">
      <h3 className="dashboard__nav--heading heading-3">
        Expenses
        <span className="dashboard__nav--info">There are {expenses.length} total expenses</span>
      </h3>
      <div className="dashboard__nav--filter" tabIndex={1}>
        <button className="btn btn-categories" onClick={() => setRenderFilterPopup(prev => !prev)}>
          Categories
          <svg>
            <use href="./assets/sprite.svg#icon-keyboard_arrow_up" />
          </svg>
        </button>
        {renderFilterPopup && <FilterPopup />}
      </div>
      <button className="btn btn-add-expense" onClick={() => setIsClicked(prev => !prev)}>
        <svg>
          <use href="./assets/sprite.svg#icon-plus-circle" />
        </svg>
        <span>Add Expense</span>
      </button>
    </nav>
  );
};

export default DashboardNav;
