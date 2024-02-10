import './App.css';
import SignInForm from './pages/signin/SignInForm';
import { Route, Routes } from 'react-router-dom';
import NavBar from './componets/navBar/NavBar';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Toaster position='top-right' toastOptions={{duration: 2000}}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path = '/login' element={<SignInForm />} />
        <Route path = '/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
