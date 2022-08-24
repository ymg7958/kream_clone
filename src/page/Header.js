import { useState } from "react";
import { Search } from "../components/icons";
import SearchBar from "../components/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [searchBox, setSearchBox] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="min-h-[100px]">
      <div>
        <nav className="flex px-[40px] py-[8px]  border-b-[1px]">
          <ul className="flex ml-auto text-[12px] text-[rgba(34,34,34,.8)] tracking-[-.06px]">
            {" "}
            <li className="mr-5">
              <Link to="/notice">고객센터</Link>
            </li>
            <li className="mr-5">
              <Link to="/cart">관심상품</Link>
            </li>
            <li className="mr-5">
              <Link to="mypage">마이페이지</Link>
            </li>
            {user ? (
              <li>
                <button onClick={onLogout}>로그아웃</button>
              </li>
            ) : (
              <li>
                <Link to="/sign-in">로그인</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      {/* header main */}
      <div>
        <div className="flex px-[40px] h-[68px] min-w-[320px] items-center">
          <h1>
            <Link to="/">
              <p className="bg-image"></p>
            </Link>
          </h1>
          <div className="ml-auto">
            <nav>
              <ul className="flex ">
                <li className="text-[15px] mr-[40px]">
                  <a href="#:">STYLE</a>
                </li>
                <li className="text-[15px] mr-[40px]">
                  <a href="#:">SHOP</a>
                </li>
                <li className="text-[15px] mr-[40px]">
                  <a href="#:">ABOUT</a>
                </li>
                <div>
                  <button onClick={() => setSearchBox(true)}>
                    <Search />
                  </button>
                  {searchBox && <SearchBar setSearchBox={setSearchBox} />}
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
