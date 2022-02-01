import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { userLogin } from '../../api';
import { useFormik } from 'formik';
import validationSchema from "./validations"

const LoginForm = () => {
  const { login } = useAuth();

  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const user = await userLogin(values);
        login(user);
        navigate('/dashboard')
      } catch (e) {
        bag.setErrors({ general: e.response.data.error })
      }
    }
  })
  return (

    <form onSubmit={formik.handleSubmit} className="login-form">
      <input
        name='email'
        type="email"
        placeholder="E-mail"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={`${formik.touched.email && formik.errors.email ? "error" : ""}`}
      />

      <input
        name='password'
        type="password"
        placeholder="Password"
        onBlur={formik.handleBlur}
        value={formik.values.password}
        onChange={formik.handleChange}
        className={`${formik.touched.password && formik.errors.password ? "error" : ""}`}
      />
      {formik.errors.general && <div style={{ "background": "orangered", "textAlign": "center", "width": "100%", "padding": "2rem", "color": "white", "fontWeight": "bold", "borderRadius": "1rem" }}>{formik.errors.general}</div>}
      <button className="btn btn-login" disabled={formik.isSubmitting || !formik.isValid}>Log in</button>
      <span><Link to="/">go back</Link></span>
    </form>
  )



};

export default LoginForm;
