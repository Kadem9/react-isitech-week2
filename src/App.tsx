import { Home } from './screens/Home'
import { Routes, Route, NavLink } from 'react-router-dom'
import { Login } from './screens/Login'
import { Register } from './screens/Register'
import './App.css'
import { FaHome, FaApple, FaHouseUser, FaPenSquare } from 'react-icons/fa'


function App() {

  return (
    <div className="container">
      <nav className='flex justify-between items-center bg-gray-900 text-white p-4'>
        <div className="logo">
          <h1 className="text-2xl uppercase">Logo</h1>
        </div>
        <div className="navlink flex">
        <NavLink className='mr-3 hover:underline flex items-center' to="/"><FaHome className='mr-1'/>Accueil</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/connexion"><FaApple className='mr-1'/>Nos produits</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/connexion"><FaHouseUser className='mr-1'/>Connexion</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/inscription"><FaPenSquare className='mr-1'/>Inscription</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
