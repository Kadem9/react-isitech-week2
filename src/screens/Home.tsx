import { Link, NavLink } from "react-router-dom"
import logo from "../assets/Apple-logo.png"
import bannerImg from "../assets/bnr.png"
import { Products } from "../components/Products"

export const Home = () => {
    return (
        <>
    <section className="flex flex-col md:flex-row bg-black text-white justify-center items-center h-auto overflow-hidden p-4">
      <div className="max-w-3xl text-center md:text-left mb-8 md:mb-0 md:mr-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Le futur est présent
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Découvrez les produits les plus avancés de notre ère.
        </p>
        <NavLink to={"/articles"} className="bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors duration-300">
          Voir les produits
        </NavLink>
      </div>
      <div className="flex justify-center">
        <img src={bannerImg} alt="iPhone 12" className="max-w-full" />
      </div>
    </section>
         <Products />
      </>
      
    )
}