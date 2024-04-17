import React, { useContext, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [input, setInput] = useState({
    username:'',
    password:'',
  })

  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const {login} = useContext(AuthContext);



  const handleChange = (e) =>{
    setInput(prev => ({...prev, [e.target.value] : e.target.value}))
  }

  const handleSubmit = async e => {
    console.log("login");

    
    e.preventDefault();

    try{
       await login(input)
      navigate('/')
    }
    catch(err){
   
      setError(error.response.data)
    }

  }
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" name='username' placeholder="Enter your Email" required onChange={handleChange}/>{" "}
        <input type="password"  name ='password' placeholder="enter password" required onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}> Login </button>
       { error && <p>{error}</p>}
        <span>
          Don't have account ?
          <Link to="/Register"> Register </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;