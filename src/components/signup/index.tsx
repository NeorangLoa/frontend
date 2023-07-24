import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpComponent(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setName] = useState('');
  const navigate = useNavigate()


  const setId = (e:any) =>{
    setEmail(e.target.value)
    console.log(email)
  }

  const setPw = (e:any) =>{
    setPassword(e.target.value)
    console.log(password)
  }

  const setNames = (e:any) =>{
    setName(e.target.value)
    console.log(nickname)
  }

  const handleSign =async (e:any) => {
    console.log(email);
    console.log(password);
    console.log(nickname)
    try{
      const response =await axios.post(`http://localhost:8080/api/v1/user`,{email,password,nickname})
      console.log(response)
    }catch(e){
      console.log(e);
    }
    navigate('/')
  }
    
    return(
        <fieldset className="SignUpForm">
            <input className='EMAIL' placeholder='이메일'onChange={setId} value={email} ></input>
            <input className='ID' type='text' placeholder='닉네임' onChange={setNames} value={nickname} ></input>
            <input className='PASSWORD' type='password' placeholder='비밀번호' onChange={setPw}></input>
            <input className='rePASSWORD' type='password' placeholder='비밀번호 확인'></input>
            <button className='SignUpButton' onClick={handleSign}>회원가입</button>  {/* submit */}
        </fieldset>
    )
}