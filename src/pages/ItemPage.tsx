import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "../layout/NavBar";
import { CartItemType } from "../components/cart/types/CartItemTypes";

export default function ItemPage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<CartItemType | null>(null);
  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setItem(data);
    };
    fetchItem();
  }, [id]);

  return (
    <>
      <NavBar />
      <main className="min-w-screen min-h-screen bg-gray-500 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-8xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative flex self-center justify-center">
                <img
                  src={item?.image}
                  className="w-3/4 relative z-10 p-4"
                  alt={item?.description}
                />
                <div className="border-4 border-gray-500 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">{item?.title}</h1>
                <p className="text-sm">{item?.description}</p>
              </div>
              <span className="font-bold text-4xl inline-block mr-5 leading-none align-baseline">${item?.price}</span>
              <button className="bg-yellow-300 opacity-75 hover:opacity-100 inline-block align-bottom text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
