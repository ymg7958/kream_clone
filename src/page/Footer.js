import React from "react";
import { Link } from "react-router-dom";
import escrow from "./images/footer_escrow.da8308f.png";

const Footer = () => {
  return (
    <footer className="py-[50px] px-[40px]">
      <div className="flex justify-between pb-[56px] border-b-[1px] border-[#ebebeb]">
        <div className="flex ">
          <div className="w-[160px]">
            <strong className="text-[16px]">이용안내</strong>
            <ul className="pt-[16px]">
              <li>
                <a
                  href="#:"
                  className="text-[14px] inline-block text-[rgba(34,34,34,.5)]"
                >
                  검수기준
                </a>
              </li>
              <li className="mt-[12px]">
                <a
                  href="#:"
                  className="text-[14px] inline-block text-[rgba(34,34,34,.5)] "
                >
                  이용정책
                </a>
              </li>
              <li className="mt-[12px]">
                <a
                  href="#:"
                  className="text-[14px] inline-block text-[rgba(34,34,34,.5)] "
                >
                  페널티 정책
                </a>
              </li>
              <li className="mt-[12px]">
                <a
                  href="#:"
                  className="text-[14px] inline-block text-[rgba(34,34,34,.5)] "
                >
                  커뮤니티 가이드라인
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-[80px]">
            <strong>고객지원</strong>
            <ul className="pt-[16px]">
              <li>
                <Link
                  to="/"
                  className="text-[14px] inline-block text-[rgba(34,34,34,.5)]"
                >
                  공지사항
                </Link>
              </li>
              <li className="mt-[12px]">
                <Link
                  to="/"
                  className="text-[14px] inline-block text-[rgba(34,34,34,.5)]"
                >
                  서비스 소개
                </Link>
              </li>
              <li className="mt-[12px]">
                <Link
                  to="/"
                  className="text-[14px] inline-block text-[rgba(34,34,34,.5)]"
                >
                  쇼룸 안내
                </Link>
              </li>
              <li className="mt-[12px]">
                <Link
                  to="/"
                  className="text-[14px] inline-block text-[rgba(34,34,34,.5)]"
                >
                  판매자 방문접수
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <strong>고객센터 1588-7813</strong>
          <div className="mt-[8px]">
            <p className="leading-[17px] text-[13px] text-[rgba(34,34,34,.5)]">
              <span className="mr-[4px]">운영시간</span> 평일 11:00 - 18:00 (토,
              일, 공휴일 휴무)
            </p>
            <p className="mt-[8px] text-[13px] text-[rgba(34,34,34,.5)]">
              <span className="mr-[4px]">점심시간</span> 평일 13:00 - 14:00
            </p>
          </div>
          <p className="mt-[12px] text-[13px]">
            1:1 문의하기는 앱에서만 가능합니다.
          </p>
          <div className="pt-[17px]">
            <Link
              to="/notice"
              className="bg-[#222] text-[#fafafa] font-[600] text-[12px] h-[34px] leading-[32px] px-[14px] cursor-pointer  inline-block"
            >
              자주 묻는 질문
            </Link>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="mt-[30px] relative flex justify-between">
        <ul className="flex pb-[16px]">
          <li className="mr-[20px]">
            <Link
              to="/"
              className="text-[14px] text-black block tracking-[-0.21px]"
            >
              회사소개
            </Link>
          </li>
          <li className="mr-[20px]">
            <Link
              to="/"
              className="text-[14px] text-black block tracking-[-0.21px]"
            >
              인재채용
            </Link>
          </li>
          <li className="mr-[20px]">
            <Link
              to="/"
              className="text-[14px] text-black block tracking-[-0.21px]"
            >
              이용약관
            </Link>
          </li>
          <li className="mr-[20px]">
            <Link to="/" className="text-[14px] text-black block font-bold">
              개인정보처리방침
            </Link>
          </li>
        </ul>

        {/* SNS GROUPS */}
        <div className="">
          <a
            href="https://www.instagram.com/kream.co.kr/"
            target="blank"
            className="mr-6"
          >
            1
          </a>
          <a
            href="https://www.facebook.com/kream.offcial/"
            target="blank"
            className="mr-6"
          >
            2
          </a>
          <a
            href="https://pf.kakao.com/_adpxlxb"
            target="blank"
            className="mr-6"
          >
            3
          </a>
        </div>
      </div>
      <div>
        <div>
          <p className="leading-[20px] text-[13px] tracking-[-.07px] text-[rgba(34,34,34,.5)]">
            크림 주식회사: 대표 김창욱 &nbsp; 사업자등록번호: 570-88-01618
            &nbsp;&nbsp;
            <a className="underline" href="#:">
              사업자정보확인
            </a>{" "}
            &nbsp;&nbsp;통신판매업: 제 2021-성남분당C-0093호
          </p>
          <p className="mt-[2px] leading-[20px] text-[13px] tracking-[-.07px] text-[rgba(34,34,34,.5)]">
            사업장소재지: 경기도 성남시 분당구 분당내곡로 117, 8층&nbsp;&nbsp;
            &nbsp;개인정보관리책임자: 김미진 &nbsp;&nbsp;&nbsp;호스팅 서비스:
            네이버 클라우드(주)
          </p>
        </div>
      </div>

      {/* KCP MARK */}
      <div className="pt-[42px] pb-[22px]">
        <img
          src={escrow}
          className="inline w-[32px] h-[32px] mr-[8px] align-top"
          alt="escrow"
        />
        <p className="inline-block text-[12px] text-[rgba(34,34,34,.4)] w-[364px] leading-[16px] tracking-[-0.06px]">
          고객님의 안전거래를 위해 현금 등으로 결제시 KREAM에서 가입한 NHN KCP의
          구매안전서비시를 이용하실 수 있습니다.
        </p>
      </div>

      <div className="flex pt-[12px]  items-end">
        <p className="max-w-[605px] text-[12px] text-[rgba(34,34,34,.4)] leading-[-.06px]">
          크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
          판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단,
          거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
        </p>
        <p className="text-[12px] ml-auto flex-shrink-0 text-[rgba(34,34,34,.4)]">
          © KREAM Corp.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
