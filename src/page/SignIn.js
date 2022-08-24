import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./images/bg_login_top.png";
import visibilityIcon from "./images/visibilityIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-full h-screen">
      <div className="w-[400px] my-0 mx-auto pt-[60px] pb-[160px]">
        <header>
          <div className="pb-[50px]">
            <img
              src={Logo}
              alt="Logo"
              className="w-[250px] h-[56px] my-0 mx-auto"
            />
          </div>
        </header>
        <form className="mt-[20px]" onSubmit={onSubmit}>
          <label className="font-bold" htmlFor="email">
            이메일 주소
          </label>
          <input
            type="email"
            className="login-input"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="kream@kream.co.kr"
          />
          <div className="relative">
            <label className="font-bold" htmlFor="password">
              비밀번호
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="login-input"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="visible"
              className="absolute cursor-pointer top-[30%] right-[1%] p-1"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <div className="pt-[10px]">
            <button className="login-button">로그인</button>
          </div>
        </form>
        <div>
          <ul className="flex justify-between mt-[20px] mx-5">
            <li className=" text-sm">
              <Link to="/register">이메일 가입</Link>
            </li>
            <li className="text-sm">
              <Link to="/">이메일 찾기</Link>
            </li>
            <li className="text-sm">
              <a href="#:">비밀번호 찾기</a>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <button className="border-[1.5px] h-[52px] text-[16px] leading-[50px] font-bold border-[#d3d3d3] rounded-lg w-full mb-2 ">
            네이버로 로그인
          </button>
          <button className="border-[1.5px] h-[52px] text-[16px] leading-[50px] font-bold border-[#d3d3d3] rounded-lg w-full">
            Apple로 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
