import { useCategory } from '../../context/CategoryContext';
const FilterPopup = () => {
  const { categories } = useCategory();
  const handleClick = (e) => {
    console.log(e.target.value);
    // if (e.target.tagName !== 'INPUT') return
  }
  return (
    <div className="filter-popup" onClick={handleClick}>
      {categories.map(category => (
        <label key={category._id} htmlFor={category._id}>
          <input type="radio" id={category._id} value={category._id} name="radio-input" />
          <span className="checkbox" />
          <span>{category.title}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterPopup;
