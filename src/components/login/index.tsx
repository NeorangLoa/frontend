import axios from 'axios';
import React, { useState } from 'react';

export default function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setId = (e:any) =>{
    setEmail(e.target.value)
    console.log(email)
  }

  const setPw = (e:any) =>{
    setPassword(e.target.value)
    console.log(password)
  }

  const handleLogin =async (e:any) => {
    console.log(email);
    console.log(password);
    try{
      const response =await axios.post(`http://localhost:8080/api/v1/login`,{email,password},{ withCredentials: true })
      console.log(response)
    }catch(e){
      console.log(e);
    }
  }

  return (
    <fieldset className="loginForm">
      <input className='ID' type='text' placeholder='아이디' onChange={setId}></input>
      <input className='PASSWORD' type='password' placeholder='비밀번호' onChange={setPw}></input>
      <button className='LoginButton' onClick={handleLogin}>로그인</button>  {/* submit */}
    </fieldset>
  );
}
