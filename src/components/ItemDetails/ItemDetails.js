const ItemDetails = ({detailedExpense, setIsDetailsClicked}) => {
  let total = 0;
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
            {new Intl.DateTimeFormat('en-US',{dateStyle:'medium'}).format(new Date(detailedExpense.expense_date))}
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
            total += el.quantity * el.price
            return (
              <ul className="item-details__items-list" key={el._id}>
              <li className="item-details__items-list--item">{el.name}</li>
              <li className="item-details__items-list--item">{el.price}</li>
              <li className="item-details__items-list--item">{el.quantity}</li>
              <li className="item-details__items-list--item">{el.quantity * el.price}</li>
            </ul>)}
          )}
          <div className="item-details__items-total">
            <span>Total Price</span>
            <span>{total}</span>
          </div>
        </div>

        <div className="item-details__buttons">
          <button className="btn btn-edit">Edit</button>
          <button className="btn btn-delete">Delete</button>
        </div>

        <svg onClick={() => setIsDetailsClicked(prev => !prev)}>
          <use href="./assets/sprite.svg#icon-cancel"/>
        </svg>

      </div>
  );
};

export default ItemDetails;
