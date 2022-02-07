import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn)
      navigate("/")
  }, [])

  return (
    <div className="sign-up">
      <h2 className="heading-2">Create your account, now!</h2>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
