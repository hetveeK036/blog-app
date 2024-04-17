import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from "axios";
// import "./Login"
const Register = () => {
  const [input, setInput] = useState({
    username:'',
    email:'',
    password:'',
  })

  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleChange = (e) =>{
    setInput(prev => ({...prev, [e.target.value] : e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{

      const res = await axios.post("/auth/register", input);
      console.log(res)
      navigate('/login')
    }
    catch(err){
      // console.log(err);
      setError(error.response.data)
    }

  }
  return (
    <div className='auth'>
        <h1> Register  </h1>
      <form action="">
        <input type="text" placeholder=' Enter your Name' required onChange={handleChange}/>
        <input type="text" placeholder=' Enter your Email' required onChange={handleChange}/>
        <input type="password" placeholder=' Enter your Password' required onChange={handleChange}/>
        <input type="password" placeholder=' Enter your Confirm Password' required/>
        {error && <p>{error}</p>}
        <button onChange={handleSubmit}> Register</button>
        <span>Do you have account ?
            <Link to ="/login"> Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register;