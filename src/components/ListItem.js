import React, { useState, useEffect } from "react";
import products from "../assets/products";
import axios from "axios";
import { Link } from "react-router-dom";
// import brandItems from "../assets/brandItems";

const ListItem = () => {
  const [productsList, setProductsList] = useState([]);
  const [moreProducts, setMoreProducts] = useState(8);

  useEffect(() => {
    const fetchProducts = async () => {
      const URL = "http://localhost:3001/products";
      const { data } = await axios.get(URL);

      setProductsList(data);
    };
    fetchProducts();
  }, []);

  const showMoreProducts = () => {
    setMoreProducts((prevValue) => prevValue + 8);
  };
  //   issue : 삼품정보페이지 뒤로가기 버튼시 불러온 이전데이터가 사라지고 기본값 데이터(products)만 출력됨.

  return (
    <main className="mt-[50px] w-full">
      <div className="mx-auto my-0 max-w-[1280px] px-[40px]">
        <div className="font-bold text-[20px]">Just Dropped</div>
        <div className="text-[14px] tracking-[-.21px] leading-[10px]  text-[rgba(34,34,34,.5)]">
          발매상품
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto my-0 overflow-anchar">
        <ul className="overflow-hidden relative mx-auto my-0 px-[28px] w-full">
          {productsList.slice(0, moreProducts).map((product) => (
            <div
              key={product.id}
              className="relative inline-block align-top my-[20px] px-[12px] w-[25%] ease-in-out "
            >
              <Link
                to={`/product/${product.id}`}
                className="block bg-white rounded-[12px] "
              >
                <div className="">
                  <div className="overflow-hidden relative rounded-[8px] bg-[#ebf0f5]">
                    <img
                      src={product.image_url}
                      alt="1"
                      className="object-fit"
                    />
                  </div>
                </div>
                <div className="mt-3 block">
                  {/* <p className="overflow-hidden inline-block align-top leading-[17px] pt-[2px] font-bold text-[#333] whitespace-nowrap text-ellipsis border-b-[1px] border-[#222]">
                    {product.brand}
                  </p> */}
                  <p className="leading-[17px] mt-[8.5px] max-h-[34px]  overflow-hidden text-ellipsis text-[#222] text-[14px]">
                    {product.productName}
                  </p>
                  <div className="pt-[7px]">
                    <p className="inline-block leading-[17px] text-[15px] font-bold tracking-[-.04px] ">
                      {product.price}
                      <span>원</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </ul>
        <div className="text-center px-[32px]">
          <button
            to="/"
            className="px-[30px] mt-[20px] leading-[40px] border-[1px] border-[#d3d3d3] text-[rgba(34,34,34,.8)] text-center cursor-pointer inline-block  bg-white h-[42px] rounded-[12px] text-[14px] "
            onClick={showMoreProducts}
          >
            더보기
          </button>
        </div>
      </div>
    </main>
  );
};

export default ListItem;
