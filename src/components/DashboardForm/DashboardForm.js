import { useState } from 'react';
import { useExpenses } from "../../context/ExpensesContext";
import { random } from "../../helper"
import Items from './Items/Items';

const DashboardForm = () => {
  const { isClicked, setIsClicked } = useExpenses()
  const [itemsCount, setItemsCount] = useState([random()]);
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
      <form className={`dashboard__form ${!isClicked ? 'hidden-form' : ""}`} onSubmit={handleSubmit}>
        <div className="dashboard__form-details">
          <h4 className="heading-4" >Expense Details</h4>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Category" />
          <textarea placeholder="Description"/>
        </div>

        <div className="dashboard__form-date">
          <h4 className="heading-4">Expense Date</h4>
          <input type="date" placeholder="Expense date" id="expense-date" />
        </div>

        <div className="dashboard__form-items">
          <h4 className="heading-4">Expense Items</h4>
          <button type='button' className="btn btn-add-item" onClick={() => setItemsCount(prev => [...prev, random()])}>Add item</button>
          <div className="dashboard__form-items-container">
            {itemsCount.map(index => (<Items key={index} index={index} setItemsCount={setItemsCount} />))}
          </div>
        </div>

        <div className="dashboard__form-buttons">
          <button type='submit' className="btn btn-create-expense">Create Expense</button>
          <button type='submit' className="btn btn-close-form" onClick={() => setIsClicked(!isClicked)}>Close Form</button>
        </div>

      </form>
  );
};
export default DashboardForm;