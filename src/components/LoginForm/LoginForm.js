import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from '../../context/AuthContext';
import { userLogin } from '../../api';

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth();

  const navigate = useNavigate()
  const handleSubmit = async function (e) {
    e.preventDefault()
    const user = await userLogin({ email, password })
    login(user)
    navigate("/dashboard")
  }
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-login">Log in</button>
      <span><Link to="/">go back to home</Link></span>
    </form>
  );
};

export default LoginForm;
