import { useCategory } from '../../../context/CategoryContext';
const FilterPopup = () => {
  const { categories } = useCategory();
  const handleClick = (e) => {
    console.log(e.target.value);
    // if (e.target.tagName !== 'INPUT') return
  }
  return (
    <form action="#" className="dashboard__nav--filter-form" onClick={handleClick}>
      {categories.map(category => (
        <label key={category._id} htmlFor="draft">
          <input type="radio" id="draft" value={category._id} name="radio-input" />
          <span className="checkbox" />
          <span>{category.title}</span>
        </label>
      ))}
    </form>
  );
};

export default FilterPopup;
