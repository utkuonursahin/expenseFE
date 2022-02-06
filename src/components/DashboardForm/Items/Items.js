import { toast } from 'react-toastify';

const Items = ({ items, index, setItems, i, formik }) => {
  const handleDelete = () => {
    if (items.length > 1) {
      setItems(items.filter(el => el._id !== index))
      formik.setFieldValue('items', formik.values.items.filter((_, order) => order !== i));
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

      <div className="input__group">
        <input name={`items.${i}.name`} type="text"
          className={`input__group-input ${formik?.touched?.items?.[i]?.name && formik?.errors?.items?.[i]?.name ? "error" : ""}`}
          placeholder="Name" value={formik.values.items[i].name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <label htmlFor="name">Name</label>
      </div>

      <div className="input__group">
        <input name={`items.${i}.price`} type="number" className={`input__group-inpu${formik?.touched?.items?.[i]?.price && formik?.errors?.items?.[i]?.price ? "error" : ""}`} placeholder="Price" value={formik.values.items[i].price} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <label htmlFor="price">Price</label>
      </div>

      <div className="input__group">
        <input name={`items.${i}.quantity`} type="number" className={`input__group-input${formik?.touched?.items?.[i]?.quantity && formik?.errors?.items?.[i]?.quantity ? "error" : ""}`} placeholder="Qty" value={formik.values.items[i].quantity} onChange={formik.handleChange} onBlur={formik.handleBlur} />

        <label id="quantity" htmlFor="quantity">Quantity</label>
      </div>

      <svg onClick={handleDelete}>
        <use href="./assets/sprite.svg#icon-bin" />
      </svg>
    </div>
  );
};

export default Items;
