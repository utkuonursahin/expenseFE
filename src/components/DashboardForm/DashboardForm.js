import { useState, useEffect } from 'react';
import { useExpenses } from "../../context/ExpensesContext";
import { random } from "../../helper"
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import Items from './Items/Items';
import { createExpense } from '../../api';
import moment from 'moment';
import validationSchema from "./validations";
import CategoriesPopup from "../CategoriesPopup/CategoriesPopup";
import { useCategory } from '../../context/CategoryContext';

const DashboardForm = () => {
  const { isFormClicked, setIsFormClicked, refreshExpenses, detailsExpense } = useExpenses()
  const { currentCategory, setCurrentCategory } = useCategory();
  const [items, setItems] = useState([{ _id: random() }]);
  const [renderCategories, setRenderCategories] = useState(false)



  const formik = useFormik({
    initialValues: {
      title: detailsExpense?.title || '',
      description: detailsExpense?.description || "",
      category: "",
      expense_date: moment(detailsExpense?.expense_date).format('YYYY-MM-DD') || moment().format('YYYY-MM-DD'),
      currency: detailsExpense?.currency || "TRY",
      items: detailsExpense?.items || [{
        name: "",
        price: "",
        quantity: ""
      }]
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, bag) => {
      if (!currentCategory)
        return toast.error("Please select a category", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      try {
        if (detailsExpense) {
          console.log(values);
          values.category = currentCategory._id;
          values.items.forEach(item => item.currency = values.currency)
          delete values.currency
          await createExpense(detailsExpense._id, values);
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
        } else {
          values.category = currentCategory._id;
          values.items.forEach(item => item.currency = values.currency)
          delete values.currency
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
        }
      }
      catch (e) {
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
      } finally {
        setCurrentCategory(null)
      }
    }
  })

  useEffect(() => {
    if (detailsExpense)
      setItems(formik.initialValues.items);
  }, [formik.values.items])
  console.log(formik.values);

  return (
    <form className={`dashboard__form ${!isFormClicked ? 'hidden-form' : ""}`} onSubmit={formik.handleSubmit}>
      <div className="dashboard__form-details">
        <h4 className="heading-4" >Expense Details</h4>
        <input
          name='title'
          type="text"
          placeholder="Title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />

        <div className="dashboard__form-details-categories">
          <button type="button" className="btn btn-categories-form" onClick={() => setRenderCategories(prev => !prev)}>
            {currentCategory ? currentCategory.title : "Categories"}
            <svg>
              <use href="./assets/sprite.svg#icon-arrow-up" />
            </svg>
          </button>
          {renderCategories && <CategoriesPopup setVisibility={setRenderCategories} />}
        </div>

        <textarea
          name='description'
          placeholder="Description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description} />

        <select name="currency" value={formik.values.currency} className="dashboard__form-details-select"
          onClick={formik.handleChange}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}>
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
        <button type='button' className="btn btn-add-item" onClick={() => setItems(prev => [...prev, { _id: random() }])}>Add item</button>
        <div className="dashboard__form-items-container">
          {items.map((index, i) => (<Items
            key={index._id}
            items={items}
            i={i}
            index={index._id}
            setItems={setItems}
            onChange={formik.handleChange}
            values={formik.values.items}
            setFieldValue={formik.setFieldValue} onBlur={formik.handleBlur} />))}
        </div>
      </div>
      <div className="dashboard__form-buttons">
        <button type='submit' className="btn btn-create-expense">Create Expense</button>
        <button type='button' className="btn btn-close-form" onClick={() => { setCurrentCategory(null); setIsFormClicked(!isFormClicked) }}>Close Form</button>
      </div>

    </form>
  );
};
export default DashboardForm;