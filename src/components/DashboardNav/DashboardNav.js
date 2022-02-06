import { useState } from "react";
import CategoriesPopup from "../CategoriesPopup/CategoriesPopup";
import { useExpenses } from "../../context/ExpensesContext";
import { useCategory } from '../../context/CategoryContext';

const DashboardNav = () => {
  const [renderCategories, setRenderCategories] = useState(false)
  const { expenses, setIsFormClicked } = useExpenses()
  const { currentCategory } = useCategory();
  return (
    <nav aria-label="secondary navigation" className="dashboard__nav">
      <h3 className="dashboard__nav--heading heading-3">
        Expenses
        <span className="dashboard__nav--info">There are {expenses.length} total expenses</span>
      </h3>
      <div className="dashboard__nav--filter" tabIndex={1}>
        <button type="button" className="btn btn-categories-nav" onClick={() => setRenderCategories(prev => !prev)}>
          {currentCategory ? currentCategory.title : "Categories"}
          <svg>
            <use href="./assets/sprite.svg#icon-arrow-up" />
          </svg>
        </button>
        {renderCategories && <CategoriesPopup setVisibility={setRenderCategories} />}
      </div>
      <button className="btn btn-add-expense" onClick={() => setIsFormClicked(prev => !prev)}>
        <svg>
          <use href="./assets/sprite.svg#icon-plus" />
        </svg>
        <span>Add Expense</span>
      </button>
    </nav>
  );
};

export default DashboardNav;
