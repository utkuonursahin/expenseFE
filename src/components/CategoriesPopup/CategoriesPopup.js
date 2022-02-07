import { useCategory } from '../../context/CategoryContext';
import { useExpenses } from '../../context/ExpensesContext';
const CategoriesPopup = ({ setVisibility }) => {
  const { categories, setCurrentCategory } = useCategory();
  const { isFormClicked } = useExpenses();
  const handleClick = (e) => {
    if (e.target.tagName !== 'INPUT') return
    setCurrentCategory(categories.find(category => category._id === e.target.value));
    setVisibility(false);
  }
  return (
    <div className="categories-popup">
      {!isFormClicked && (
        <label key="asd213azx" htmlFor={"empty"}>
          <input type="radio" id={"empty"}
            name="radio-input" onChange={() => { setCurrentCategory(""); setVisibility(false) }} />
          <span className="checkbox" />
          <span>Any </span>
        </label>
      )}

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
