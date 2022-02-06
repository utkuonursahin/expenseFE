import { useCategory } from '../../context/CategoryContext';
const CategoriesPopup = ({ setVisibility }) => {
  const { categories, setCurrentCategory } = useCategory();
  const handleClick = (e) => {
    if (e.target.tagName !== 'INPUT') return
    setCurrentCategory(categories.find(category => category._id === e.target.value));
    setVisibility(false);
  }
  return (
    <div className="categories-popup">
      {categories.map(category => (
        <label key={category._id} htmlFor={category._id}>
          <input type="radio" id={category._id} value={category._id}
            name="radio-input" onChange={handleClick} />
          <span className="checkbox" />
          <span>{category.title}</span>
        </label>
      ))}
    </div>
  );
};

export default CategoriesPopup;
