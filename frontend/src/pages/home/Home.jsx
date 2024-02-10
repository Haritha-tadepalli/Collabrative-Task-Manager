import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1>Welcome to the task Manager</h1>
      <button>
      <Link to="/login">Login</Link>
      </button>
      <button>
        <Link to="/register">Sign Up</Link>
      </button>
    </section>
  )
}
