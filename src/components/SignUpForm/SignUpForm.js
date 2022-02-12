import { Link, useNavigate } from "react-router-dom";
import { createUser } from '../../api';
import { useFormik } from 'formik';
import validationSchema from "./validations"
import { toast } from 'react-toastify';

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
        toast.success("you direct login page", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/login')
      } catch (e) {

        if (e.response.data.code === 11000) {
          toast.error("Email already exists", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          bag.setErrors({ general: 'Email already exists' })
        } else {
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
    }
  })
  return (
    <form autoComplete="new-password" onSubmit={formik.handleSubmit} className="sign-up-form">
      <div className="input__group">
        <input
          name='firstName'
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          autoComplete="off"
          className={`input__group-input ${formik.touched.firstName && formik.errors.firstName ? "error" : ""}`}
        />
        <label htmlFor="title">First Name</label>
      </div>
      <div className="input__group">
        <input
          name='lastName'
          type="text"
          placeholder="Last Name"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className={`input__group-input ${formik.touched.lastName && formik.errors.lastName ? "error" : ""}`}
        />
        <label htmlFor="title">Last Name</label>
      </div>
      <div className="input__group">
        <input
          name='email'
          type="email"
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
      <div className="input__group">
        <input
          name='confirmPassword'
          type="password"
          placeholder="Confirm Password"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className={`input__group-input ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "error" : ""}`}
        />
        <label htmlFor="title">Confirm Password</label>
      </div>
      <button className="btn btn-sign-up" disabled={formik.isSubmitting || !formik.isValid}>Sign Up!</button>
      <span><Link to="/">go back</Link></span>
    </form>
  );
};

export default SignUpForm;