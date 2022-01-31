import {useExpenses} from "../../context/ExpensesContext";

const DashboardForm = () => {
  const {isClicked} = useExpenses()
  return (
      <form className={`dashboard__form ${!isClicked && 'hidden-form'}`}>
        <div className="dashboard__form-details">
          <h4 className="heading-4">Expense Details</h4>
          <input type="text" placeholder="Title"/>
          <input type="text" placeholder="Category"/>
          <textarea placeholder="Description"/>
        </div>

        <div className="dashboard__form-dates">
          <h4 className="heading-4 ">Expense Dates</h4>
          <label htmlFor="payment-date">
            <span>Payment date</span>
            <input type="date" placeholder="Payment date" id="payment-date"/>
          </label>
          <label htmlFor="payment-due">
            <span>Payment due</span>
            <input type="date" placeholder="Payment due" id="payment-due"/>
          </label>
          <label htmlFor="expense-date">
            <span>Expense date</span>
            <input type="date" placeholder="Expense date" id="expense-date"/>
          </label>
        </div>

        <div className="dashboard__form-items">
          <h4 className="heading-4">Expense Items</h4>
          <input type="text" placeholder="Item name"/>
          <input type="number" placeholder="Item price"/>
          <input type="number" placeholder="Item quantity"/>
        </div>

        <button className="btn btn-create-expense">Create Expense</button>
      </form>
  );
};
export default DashboardForm;