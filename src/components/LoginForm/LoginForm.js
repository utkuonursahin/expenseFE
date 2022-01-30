import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

const LoginForm = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async function(e) {
    e.preventDefault()
    const userResponse = await axios.post('http://18.192.215.189/users/login',{email:email, password:password},{headers:{'Content-Type':'application/json'}})
    const userExpensesResponse = await axios.post('http://18.192.215.189/users/login',{email:email, password:password},{
      headers:{
        'Content-Type':'application/json',
        "authorization": `Bearer ${userResponse.data.tokens.acess_token}`
      }
    })
    navigate("/dashboard")
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
