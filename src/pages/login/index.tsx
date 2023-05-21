import React from 'react';
import logo from '../../assets/img/썸네일 수정.png';
import LoginComponent from 'src/components/login';
import './index.scss';

export default function Login() {
  return (
    <div className='page'>
      <div className="left">
        <h1 className='title'>나랑로아</h1>
        <a className='introduction'>
          <p>나랑로아의 회원이 되어</p>
          <p>함께 레이드를 돌 사람을 찾아보세요</p>
        </a>
      </div>

      <div className="right">
        <img src={logo} className='logo' />
        <button className='sociallogin'>소셜로그인</button>

        <LoginComponent />

        <a>아이디가 없으신가요?</a>
        <button className='moveTosignup'>회원가입</button>
      </div>
    </div>
  );
}
