import React from 'react';
import './navBar.css'; 
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar"> 
        <Link to="/">
          <button>Home</button>
          </Link>
      <div>
          <Link to="/login">
            <button>
            Login
            </button>
            </Link>
          <Link to="/register">
            <button>
            Sign Up
            </button>
            </Link>
      </div>
    </div>
  );
}
