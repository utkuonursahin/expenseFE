import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn)
      navigate("/")
  }, [])

  return (
    <div className="login">
      <h2 className="heading-2">Login into your account</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
