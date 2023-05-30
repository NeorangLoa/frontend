import React from 'react';
import logo from '../../assets/img/썸네일 수정.png';
import SignUpComponent from 'src/components/signup';
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

        <SignUpComponent />
        
        <footer>
          <a>이미 아이디가 있으신가요?</a>
          <button className='moveToLogin'>로그인</button>
        </footer>
      </div>
    </div>
  );
}