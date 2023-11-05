import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpDB } from "../redux/modules/user";
import { emailCheck } from "../shared/SignUpCheck";

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (email === "" || password === "" || nickname === "") {
      alert("이메일,비밀번호,닉네임을 모두 입력해 주세요");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    if (password.length < 6) {
      alert("비밀번호는 6자리이상 작성해 주시기 바랍니다");
      return;
    }

    if (!emailCheck(email)) {
      alert("이메일 형식이 맞지 않습니다");
      return;
    }

    dispatch(signUpDB(email, password, nickname, confirmPassword));
  };

  return (
    <>
      <div>Sign Up</div>
      <input
        placeholder="아이디를 입력하세요(E-mail)"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="닉네임을 입력하세요"
        onChange={(e) => {
          setNickname(e.target.value);
        }}
      />
      <input
        placeholder="비밀 번호를 입력하세요"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        placeholder="비밀 번호를 다시 입력 하세요"
        type="password"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <button
        onClick={handleSignUp}
        disabled={
          email === "" ||
          password === "" ||
          confirmPassword === "" ||
          nickname === "" ||
          password !== confirmPassword ||
          password.length < 6 ||
          !emailCheck(email)
        }
      >
        회원가입
      </button>
    </>
  );
};

export default SignUp;
