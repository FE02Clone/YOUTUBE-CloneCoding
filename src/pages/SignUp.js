import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpDB } from '../redux/modules/user';

const SignUp = () => {
    const dispatch = useDispatch();

    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = () =>{
        dispatch(signUpDB(email, nickname, password, confirmPassword))
    }


    



    return (
       <>
       <div>
        Sign Up
       </div>
       <form>
       <input placeholder="아이디를 입력하세요(E-mail)" onChange={(e)=>{setEmail(e.target.value)}}/>
       <input placeholder="닉네임을 입력하세요" onChange={(e)=>{setNickname(e.target.value)}}/>
       <input placeholder='비밀 번호를 입력하세요' type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
       <input placeholder='비밀 번호를 다시 입력 하세요' type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
       <button
       onClick={handleSignUp}
       >회원가입</button>
       </form>
      


       </>
    );
};

export default SignUp;