import { useState } from 'react';
import { useExpenses } from "../../context/ExpensesContext";
import Items from './Items/Items';
import { random } from "../../helper"

const DashboardForm = () => {
  const { isClicked } = useExpenses()
  const [itemsCount, setItemsCount] = useState([random()]);
  return (
      <form className={`dashboard__form ${isClicked ? 'hidden-form' : ""}`}>
        <div className="dashboard__form-details">
          <h4 className="heading-4">Expense Details</h4>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Category" />
          <textarea placeholder="Description" />
        </div>

        <div className="dashboard__form-date">
          <h4 className="heading-4 ">Expense Date</h4>
          <input type="date" placeholder="Expense date" id="expense-date" />
        </div>

        <div className="dashboard__form-items">
          <h4 className="heading-4">Expense Items</h4>
          <button type='button' className="btn btn-add-item" onClick={() => setItemsCount(prev => [...prev, random()])}>Add item</button>
          {itemsCount.map(index => (
              <Items key={index} index={index} setItemsCount={setItemsCount} />
          ))}
        </div>

        <button type='submit' className="btn btn-create-expense">Create Expense</button>
      </form>
  );
};
export default DashboardForm;