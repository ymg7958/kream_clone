import { useDispatch, useSelector } from "react-redux";
import CartItems from "../page/CartItems";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <div className="mt-[150px]">
        <div className="flex justify-center items-center flex-col">
          <p className="text-[rgba(34,34,34,.5)] mb-3 text-[13px]">
            추가하신 관심 상품이 없습니다.
          </p>
          <a
            href="#:"
            className="text-[rgba(34,34,34,.5)] rounded-[10px] border px-[16px] py-[8px] text-[12px]"
          >
            SHOP 바로가기
          </a>
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
