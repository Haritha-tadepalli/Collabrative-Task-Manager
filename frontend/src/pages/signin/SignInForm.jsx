import React from "react";
import './SignInForm.css'; 
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SignInForm = () => {

    const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const logInUser = async (e) => {
    e.preventDefault();
    const {email, password} = data 
    try {
        const response = await axios.post('/login', {
            email, password
        })
        if(response.error){
            toast.error(response.error)
        }
        else{
            setData()
            navigate('/')
        }
    } catch (error) {
        
    }
  };

  return (
    <section>
      <form className="register-form" onSubmit={logInUser}>
        <label className="email">Email</label>
        <input type='email' placeholder='Enter Your Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label className="password">Password</label>
        <input type='password' placeholder='Enter Your Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button className="submit" type='submit'>Submit</button>
      </form>
        <Link to='/register' className="signinLink" >Not a user? Signin</Link>

    </section>
  );
};

export default SignInForm;
