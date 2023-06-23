import React, { useState } from 'react';
import logo from '../../assets/img/썸네일 수정.png';
import LoginComponent from 'src/components/login';
import SignUpComponent from 'src/components/signup';
import './index.scss';

export default function Login() {

  const [viewLoginSignup, setViewLoginSignup] = useState(true);

  return (
    <div className='page'>
      <div className="left">
        <div className='leftForm'>
          <h1 className='title'>나랑로아</h1>
          <span className='introduction'>
            <p>나랑로아의 회원이 되어</p>
            <p>함께 레이드를 돌 사람을 찾아보세요</p>
          </span>
        </div>
      </div>

      <div className="right">
        <div className='rightForm'>
          {/* <button className='sociallogin'>소셜로그인</button> */}

          <h1 className='title'>나랑로아</h1>
          <div className='buttonGroup'>
            <button
              className='loginButton'
              onClick={() => {setViewLoginSignup(true);}}
            >
              로그인
            </button>
            <button
              className='signupButton'
              onClick={() => {setViewLoginSignup(false);}}
            >
              회원가입
            </button>
          </div>

          { viewLoginSignup ? <LoginComponent/> : <SignUpComponent/> }
        </div>
      </div>
    </div>
  );
}
