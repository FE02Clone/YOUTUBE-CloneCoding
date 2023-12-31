import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpFB } from "../redux/modules/user";
import { emailCheck } from "../shared/SignUpCheck";
import { useNavigate } from "react-router";
import styled from "styled-components";

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_name, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (email === "" || password === "" || user_name === "") {
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

    dispatch(signUpFB(email, password, user_name, { navigate }));
  };

  return (
    <StSignUpContainer>
      <StSignUpBox>
        <StTitle>
          <h2>회원가입</h2>
          <p>Sign Up</p>
        </StTitle>
        <StInputBox>
          <StInput1
            placeholder="아이디를 입력하세요(E-mail)"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <StInput1
            placeholder="닉네임을 입력하세요"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <StInput2
            placeholder="비밀 번호를 입력하세요(6자리 이상)"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            password={password}
            confirmPassword={confirmPassword}
          />
          <StInput2
            placeholder="비밀 번호를 다시 입력 하세요"
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            password={password}
            confirmPassword={confirmPassword}
          />
        </StInputBox>

        <StSignUpButton
          onClick={handleSignUp}
          disabled={
            email === "" ||
            password === "" ||
            confirmPassword === "" ||
            user_name === "" ||
            password !== confirmPassword ||
            password.length < 6 ||
            !emailCheck(email)
          }
        >
          회원가입
        </StSignUpButton>
      </StSignUpBox>
    </StSignUpContainer>
  );
};

const StSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffdf7;
`;

const StSignUpBox = styled.div`
  width: 386px;
  margin: 160px auto;
`;

const StTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  border-bottom: solid 1px #acacac;
  margin: 0 auto 32px auto;
  padding-bottom: 25px;
  > h2 {
    font-size: 30px;
    font-weight: 400;
    line-height: 45px;
  }
  > p {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
  }
`;

const StInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const StInput1 = styled.input`
  width: 100%;
  height: 50px;
  border-bottom: solid 1px #acacac;
`;

const StInput2 = styled.input`
  width: 100%;
  height: 50px;
  border-bottom: solid 1px #acacac;
  border: ${(props) =>
    props.confirmPassword && props.password !== props.confirmPassword
      ? "3px solid red"
      : null};
  border: ${(props) =>
    props.confirmPassword && props.password === props.confirmPassword
      ? "3px solid green"
      : ""};
`;

const StSignUpButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(props) => (props.disabled ? "gray" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 25px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    background-color: ${(props) => (props.disabled ? "gray" : "black")};
  }
`;

export default SignUp;
