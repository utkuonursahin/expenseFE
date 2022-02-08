import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { resetPassword, userLogin } from '../../api';
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
  const handleSignUp = async () => {
    if (!formik.values.email) {
      return toast.error("Email is required", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    try {
      await resetPassword({ email: formik.values.email });
      toast.success("Reset password link sent to your email", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    }
  }
  return (
    <form autoComplete='new-password' onSubmit={formik.handleSubmit} className="login-form">
      <div className="input__group">
        <input
          name='email'
          type="text"
          placeholder="E-mail"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`input__group-input ${formik.touched.email && formik.errors.email ? "error" : ""}`}
        />
        <label htmlFor="title">E-mail</label>
      </div>
      <div className="input__group">
        <input
          name='password'
          type="password"
          placeholder="Password"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={`input__group-input ${formik.touched.password && formik.errors.password ? "error" : ""}`}
        />
        <label htmlFor="title">Password</label>
      </div>
      <button className="btn btn-login" disabled={formik.isSubmitting || !formik.isValid}>Log in</button>
      <span className='forget-password' onClick={handleSignUp}>Forget Password</span>
      <span className='register'><Link to="/sign-up">Sign Up</Link></span>
    </form>
  )
};

export default LoginForm;
