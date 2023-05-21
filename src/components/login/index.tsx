import React, { useState } from 'react';
import '../../css/login';

export default function LoginComponent() {
  const [userIDInput, setUserIDInput] = useState('');
  const [userPWInput, setUserPWInput] = useState('');
  const [showPW, setShowPW] = useState('');

  return (
    <div>
      <div id="left">

      </div>

      <div id="right">
        <img src=''></img>
        <img alt='소셜로그인' />
        <fieldset id="loginForm">
          <input id='ID' placeholder='아이디'></input>
          <input id='PASSWORD' placeholder='비밀번호'></input>
          <button id='LoginButton'>로그인</button>
        </fieldset>
        <p>아이디가 없으신가요?</p>
        <button id='SignUp' placeholder='회원가입'></button>
      </div>
    </div>
  );
}
