import { deleteCookie, getCookie, setCookie } from "../../shared/cookie";
import { auth } from "../../shared/firebase";
import firebase from "firebase/compat/app";

// action
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creator
const logout = (user) => {
  return { type: LOG_OUT, user };
};
const getuser = (user) => {
  return { type: GET_USER, user };
};
const setuser = (user) => {
  return { type: SET_USER, user };
};

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// thunk
// 회원 가입
const signUpFB = (email, password, nickname, { navigate }) => {
  return function (dispatch, getState) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        auth.currentUser
          .updateProfile({
            displayName: nickname,
          })
          .then(() => {
            dispatch(
              setuser({
                email: email,
                password: password,
                displayName: nickname,
                user_profile: "",
              })
            );
            navigate("/");
          })
          .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.error("회원 가입 실패", errorCode, errorMessage);
          });

        // Signed in
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };
};

// 로그인
const loginFB = (email, password, { navigate }) => {
  return function (dispatch, getState) {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);

          dispatch(
            setuser({
              nickname: user.user.displayName,
              email: email,
              user_profile: "",
              uid: user.user.uid,
            })
          );
          navigate("/");
          console.log(setuser);
        })
        .catch((error) => {
          alert(
            "등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력하였습니다."
          );
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    });
  };
};

// 로그인 체크
const loginCheckFB = () => {
  return function (dispatch, getState) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setuser({
            user_name: user.displayName,
            user_profile: "",
            id: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  };
};

const logoutFB = () => {
  return function (dispatch, getState) {
    auth.signOut().then(() => {
      dispatch(logout());
      // push와 다른 점: 페이지를 바꿔치기 해서 뒤로가기 해도 예전 페이지가 안나옴
    });
  };
};

//reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      setCookie("is_login", "success");
      return {
        ...state,
        user: action.payload,
        is_login: true,
      };
    case LOG_OUT:
      deleteCookie("is_login");
      return {
        ...state,
        user: null,
        is_login: false,
      };
    case GET_USER:
      return state;

    default:
      return state;
  }
};
export { logout, getuser, setuser, loginFB, signUpFB, loginCheckFB, logoutFB };

export default userReducer;
