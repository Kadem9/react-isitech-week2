import Iphone12 from "../assets/products/iphone12.jpg";
import Iphone13 from "../assets/products/iphone13.png";
import Iphone13Pro from "../assets/products/iphone13pro.jpg";

type Products = {
  id: number;
  name: string;
  price: number;
  description?: string;
};

export const Products = () => {
  return (
    <main className="products">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Produits à la une
        </span>
      </h1>
      <div className="flex flex-wrap">
        <div className="border-solid border-2 border-neutral-300 p-4 lg:w-1/3 md:w-1/2 flex flex-col items-center">
          <img width={500} src={Iphone13} alt="iphone 13" />

          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-slate-400">
            Iphone 13
          </h2>

          <p className="mt-4 text-center">
            Puissance irrésistible. À prix irrésistible.
          </p>

          <p className="mt-4">Prix : 1199€</p>
          <button className="bg-slate-900 text-white px-6 py-1 rounded-md mt-2 hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-black">
            Acheter
          </button>
        </div>

        <div className="border-solid border-2 border-neutral-300 p-4 lg:w-1/3 md:w-1/2 flex flex-col items-center">
          <img width={500} src={Iphone13} alt="iphone 13 pro" />
          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-slate-400">
            Iphone 13 Pro
          </h2>

          <p className="mt-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <p className="mt-4">Prix : 1199€</p>

          <button className="bg-slate-900 text-white px-6 py-1 rounded-md mt-2 hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-black">
            Acheter
          </button>
        </div>

        <div className="border-solid border-2 border-neutral-300 p-4 lg:w-1/3 md:w-1/2 flex flex-col items-center">
          <img width={500} src={Iphone12} alt="iphone 12" />

          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-slate-400">
            Iphone 12
          </h2>

          <p className="mt-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <p className="mt-4">Prix : 999€</p>

          <button className="bg-slate-900 text-white px-6 py-1 rounded-md mt-2 hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-black">
            Acheter
          </button>
        </div>

        <div className="border-solid border-2 border-neutral-300 p-4 lg:w-1/3 md:w-1/2 flex flex-col items-center">
          <img width={500} src={Iphone13} alt="iphone 13" />

          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-slate-400">
            Iphone 12 Pro
          </h2>

          <p className="mt-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <p className="mt-4">Prix : 1099€</p>

          <button className="bg-slate-900 text-white px-6 py-1 rounded-md mt-2 hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-black">
            Acheter
          </button>
        </div>
      </div>
    </main>
  );
};
