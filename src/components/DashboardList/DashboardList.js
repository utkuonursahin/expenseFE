import moment from 'moment';
import { useExpenses } from '../../context/ExpensesContext';

const DashboardList = () => {
  const { expenses } = useExpenses()

  const totalPrice = (items) => {
    const totalPrice = items.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0)
    return parseInt(totalPrice).toLocaleString('tr-TR', { style: 'currency', currency: items[0].currency });
  }

  return (
    <ul className="dashboard__list">
      {expenses.map(expense => (
        <li key={expense._id} className="dashboard__list-item">
          <span>{moment(expense.expense_date).format('ll')}</span>
          <span>{expense.title}</span>
          <span>{expense.category.title}</span>
          <span>{totalPrice(expense.items)}</span>
          <button className="btn btn-show-more">Show more</button>
        </li>
      ))}
    </ul>
  );
};

export default DashboardList;
