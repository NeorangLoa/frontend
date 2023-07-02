import React from "react";

export default function SignUpComponent(){
    return(
        <fieldset className="SignUpForm">
            <input className='EMAIL' placeholder='이메일'></input>
            <input className='ID' type='text' placeholder='아이디'></input>
            <input className='PASSWORD' type='password' placeholder='비밀번호'></input>
            <input className='rePASSWORD' type='password' placeholder='비밀번호 확인'></input>
            <button className='SignUpButton'>회원가입</button>  {/* submit */}
        </fieldset>
    )
}