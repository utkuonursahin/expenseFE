import { useState } from 'react';
import { useExpenses } from "../../context/ExpensesContext";
import { random } from "../../helper"
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import Items from './Items/Items';
import { createExpense } from '../../api';
import moment from 'moment';
import validationSchema from "./validations";
import CategoriesPopup from "../CategoriesPopup/CategoriesPopup";

const DashboardForm = () => {
  const { isFormClicked, setIsFormClicked, refreshExpenses } = useExpenses()
  const [items, setItems] = useState([random()]);
  const [renderCategories, setRenderCategories] = useState(false)
  const formik = useFormik({
    initialValues: {
      title: '',
      description: "",
      category: "",
      expense_date: moment().format('YYYY-MM-DD'),
      items: [{
        name: "",
        price: "",
        quantity: "",
        currency: "TRY"
      }]
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        console.log(values);
        await createExpense(values);
        await refreshExpenses();
        setIsFormClicked(!isFormClicked)
        toast.success('Expense created successfully', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (e) {
        console.log(e.response.data);
        toast.error(e.response.data.error, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        bag.setErrors({ general: e.response.data.error })
      }
    }
  })
  return (
    <form className={`dashboard__form ${!isFormClicked ? 'hidden-form' : ""}`} onSubmit={formik.handleSubmit}>
      <div className="dashboard__form-details">
        <h4 className="heading-4" >Expense Details</h4>
        <div className="input__group">
          <input
              id="title"
              name='title'
              type="text"
              placeholder="Title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className={`${formik.touched.title && formik.errors.title ? "error" : ""} input__group-input`}/>
          <label htmlFor="title">Title</label>
        </div>

        <div className="dashboard__form-details-categories">
          <button type="button" className="btn btn-categories-form" onClick={() => setRenderCategories(prev => !prev)}>
            Categories
            <svg>
              <use href="./assets/sprite.svg#icon-arrow-up" />
            </svg>
          </button>
          {renderCategories && <CategoriesPopup setVisibility={setRenderCategories}/>}
        </div>

        <div className="input__group input__group-textarea">
          <textarea
              id="textarea"
              name='description'
              placeholder="Description"
              className="input__group-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description} />
          <label htmlFor="textarea">Description</label>
        </div>

        <select className="dashboard__form-details-select">
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="TRY">TRY (₺)</option>
        </select>

      </div>

      <div className="dashboard__form-date">
        <h4 className="heading-4">Expense Date</h4>
        <input
          name='expense_date'
          type="date"
          placeholder="Expense date"
          id="expanse-date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.expense_date}
        />
      </div>

      <div className="dashboard__form-items">
        <h4 className="heading-4">Expense Items</h4>
        <button type='button' className="btn btn-add-item" onClick={() => setItems(prev => [...prev, random()])}>Add item</button>
        <div className="dashboard__form-items-container">
          {items.map((index, i) => (<Items key={index} items={items} i={i} index={index} setItems={setItems} onChange={formik.handleChange} values={formik.values.items} setFieldValue={formik.setFieldValue} onBlur={formik.handleBlur} />))}
        </div>
      </div>

      <div className="dashboard__form-buttons">
        <button type='submit' className="btn btn-create-expense">Create Expense</button>
        <button type='button' className="btn btn-close-form" onClick={() => setIsFormClicked(!isFormClicked)}>Close Form</button>
      </div>

    </form>
  );
};
export default DashboardForm;