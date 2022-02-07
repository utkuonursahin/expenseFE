import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { userLogin } from '../../api';
import { useFormik } from 'formik';
import validationSchema from "./validations"
import { toast } from 'react-toastify';

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
        navigate('/')
      } catch (e) {
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
    <>
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
        <button className="btn btn-login" disabled={formik.isSubmitting || !formik.isValid}>Log in</button>
        <span >Forget Password</span>
        <div style={{ "width": "100%", "height": "1px", "background": "#eee" }}></div>
        <span style={{ "background": "purple", "width": "100%" }}><Link to="/sign-up">Sign Up</Link></span>
      </form>
    </>
  )



};

export default LoginForm;
