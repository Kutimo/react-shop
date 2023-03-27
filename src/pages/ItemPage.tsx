import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import { CartItemType } from "./Products";

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
                  alt=""
                />
                <div className="border-4 border-gray-500 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  Mens's Ragged <br />
                  Waterproof Jacket
                </h1>
                <p className="text-sm">{item?.description}</p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">$</span>
                  <span className="font-bold text-5xl leading-none align-baseline">59</span>
                  <span className="text-2xl leading-none align-baseline">.99</span>
                </div>
                <div className="inline-block align-bottom">
                  <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <h1>{item?.title}</h1>
        <img
          className="h-72 w-auto"
          src={item?.image}
          alt={item?.description}
        />
        <div>
          <p>{item?.description}</p>
          <p>${item?.price}</p>
        </div> */}
      </main>
    </>
  );
}
