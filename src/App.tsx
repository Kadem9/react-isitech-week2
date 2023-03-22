import { Home } from './screens/Home'
import { Routes, Route, NavLink } from 'react-router-dom'
import { Login } from './screens/Login'
import { Register } from './screens/Register'
import { Articles } from './screens/Articles'
import './App.css'
import { FaHome, FaHouseUser, FaPenSquare } from 'react-icons/fa'
import { BsCartCheckFill } from 'react-icons/bs'
import { CartContext } from './context/cart'
import { useContext } from 'react'
import { Panier } from './screens/Panier'


function App() {

  const myCartContext = useContext(CartContext)

  console.log(myCartContext)

  return (
    <div className="container">
      <nav className='flex justify-between items-center bg-gray-900 text-white p-4'>
        <div className="logo">
          <h1 className="text-2xl uppercase">Logo</h1>
        </div>
        <div className="navlink flex">
        <NavLink className='mr-3 hover:underline flex items-center' to="/"><FaHome className='mr-1'/>Accueil</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/articles"><BsCartCheckFill className='mr-1'/>Produits</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/panier"><BsCartCheckFill className='mr-1'/>Panier</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/connexion"><FaHouseUser className='mr-1'/>Connexion</NavLink>
        <NavLink className='mr-3 hover:underline flex items-center' to="/inscription"><FaPenSquare className='mr-1'/>Inscription</NavLink>
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
