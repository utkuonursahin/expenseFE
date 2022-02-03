import { useState } from 'react';
import { useExpenses } from "../../context/ExpensesContext";
import { random } from "../../helper"
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import Items from './Items/Items';
import { createExpense } from '../../api';
import moment from 'moment';
import validationSchema from "./validations";

const DashboardForm = () => {
  const { isClicked, setIsClicked } = useExpenses()
  const [items, setItems] = useState([random()]);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: "",
      category: "",
      expense_date: moment().format('YYYY-MM-DD'),
      items: [{
        name: "",
        price: "",
        quantity: ""
      }]
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        console.log(values);
        await createExpense(values);
        setIsClicked(!isClicked)
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
  console.log(formik.errors)
  return (
    <form className={`dashboard__form ${!isClicked ? 'hidden-form' : ""}`} onSubmit={formik.handleSubmit}>
      <div className="dashboard__form-details">
        <h4 className="heading-4" >Expense Details</h4>
        <input
          name='title'
          type="text"
          placeholder="Title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title} />

        <input
          name='category'
          type="text"
          placeholder="Category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
        />
        <textarea
          name='description'
          placeholder="Description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description} />
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

      <button type='submit' className="btn btn-create-expense">Create Expense</button>
    </form>
  );
};
export default DashboardForm;