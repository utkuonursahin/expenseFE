const ItemDetails = ({detailedExpense, setIsDetailsClicked}) => {
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
            {new Intl.DateTimeFormat('en-US',{dateStyle:'medium'}).format(new Date(detailedExpense.expense_date))}
          </li>
        </ul>

        <h4 className="heading-4">Items</h4>
        {detailedExpense.items.map((el,i) =>
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
          <button className="btn btn-edit">Edit</button>
          <button className="btn btn-delete">Delete</button>
          <button className="btn btn-close" onClick={() => setIsDetailsClicked(prev => !prev)}>Close</button>
        </div>
      </div>
  );
};

export default ItemDetails;
