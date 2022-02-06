import moment from 'moment';
import { useExpenses } from '../../context/ExpensesContext';
import ItemDetails from "../ItemDetails/ItemDetails";
import { useState } from "react";

const DashboardList = () => {
  const { expenses } = useExpenses()
  const [detailedExpense, setDetailedExpense] = useState()
  const [isDetailsClicked, setIsDetailsClicked] = useState(false)
  const totalPrice = (items) => {
    const totalPrice = items.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0)
    return parseInt(totalPrice).toLocaleString('tr-TR', { style: 'currency', currency: items[0].currency });
  }

  const handleClick = (expense) => {
    setIsDetailsClicked(true)
    setDetailedExpense(expense)
  }

  return (
    <div className="dashboard__list">
      <ul className="dashboard__list-items">
        {expenses.map(expense => (
          <li key={expense._id} className="dashboard__list-items-item">
            <span>{moment(expense.expense_date).format('ll')}</span>
            <span>{expense.title}</span>
            <span className="dashboard__list-items-item-category" >{expense.category.title}</span>
            <span>{totalPrice(expense.items)}</span>
            <button className="btn btn-show-more" onClick={() => handleClick(expense)}>Show more</button>
          </li>
        ))}
      </ul>
      {isDetailsClicked && <ItemDetails detailedExpense={detailedExpense} setIsDetailsClicked={setIsDetailsClicked} />}
    </div>
  );
};

export default DashboardList;
