import { Home } from './screens/Home'
import { Routes, Route, NavLink } from 'react-router-dom'
import { Login } from './screens/Login'
import { Register } from './screens/Register'
import { Articles } from './screens/Articles'
import './App.css'
import { FaHome, FaHouseUser, FaPenSquare } from 'react-icons/fa'
import { BsCartCheckFill, BsApple } from 'react-icons/bs'
import { CartContext } from './context/cart'
import { useContext } from 'react'
import { Panier } from './screens/Panier'


function App() {

  const { cartState } = useContext(CartContext);
  const totalItems = cartState.items.length;

  return (
    <div className="container">
    <nav className='flex justify-between items-center bg-gray-900 text-white p-4'>
      <div className="logo">
        <h1 className="text-2xl uppercase">Logo</h1>
      </div>
      <div className="navlink hidden md:flex">
        <NavLink className='mr-3 hover:underline flex items-center' to="/"><FaHome className='mr-1'/>Accueil</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/articles"><BsApple className='mr-1'/>Produits</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/panier"><BsCartCheckFill className='mr-1'/>Panier ({ totalItems })</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/connexion"><FaHouseUser className='mr-1'/>Connexion</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/inscription"><FaPenSquare className='mr-1'/>Inscription</NavLink>
      </div>
      <div className="md:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
    </nav>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<Register />} />
      <Route path="/panier" element={<Panier />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  </div>
  
  )
}

export default App
