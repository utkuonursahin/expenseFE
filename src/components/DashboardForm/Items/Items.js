import { toast } from 'react-toastify';

const Items = ({ items, index, setItems, onChange, onBlur, values, i, setFieldValue }) => {
  const handleDelete = () => {
    if (items.length > 1) {
      setItems(items.filter(el => el._id !== index))
      setFieldValue('items', values.filter(el => el.name !== values[i]?.name));
    } else {
      toast.error('You can not delete last item', {
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
  return (
    <div className="dashboard__form-items-container-item">
      <input name={`items.${i}.name`} type="text" placeholder="Name" value={values[i].name} onChange={onChange} onBlur={onBlur} />
      <input name={`items.${i}.price`} type="number" placeholder="Price" value={values[i].price} onChange={onChange} onBlur={onBlur} />
      <input name={`items.${i}.quantity`} type="number" placeholder="Qty" value={values[i].quantity} onChange={onChange} onBlur={onBlur} />
      <svg onClick={handleDelete}>
        <use href="./assets/sprite.svg#icon-bin" />
      </svg>
    </div>
  );
};

export default Items;
