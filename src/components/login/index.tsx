import React, { useState } from 'react';

export default function LoginComponent() {
  const [userIDInput, setUserIDInput] = useState('');
  const [userPWInput, setUserPWInput] = useState('');
  const [showPW, setShowPW] = useState('');

  return (
    <fieldset className="loginForm">
      <input className='ID' placeholder='아이디'></input>
      <input className='PASSWORD' placeholder='비밀번호'></input>
      <button className='LoginButton'>로그인</button>  {/* submit */}
    </fieldset>
  );
}
