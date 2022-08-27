import { useDispatch, useSelector } from "react-redux";
import CartItems from "../page/CartItems";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cartItems, cartTotalQuantity } = useSelector((store) => store.cart);

  if (cartTotalQuantity > 1) {
    return (
      <div className="mt-[100px]">
        <div className="flex justify-center items-center flex-col">
          <p className="text-[rgba(34,34,34,.5)] mb-3 text-[13px]">
            추가하신 관심 상품이 없습니다.
          </p>
          <Link
            to="/"
            className="text-[rgba(34,34,34,.5)] rounded-[10px] border px-[16px] py-[8px] text-[12px]"
          >
            SHOP 바로가기
          </Link>
        </div>
      </div>
    );
  }
  return (
    <ul className="flex flex-col p-5">
      {cartItems.map((item) => {
        return <CartItems key={item.id} {...item} />;
      })}
    </ul>
  );
};
export default CartContainer;
