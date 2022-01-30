import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

const LoginForm = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async function(e) {
    e.preventDefault()

    // const response = await axios('http://18.192.215.189/users/login',{email, password})
    // console.log(response)
    document.location.pathname = '/dashboard'
  }
  return (
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        <button className="btn btn-login">Log in</button>
        <span><Link to="/">go back to home</Link></span>
      </form>
  );
};

export default LoginForm;
