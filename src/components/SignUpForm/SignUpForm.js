import {Link} from "react-router-dom";

const SignUpForm = () => {
  return (
      <form className="sign-up-form">
        <label htmlFor="username">
          <span>Username: </span>
          <input type="text" id="username"/>
        </label>

        <label htmlFor="email">
          <span>E-mail: </span>
          <input type="email" id="email"/>
        </label>

        <label htmlFor="password">
          <span>Password: </span>
          <input type="password" id="password"/>
        </label>

        <button className="btn btn-sign-up">Sign Up!</button>
        <span><Link to="/">go back to home</Link></span>
      </form>
  );
};

export default SignUpForm;