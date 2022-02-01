const Items = ({ index, setItemsCount }) => {
  return (
      <div className="dashboard__form-items-item">
        <input type="text" placeholder="Item name" />
        <input type="number" placeholder="Item price" />
        <input type="number" placeholder="Item quantity" />
        <svg onClick={() => setItemsCount(prev => prev.filter(el => el !== index))}>
          <use href="./assets/sprite.svg#icon-bin"/>
        </svg>
      </div>
  );
};

export default Items;
