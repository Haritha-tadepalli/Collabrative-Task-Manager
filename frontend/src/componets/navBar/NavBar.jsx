import React from 'react';
import './navBar.css'; 
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar"> 
      <button>
        <Link to="/">Home</Link>
      </button>
      <div>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/register">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}
