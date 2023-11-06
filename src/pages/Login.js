import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { emailCheck } from "../shared/SignUpCheck";
import { loginFB } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeId = (e) => {
    setEmail(e.target.value);
  };

  const changePwd = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    if (email === "" || password === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    dispatch(loginFB(email, password));
  };

  return (
    <>
      <div>Log in</div>
      <input 
      />
    </>
  );
};

export default Login;
