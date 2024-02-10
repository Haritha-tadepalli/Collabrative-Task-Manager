import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './register.css'; 

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const response = await axios.post('http://localhost:8000/require', {
        name, email, password
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({});
        toast.success('Registration Successful');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form className="register-form" onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter Your Name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter Your Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Your Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button className="submit" type="submit">Submit</button>
      </form>
    </section>
  );
}
