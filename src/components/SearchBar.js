import React from "react";
import { Search } from "./icons";

const SearchBar = ({ setSearchBox }) => {
  const onClick = () => {
    setSearchBox(false);
  };
  return (
    <div className="fixed bg-white top-0 left-0 h-[250px] w-full">
      <div className="">
        <div className="relative w-[704px]  h-[40px] my-10 mx-auto flex">
          <div className="absolute top-2 left-4">
            <Search />
          </div>
          <input
            className="bg-[#f4f4f4] w-full rounded-lg outline-none h-[100%] pl-12 "
            type="text"
            placeholder="브랜드명, 모델병, 모델번호 등"
          />
          <button onClick={onClick} className="w-10 ml-3 text-[17px] font-xl">
            취소
          </button>
        </div>
      </div>
      <div className="">
        <ul className="flex px-0 my-0 mx-auto w-[704px]">
          <li className="mr-10 flex flex-col items-center">
            <a href="#:">
              <img
                className="w-[75px] h-[70px]"
                src="https://kream-phinf.pstatic.net/MjAyMjA2MTBfMjgx/MDAxNjU0ODUxNDY5Nzc1.CkNdngFvIj8B9xkE1tQEFPzCiwQXFs7iWB0k1T_bM2cg.E7PcKzH9hfjhWFlVqufleMvRPKkm1UipRzGOX8BFq8gg.PNG/a_0996942690604b21b8743373aeabf1c5.png"
                alt="1"
              />
              <p>Apple</p>
            </a>
          </li>
          <li className="mr-10">
            <a href="#:">
              <img
                className="w-[75px] h-[70px]"
                src="https://kream-phinf.pstatic.net/MjAyMjA1MjdfMTU2/MDAxNjUzNjE3MTk0NDcy.p3nbHutLw-tkXfO_ohkmnBwuldiX2Mt20GggSC-TS_0g.WrAEs6RrPiUbdjRuphjrfKoymOOmdvkmbZ-UUrlIRNcg.PNG/a_9dd8d8db61904787893b2053ae8489c9.png"
                alt="1"
              />
            </a>
            <p>스캇</p>
          </li>
          <li className="mr-10">
            <a href="#:">
              <img
                className="w-[75px] h-[70px]"
                src="https://kream-phinf.pstatic.net/MjAyMjA1MjdfMTAx/MDAxNjUzNjIzMDk1NDE1.tr8eHbLAeXvbbWydDUMQrGEdKAV56rvhDIfr8GNkumUg.tkY7lAhce6edDs5xilz02DDiD6CinK58lmBn58oLNEYg.PNG/a_ab792716703c4509918a835e2d6502a1.png"
                alt="1"
              />
            </a>
            <p>샤넬</p>
          </li>
          <li className="mr-10">
            <a href="#:">
              <img
                className="w-[75px] h-[70px]"
                src="https://kream-phinf.pstatic.net/MjAyMjA2MDNfODUg/MDAxNjU0MjUwMDYxMjMz.zF2GWqtCBUv_vOAUE8P7ZxZa4KkQg24L2eb9e5D2o_Qg.U8jIoZ6YWTlQw673vFBMEv7wpOcSPlrKGaLe9_oHCKAg.PNG/a_5a1e7b6bfcbf47d6b691010db4ab6d2b.png"
                alt="1"
              />
            </a>
            <p>레고</p>
          </li>
          <li className="mr-10">
            <a href="#:">
              <img
                className="w-[75px] h-[70px]"
                src="https://kream-phinf.pstatic.net/MjAyMjA2MTBfMjgz/MDAxNjU0ODI4NDEwMDI5.DfOCPDYZ2atdEqlBAm4vxFa8cDI2EbXL3VxhzkxQe5Ug.Levw1rtieQ2ANubmB7qEhfCsWLWfNeJKFoT8PynjxkIg.PNG/a_5f96c62876bc4ccc83e8b5af164f1e1d.png"
                alt="1"
              />
            </a>
            <p>덩크</p>
          </li>
          <li>
            <a href="#:">
              <img
                className="w-[75px] h-[70px]"
                src="https://kream-phinf.pstatic.net/MjAyMjA2MTBfMSAg/MDAxNjU0ODUxNDkxMzQ5.H1e9kACGeeW6JMr-Ub2gYzCi8BWq9zW9VfRLbOZuBIAg.NDFz6M-oiOHHWbIcBudbJtbimmWEgKCIfyUNtYtaWmwg.PNG/a_10050d8e51094e3582fefc63341b9d83.png"
                alt="1"
              />
            </a>
            <p>우영미</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
