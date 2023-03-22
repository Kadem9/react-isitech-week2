import { Youtube } from "../components/Youtube"
import logo from "../assets/Apple-logo.png"
import bannerImg from "../assets/banner.png"
import { Products } from "../components/Products"

export const Home = () => {
    return (
        <section>
        <main className="mt-4 max-w-full bg-slate-800 flex p-8 text-white xs:h-24">
            <div className="left flex flex-col justify-center w-1/2">
                <img src={logo} alt="logo apple" className="w-10 block"/>
                <h3 className="text-5xl">Intro<span className="text-bold">ducing</span></h3>
                <h1 className="text-5xl">Iphone 12</h1>
                <p className="mt-4">Profitez d'une offre de -20% lors de <br /> l'achat du nouvelle Iphone sans forfait !</p>
                <button className="bg-white p-2 rounded-sm hover:bg-slate-300 text-black w-20 mt-4">Acheter</button>
            </div>
        <div className="right w-1/2 relative">
            <img className="lg:w-52 md:w-48 sm:w-52 absolute bottom-0 float-right" src={bannerImg} alt="New iphone" />
        </div>
        </main>
        <Products />
        </section>
    )
}