import ASide from "../../components/A-Side/A-Side";
import { useState } from "react"
import { useAuth } from "../../context/AuthContext";
import { useFormik } from 'formik';
import { changePassword, updateProfileImage, userUpdate } from '../../api';
import { toast } from 'react-toastify';

const Profile = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [clickImage, setClickImage] = useState(false)
  const onToggle = () => setIsToggled(!isToggled);
  const { user, updateStorage } = useAuth();

  const formik = useFormik({
    initialValues: {
      first_name: user.full_name.split(" ")[0],
      last_name: user.full_name.split(" ")[1],
      email: user.email,
      password: '',
      profile_image: user.profile_image
    },
    enableReinitialize: true,
    // validationSchema,
    onSubmit: async (values, bag) => {
      try {
        if (values.first_name !== user.full_name.split("")[0] || values.last_name !== user.full_name.split(" ")[1] || values.email !== user.email) {
          await userUpdate({ full_name: `${values.first_name.replaceAll(" ", "")} ${values.last_name.replaceAll(" ", "")}`, email: values.email })
        }
        if (values.password) {
          await changePassword({ password: values.password, confirm_password: values.password })
        }
        if (values.profile_image !== user.profile_image) {
          await updateProfileImage(values.profile_image)
          window.location.reload();
        }
        await updateStorage(user._id)
        toast.success("User uploaded successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
    <section onSubmit={formik.handleSubmit} className="profile">
      <ASide />
      <form className="profile__card">

        <div className='avatar'>
          <img src={`http://18.192.215.189/uploads/users/${user.profile_image}`} alt="Profile pic" />
          <span onClick={() => setClickImage(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z" /></svg>
          </span>
        </div>
        <div className="input__group">
          <input id='first_name' type="text" name='first_name' placeholder="First Name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formik.touched.first_name && formik.errors.first_name ? "error" : ""}`}
          />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input__group">
          <input id='last_name' pattern="[A-Za-z0-9]{1,20}" name='last_name' type="text" placeholder="Last name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formik.touched.last_name && formik.errors.last_name ? "error" : ""}`} />
          <label htmlFor="last_name">Last name</label>
        </div>

        <div className="input__group">
          <input id='email' type="email" name="email" placeholder="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formik.touched.email && formik.errors.email ? "error" : ""}`} />
          <label htmlFor="email">E-mail</label>
        </div>

        <div className='container'>
          Change Password
          <label className='toggle-switch'>
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className='switch' />
          </label>
        </div>
        {isToggled && (
          <div className="input__group">
            <input id='password' name="password" type="password" placeholder="New Password"
              value={formik.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${formik.touched.password && formik.errors.password ? "error" : ""}`} />
            <label htmlFor="password">New Password</label>
          </div>
        )}
        <div className={`image-modal ${clickImage ? "active" : ""}`}>
          <svg onClick={() => setClickImage(false)}>
            <use href="./assets/sprite.svg#icon-cancel" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z" /></svg>
          <div>
            <label htmlFor="file">Select Image</label>
            <input
              type="file"
              id="file"
              name="profile_image"
              onChange={(e) => {
                formik.setFieldValue("profile_image", e.target.files[0]);
                setClickImage(false);
              }}
            />
          </div>
        </div>
        <button type='submit' disabled={formik.isSubmitting || !formik.isValid} className='btn btn-update-profile'>Update</button>
      </form>
    </section>
  );
};

export default Profile;
