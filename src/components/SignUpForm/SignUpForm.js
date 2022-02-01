import { Link, useNavigate } from "react-router-dom";
import { createUser } from '../../api';
import { useFormik } from 'formik';
import validationSchema from "./validations"

const SignUpForm = () => {

  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        await createUser({ email: values.email, password: values.password, full_name: `${values.firstName} ${values.lastName}` });
        navigate('/login')
      } catch (e) {
        if (e.response.data.code === 11000) {
          bag.setErrors({ general: 'Email already exists' })
        } else {
          bag.setErrors({ general: e.response.data.error })
        }
      }
    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className="sign-up-form">

      <label htmlFor="firstName">
        <span>First Name: </span>
        <input name="firstName" type="text" id="firstName" onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className={`${formik.touched.firstName && formik.errors.firstName ? "error" : ""}`} />
      </label>
      <label htmlFor="lastName">
        <span>Last Name: </span>
        <input name="lastName" type="text" id="lastName" onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className={`${formik.touched.lastName && formik.errors.lastName ? "error" : ""}`} />
      </label>
      <label htmlFor="email">
        <span>E-mail: </span>
        <input name="email" type="email" id="email" onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`${formik.touched.email && formik.errors.email ? "error" : ""}`} />
      </label>

      <label htmlFor="password">
        <span>Password: </span>
        <input name="password" type="password" id="password" onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={`${formik.touched.password && formik.errors.password ? "error" : ""}`} />
      </label>

      <label htmlFor="confirmPassword">
        <span>Confirm Password: </span>
        <input name="confirmPassword" type="password" id="confirmPassword" onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className={`${formik.touched.confirmPassword && formik.errors.confirmPassword ? "error" : ""}`} />
      </label>

      {formik.errors.general && <div style={{ "background": "orangered", "textAlign": "center", "width": "100%", "padding": "2rem", "color": "white", "fontWeight": "bold", "borderRadius": "1rem" }}>{formik.errors.general}</div>}
      <button className="btn btn-sign-up" disabled={formik.isSubmitting || !formik.isValid}>Sign Up!</button>
      <span><Link to="/">go back</Link></span>
    </form>
  );
};

export default SignUpForm;