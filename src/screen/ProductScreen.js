import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Bookmark, DownIcon } from "../components/icons";
import Delivery from "../page/images/delivery.png";
import guidedImg1 from "../page/images/img-guide-item-01.svg";
import guidedImg2 from "../page/images/img-guide-item-02.svg";
import guidedImg3 from "../page/images/img-guide-item-03.svg";

const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`http://localhost:3001/products/${id}`);

      setProduct(data);
    };
    fetchProducts();
  }, [id]);

  return (
    <div className="w-full h-full">
      <div className=" flex justify-center pt-[30px] pr-[40px] pb-[120px]">
        <div className="ml-10 mr-8 ">
          <div className="overflow-hidden relative rounded-[8px] bg-[#ebf0f5]">
            <img src={product.image_url} alt="1" />
          </div>
        </div>

        {/* Product Detail Info */}
        <div className=" w-[50%]  h-full border-l-[2px] border-[#ebebeb] pl-8">
          {/* Title */}
          <div>
            {/* <Link
              to="/"
              className="overflow-hidden inline-block align-top leading-[17px] pt-[2px] font-bold text-[#333] whitespace-nowrap text-ellipsis border-b-[1px] border-[#222]"
            >
              {product.brand}
            </Link> */}
            <p className="mb-[4px] text-[18px] tracking-[-.09px] font-normal pt-1">
              {product.productName}
            </p>
            <p className="text-[14px] tracking-[-.15px] leading-[17px] text-[rgba(34,34,34,.5)]">
              {/* {product.korname} */}
            </p>
          </div>

          {/* Size & 최근거래가  */}
          <div>
            <div className="flex justify-between pt-[19px] pb-[12px] border-b-[1px] border-[#ebebeb]">
              <span className="text-[13px] text-[rgba(34,34,34,.8)] leading-[16px] inline-block pt-[4px] tracking-[-.07px]">
                사이즈
              </span>
              <div>
                <Link
                  to="/"
                  className="flex font-bold text-[16px] leading-[24px] tracking-[-.21px] relative"
                >
                  <span className="mr-[5px]">모든 사이즈</span>
                  <DownIcon />
                </Link>
              </div>
            </div>
            <div className="flex justify-between mt-[11px] min-h-[44px]">
              <span className="pt-[5px] inline-block text-[13px] text-[rgba(34,34,34,.8)]">
                최근 거래가
              </span>
              <div>
                <div className="font-bold text-right">
                  <span className="inline-block text-[20px] leading-[26px]">
                    {product.price}
                  </span>
                  <span className="text-[18px] leading-[26px]">원</span>
                </div>
                <div className="relative  pt-[1px]  text-[#31b46e]">
                  <p className="before:content-[''] before:absolute pl-[14px] before:bottom-[50%] before:left-0 before:mb-[-6px] before:border-[5px] before:border-[rgba(0,0,0,0)] before:border-t-[#31b46e]">
                    4,000원 (-2.8%)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 구매 / 판매 & 관심상품  */}
          <div>
            <div className="flex mt-[17px] h-[60px]">
              <Link
                to="/"
                className="bg-[#ef6253] flex flex-1 text-white rounded-[10px] items-center "
              >
                <strong className="w-[55px] text-center text-[18px] tracking-[-.27px] border-r-[1px] border-[rgba(34,34,34,.2)]">
                  구매
                </strong>
                <div className="ml-[10px] leading-[15px]">
                  <span className="block">
                    <span className="inline-block  font-bold text-[15px]">
                      140,000
                    </span>
                    <span className="text-[14px] font-bold">원</span>
                  </span>
                  <span className="text-[11px] font-light text-white">
                    즉시 구매가
                  </span>
                </div>
              </Link>
              <Link
                to="/"
                className="bg-[#41b979]  ml-[10px] flex flex-1 text-white rounded-[10px] items-center"
              >
                <strong className=" w-[55px] text-center text-[18px] tracking-[-.27px] border-r-[1px] border-[rgba(34,34,34,.2)]">
                  판매
                </strong>
                <div className="ml-[10px] leading-[15px]">
                  <span className="block">
                    <span className="inline-block  font-bold text-[15px]">
                      140,000
                    </span>
                    <span className="text-[14px] font-bold">원</span>
                  </span>
                  <span className="text-[11px] text-white] font-light">
                    즉시 판매가
                  </span>
                </div>
              </Link>
            </div>

            {/* 관심상품 */}
            <Link
              to="/"
              className="mt-[12px] h-[60px] leading-[58px] flex justify-center  items-center border-[1px] border-[#ebebeb] rounded-[10px] text-[#333]"
            >
              <Bookmark />
              <span className="ml-[4px] text-[15px] font-normal tracking-normal">
                관심상품
              </span>
              <span className="ml-[4px] text-[15px] font-semibold tracking-normal">
                5,163
              </span>
            </Link>
          </div>
          {/* 구매, 판매 & 관심상품 End */}

          {/* 상품정보 */}
          <div>
            <h3 className="pb-[13px] leading-[22px] pt-[39px] pr-[20px] text-[18px] font-bold">
              상품정보
            </h3>
            <div className="border-t-[1px] border-b-[1px] border-[#ebebeb]">
              <div className="flex min-h-[20px] pt-[20px] pb-[20px]">
                <div className="flex flex-col border-r-[1px] px-[12px] flex-1">
                  <span className="leading-[14px] text-[12px] text-[rgba(34,34,34,.5)] tracking-[-.33px]">
                    모델번호
                  </span>
                  <span className=" font-medium mt-[4px] leading-[17px] text-[14px]">
                    DD1399-400
                  </span>
                </div>

                <div className="flex flex-col border-r-[1px] px-[12px] flex-1">
                  <span className="leading-[14px] text-[12px] text-[rgba(34,34,34,.5)] tracking-[-.33px]">
                    출시일
                  </span>
                  <span className=" font-normal mt-[4px] leading-[17px] text-[14px]">
                    22/06/21
                  </span>
                </div>
                <div className="flex flex-col border-r-[1px] px-[12px] flex-1">
                  <span className="leading-[14px] text-[12px] text-[rgba(34,34,34,.5)] tracking-[-.33px]">
                    컬러
                  </span>
                  <span className=" font-normal mt-[4px] leading-[17px] text-[14px]">
                    LASER BLUE/LASER/BLUE/WHITE
                  </span>
                </div>

                <div className="flex flex-col  px-[12px] flex-1">
                  <span className="leading-[14px] text-[12px] text-[rgba(34,34,34,.5)] tracking-[-.33px]">
                    발매가
                  </span>
                  <span className=" font-normal mt-[4px] leading-[17px] text-[14px]">
                    139,000원
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 상품정보  END */}

          {/* 배송정보 */}
          <div>
            <h3 className="font-normal text-[rgba(34,34,34,.8)] text-[14px] leading-[17px] tracking-[-.21px] pt-[39px]">
              배송 정보
            </h3>
            <div className="pt-[19px] pb-[10px]">
              <div className="flex items-center w-full">
                <div className="w-[40px] h-[40px] mr-[14px] flex-none">
                  <img src={Delivery} alt="delviery" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] tracking-[-.21px] leading-[17px]">
                    <span className="font-semibold">일반배송</span>
                    <span className=""> 3,000원</span>
                  </p>
                  <p className="leading-[16px] mt-[3px] text-[14px] text-[rgba(34,34,34,.5)]">
                    검수 후 배송 5-7일 내 도착 예정
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 배송정보 END */}

          {/* 정품 보증 Notice */}
          <div className="pt-[40px]">
            <ul>
              <li className="flex overflow-hidden">
                <div className="w-[40px] mr-[14px]">
                  <img src={guidedImg1} alt="1" />
                </div>
                <div>
                  <strong className="block leading-[16px] text-[13px] font-semibold">
                    100% 정품 보증
                  </strong>
                  <p className="mt-[1px] leading-[16px] text-[13px] text-[rgba(34,34,34,.5)]">
                    KREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를
                    보상합니다.
                  </p>
                </div>
              </li>
              <li className="flex overflow-hidden mt-[20px]">
                <div className="w-[40px] mr-[14px]">
                  <img src={guidedImg2} alt="1" />
                </div>
                <div>
                  <strong className="block leading-[16px] text-[13px] font-semibold">
                    엄격한 다중 검수
                  </strong>
                  <p className="mt-[1px] leading-[16px] text-[13px] text-[rgba(34,34,34,.5)]">
                    모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의
                    체계적인 시스템을 거쳐 검수를 진행합니다.
                  </p>
                </div>
              </li>
              <li className="flex overflow-hidden mt-[20px]">
                <div className="w-[40px] mr-[14px]">
                  <img src={guidedImg3} alt="1" />
                </div>
                <div>
                  <strong className="block leading-[16px] text-[13px] font-semibold">
                    정품 인증 패키지
                  </strong>
                  <p className="mt-[1px] leading-[16px] text-[13px] text-[rgba(34,34,34,.5)]">
                    검수에 합격한 경우에 한하여 KREAM의 정품 인증 패키지가
                    포함된 상품이 배송됩니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* 정품 보증 Notice END */}

          {/* 공지사항  */}
          <p className="pt-[40px] mt-[20px] text-[12px] leading-[16px] border-t-[1px] border-[#f0f0f0] text-[rgba(34,34,34,.5)]">
            크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
            상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한
            의무와 책임은 각 판매자에게 있습니다. 단, 거래과정에서 검수하고
            보증하는 내용에 대한 책임은 크림(주)에 있습니다.
          </p>
          {/* 공지사항 END */}
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
