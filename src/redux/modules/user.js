import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "../../shared/cookie";

// action
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const LOAD_TOKEN = "LOAD_TOKEN";
const SIGN_UP = "SIGN_UP";

// action creator
const login = (user) => {
  return { type: LOG_IN, user };
};
const logout = (user) => {
  return { type: LOG_OUT, user };
};
const loadToken = (token) => {
  return { type: LOAD_TOKEN, token };
};
const signUp = (user) => {
  return { type: SIGN_UP, user };
};

// initialState
const initialState = {
  userInfo: {
    email: "",
    password: "",
  },
  is_login: false,
  token: null,
};

// thunk
// 토큰 로드 액션
export const loadTokenFB = () => {
  return function (dispatch) {
    if (getCookie("Authorization")) {
      dispatch(loadToken());
    }
  };
};
// 회원 가입
export const signUpDB = (email, nickname, password, confirmPassword) => {
  return function (dispatch, getState) {
    axios
      .post("", {
        email,
        nickname,
        password,
        confirmPassword,
      })
      .then((response) => {
        dispatch(
          signUp({
            is_login: true,
            token: response.data.token,
            email: email,
            nickname: nickname,
          })
        );
        setCookie("Authorization", response.data.token);
        setCookie("nickname", nickname);
        window.alert("회원가입을 축하합니다!");
      })
      .catch((error) => {
        console.log("회원가입 DB Error", error);
        window.alert("아이디, 닉네임 또는 비밀번호를 확인해주세요.");
      });
  };
};

// 로그인
export const loginDB = (email, password) => {
  return function (dispatch, getState) {
    axios
      .post("", {
        email: email,
        password: password,
      })
      .then((response) => {
        dispatch(
          login({
            is_login: true,
            token: response.data.token,
          })
        );
        setCookie("Authorization", response.data.token);
        setCookie("nickname", response.data.nickname);
      })
      .catch((error) => {
        console.log(error);
        window.alert("아이디 또는 비밀번호 오류");
      });
  };
};

//reducer
const userReducer = (state = initialState, action) => {
  const { user } = action.payload;
  switch (action.type) {
    case LOG_IN:
      setCookie("is_login", "true");
      return {
        ...state,
        token: user.token,
        user: user,
        is_login: true,
      };
    case LOG_OUT:
      deleteCookie("is_login");
      localStorage.removeItem("nickname");
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        is_login: false,
        token: null,
      };
    case SIGN_UP:
      setCookie("is_login", "true");
      return {
        ...state,
        token: user.token,
        user: {
          email: user.email,
          nickname: user.nickname,
        },
        is_login: true,
      };
    default:
      return state;
  }
};

export default userReducer;
