import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const setId = (e:any) =>{
    setEmail(e.target.value)
    console.log(email)
  }

  const setPw = (e:any) =>{
    setPassword(e.target.value)
    console.log(password)
  }

  const handleLogin =async (e:any) => {
    //console.log(email);
    //console.log(password);
    try{
      const response =await axios.post(`http://localhost:8080/api/v1/login`,
      {
        email:'hello@gmail.com',
        password:'0805'
      },
      {
        headers:{
          'Access-Control-Allow-Origin': '*',
          withCredentials: true
        }
      }
      )
      console.log(response)
      alert('로그인에 성공했습니다')
    }catch(e){
      console.log(e);
      alert('로그인에 실패했습니다')
    }
    navigate('/')

  }

  return (
    <fieldset className="loginForm">
      <input className='ID' type='text' placeholder='아이디' onChange={setId}></input>
      <input className='PASSWORD' type='password' placeholder='비밀번호' onChange={setPw}></input>
      <button className='LoginButton' onClick={handleLogin}>로그인</button>  {/* submit */}
    </fieldset>
  );
}
