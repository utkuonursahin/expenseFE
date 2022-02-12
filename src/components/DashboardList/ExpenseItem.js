import moment from 'moment';

function ExpenseItem({ expenses, setIsDetailsClicked, setDetailedExpense }) {

    const totalPrice = (expense) => {
        const totalPrice = expense.items.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0)
        return parseInt(totalPrice).toLocaleString('tr-TR', { style: 'currency', currency: expense.currency });
    }

    const handleClick = (expense) => {
        setDetailedExpense(expense)
        setIsDetailsClicked(true)
    }
    return <ul className="dashboard__list-items">
        {expenses.map(expense => (
            <li key={expense._id} className="dashboard__list-items-item">
                <div>
                    <span>{moment(expense.expense_date).format('ll')}</span>
                    <span>{expense.title}</span>
                    <span className="dashboard__list-items-item-category" >{expense.category.title}</span>
                    <span>{totalPrice(expense)}</span>
                </div>
                <button className="btn btn-show-more" onClick={() => handleClick(expense)}>Show more</button>
            </li>
        ))}
    </ul>;
}

export default ExpenseItem;
