const Items = ({ index, setItemsCount }) => {
  return (
      <div className="dashboard__form-items-container-item">
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Price" />
        <input type="number" placeholder="Quantity" />
        <svg onClick={() => setItemsCount(prev => prev.filter(el => el !== index))}>
          <use href="./assets/sprite.svg#icon-bin"/>
        </svg>
      </div>
  );
};

export default Items;
