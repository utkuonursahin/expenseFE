import LoginForm from "../../components/LoginForm/LoginForm";
import {ExpensesProvider} from "../../context/ExpensesContext";

const Login = () => {
  return (
      <div className="login">
        <h2 className="heading-2">Login into your account</h2>
        <ExpensesProvider>
          <LoginForm/>
        </ExpensesProvider>
      </div>
  );
};

export default Login;
