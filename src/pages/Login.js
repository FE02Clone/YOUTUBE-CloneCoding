import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { emailCheck } from "../shared/SignUpCheck";
import { loginFB } from "../redux/modules/user";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
    dispatch(loginFB(email, password, { navigate }));
  };

  return (
    
    <StLoginContainer>
      <StLoginBox>
        <StTitle>
          <h2>로그인</h2>
          <p>Log in</p>
        </StTitle>
        <StInputBox>
          <StInput
            type="email"
            lavel="아이디"
            value={email}
            onChange={changeId}
            placeholder="이메일을 입력하세요"
          />
          <StInput
            type="password"
            lavel="비밀번호"
            value={password}
            onChange={changePwd}
            placeholder="비밀번호를 입력하세요"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                login();
              }
            }}
          />
        </StInputBox>
        <StSignUpText onClick={() => navigate('/signup')}>회원가입</StSignUpText>
        <StLoginButton
          onClick={() => {
            login();
          }}
          disabled={email === "" || password === "" || !emailCheck(email)}
        >
          로그인
        </StLoginButton>
      </StLoginBox>
    </StLoginContainer>
  );
};

const StLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffdf7;
`;
const StLoginBox = styled.div`
  width: 386px;
  margin: 160px auto;
`;

const StTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  border-bottom: solid 1px #acacac;
  margin: 0 auto 30px auto;
  padding-bottom: 20px;
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
const StInput = styled.input`
  width: 100%;
  height: 50px;
  border-bottom: solid 1px #acacac;
`;

const StSignUpText = styled.div`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
  margin-top: 15px;
`;

const StLoginButton = styled.button`
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

export default Login;
