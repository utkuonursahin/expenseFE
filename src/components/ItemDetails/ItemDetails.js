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
  const totalPrice = () => {
    return detailedExpense.items.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
  }
  return (
    <div className="item-details">

      <h4 className="heading-4 item-details__heading">Expense Details</h4>
      <ul className="item-details__general-list">
        <li className="item-details__general-list--item">
          <span>Title</span>
          {detailedExpense.title}
        </li>
        <li className="item-details__general-list--item">
          <span>Description</span>
          {detailedExpense.description}
        </li>
        <li className="item-details__general-list--item">
          <span>Category</span>
          {detailedExpense.category.title}
        </li>
        <li className="item-details__general-list--item">
          <span>Expense Date</span>
          {moment(detailedExpense.expense_date).format('ll')}
        </li>
      </ul>

      <div className="item-details__items">
        <div className="item-details__items-headings">
          <span>Name</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        {detailedExpense.items.map(el => {
          return (
            <ul className="item-details__items-list" key={el._id}>
              <li className="item-details__items-list--item">{el.name}</li>
              <li className="item-details__items-list--item">{el.price}</li>
              <li className="item-details__items-list--item">{el.quantity}</li>
              <li className="item-details__items-list--item">{el.quantity * el.price}</li>
            </ul>)
        }
        )}
        <div className="item-details__items-total">
          <span>Total Price</span>
          <span>{totalPrice()}</span>
        </div>
      </div>

      <div className="item-details__buttons">
        <button className="btn btn-edit" onClick={() => { setDetailsExpense(detailedExpense); setCurrentCategory(detailedExpense.category); setIsFormClicked(true) }}>Edit</button>
        <button className="btn btn-delete" onClick={handleDelete}>Delete</button>
      </div>
      <svg onClick={() => { setDetailsExpense(null); setIsDetailsClicked(false) }}>
        <use href="./assets/sprite.svg#icon-cancel" />
      </svg>
    </div>
  );
};

export default ItemDetails;
