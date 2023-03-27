// types
import { CartItemType } from "../../pages/Products";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};
// Functional component w/ props of item and handleAddToCart.
// This is what gets called and returned with a map method in products
const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <div className="flex justify-between flex-col border-2 border-slate-200 h-auto max-w-xs shadow-lg">
    <a
      href=""
      className="w-full h-full">
      <img
        className=" object-contain rounded h-52 w-full hover:object-scale-down"
        src={item.image}
        alt={item.title}
      />
      <div className="p-1 ">
        <h3 className="text-2xl font-semibold text-center">{item.title.slice(0, 22)}</h3>
        <p className="break-words">{item.description.slice(0, 100)}....</p>
        <h3 className="font-bold">${item.price}</h3>
      </div>
    </a>
    <button
      className="bg-violet-300 hover:bg-violet-400  hover:scale-105 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2.5"
      onClick={() => handleAddToCart(item)}>
      Add to cart
    </button>
  </div>
);
export default Item;
