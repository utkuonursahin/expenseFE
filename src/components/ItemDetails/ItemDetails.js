import moment from 'moment';
import { toast } from 'react-toastify';
import { deleteExpense } from '../../api';
import { useExpenses } from '../../context/ExpensesContext';
import { useCategory } from '../../context/CategoryContext';

const ItemDetails = ({ detailedExpense, setIsDetailsClicked }) => {
  const { setIsFormClicked, setDetailsExpense, refreshExpenses } = useExpenses();
  const { setCurrentCategory } = useCategory();

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this expense?");
    if (confirm) {
      try {
        await deleteExpense(detailedExpense._id);
        await refreshExpenses();
        setIsDetailsClicked(false);
        setDetailsExpense(null);
        toast.success('Expense deleted successfully', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (e) {
        toast.error(e.response.data.error, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }
  return (
    <div className="item-details">
      <h3 className="heading-3">Detailed Information</h3>

      <h4 className="heading-4">General Details</h4>
      <ul className="item-details__list-general">
        <li className="item-details__list-general--item">
          <span>Title: </span>
          {detailedExpense.title}
        </li>
        <li className="item-details__list-general--item">
          <span>Description: </span>
          {detailedExpense.description}
        </li>
        <li className="item-details__list-general--item">
          <span>Category: </span>
          {detailedExpense.category.title}
        </li>
        <li className="item-details__list-general--item">
          <span>Expense Date: </span>
          {moment(detailedExpense.expense_date).format('ll')}
        </li>
      </ul>

      <h4 className="heading-4">Items</h4>
      {detailedExpense.items.map((el, i) =>
        <ul className="item-details__list-items" key={el._id}>
          <li className="item-details__list-items-item">
            <span>Name: </span>
            {el.name}
          </li>
          <li className="item-details__list-items-item">
            <span>Price: </span>
            {el.price}
          </li>
          <li className="item-details__list-items-item">
            <span>Quantity: </span>
            {el.quantity}
          </li>
        </ul>
      )}

      <div className="item-details__buttons">
        <button className="btn btn-edit" onClick={() => { setDetailsExpense(detailedExpense); setCurrentCategory(detailedExpense.category); setIsFormClicked(true) }}>Edit</button>
        <button className="btn btn-delete" onClick={handleDelete}>Delete</button>
        <button className="btn btn-close" onClick={() => { setDetailsExpense(null); setIsDetailsClicked(false) }}>Close</button>
      </div>
    </div>
  );
};

export default ItemDetails;
