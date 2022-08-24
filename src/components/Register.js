import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
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
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("패스워드가 일치하지 않습니다.");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-full h-screen">
      <div className="w-[400px] my-0 mx-auto pt-[60px] pb-[160px] color">
        <header>
          <h2 className="text-center text-[32px] pb-[42px] font-semibold ">
            회원가입
          </h2>
        </header>
        <form className="mt-[20px]" onSubmit={onSubmit}>
          <label className="font-bold" htmlFor="name">
            이름
          </label>
          <input
            type="text"
            className="login-input"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />

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
            required
          />

          <label className="font-bold" htmlFor="password">
            비밀번호
          </label>
          <input
            type="password"
            className="login-input"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />

          <label className="font-bold" htmlFor="password2">
            비밀번호
          </label>
          <input
            type="password"
            className="login-input"
            id="password2"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          />
          <div className="pt-[10px]">
            <button className="login-button">가입하기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
