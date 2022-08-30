import { useSelector, useDispatch } from "react-redux";
// import CartItems from "../page/CartItems";
import { Link } from "react-router-dom";
import { removeFromCart } from "../features/cart/CartSlice";

const CartContainer = () => {
  const { products } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      {products.length === 0 ? (
        <div className="mt-[100px]">
          <div className="flex justify-center items-center flex-col">
            <p className="text-[rgba(34,34,34,.5)] mb-3 text-[13px]">
              추가하신 관심 상품이 없습니다.
            </p>
            <Link
              to="/"
              className="text-[rgba(34,34,34,.5)] rounded-[10px] border px-[16px] py-[8px] text-[12px] mt-[25px]"
            >
              SHOP 바로가기
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {products.map((product) => (
            <li
              key={product.id}
              className="flex py-4 ml-10 border-b-[1px] border-[#ebebeb] list-none "
            >
              <div className="h-[90px] w-[90px]  bg-slate-200 rounded-xl">
                <img src={product.image_url} alt="1" />
              </div>

              <div className="ml-5">
                <span className="text-[14px] border-b-2 border-[#000] ">
                  <strong>{product.productName}</strong>
                </span>
                <p className="font-light">
                  {product.productDescription <= 50
                    ? product.productDescription
                    : product.productDescription.slice(0, 35) + "..."}
                </p>

                <button
                  className="text-xs text-red-400 hover:text-red-700"
                  onClick={() => handleRemoveFromCart(product)}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartContainer;

// <ul className="flex flex-col p-5">
//      {
//      {cartItems.map((item) => {
//         return <CartItems key={item.id} {...item} />;
//       })}
//      }
//      </ul>
