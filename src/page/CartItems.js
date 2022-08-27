// import { removeItem } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, amount, brand, img, price, title, size }) => {
  const dispatch = useDispatch();

  return (
    <li className="py-4 ml-2 border-b-[1px] border-[#ebebeb]">
      <a href="#:" className="flex">
        <div className="h-[90px] w-[90px]">
          <div className="bg-slate-200 rounded-xl ">
            <img src={img} alt={title} />
          </div>
        </div>
        <div className="ml-5">
          <span className="text-[14px] border-b-2 border-[#000]">
            <strong>{brand}</strong>
          </span>
          <p className="text-[13px] font-light mb-1">{title}</p>
          <span className="block text-[12px]">
            <strong>{size}</strong>
          </span>
          <button
            className="text-xs text-red-400 hover:text-red-700"
            // onClick={() => dispatch(removeItem(id))}
          >
            삭제
          </button>
        </div>
      </a>
    </li>
  );
};

export default CartItem;
