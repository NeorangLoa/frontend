import React from "react";
import './nav.scss'
import { useNavigate } from "react-router-dom";

export default function Nav(){

  const navigate = useNavigate();


  const gotomain = () =>{
    navigate(`/`)
  }
  
  const gotopost = () =>{
    navigate(`/board/free/list`)
  }

  const gotologin = ()=>{
    navigate(`/login`)
  }

  const gotoraidpost = () =>{
    navigate(`/board/raid/list`)
  }


    return(
      <div className="navlayout">
        <div className="space_between">
          <div className="rightdiv">
            <div className="navdiv">
              <div className="navbutton" onClick={gotomain}>
                나랑로아
              </div>
              <div className="navbutton" onClick={gotopost} >
                자유게시판
              </div>
              <div className="navbutton" onClick={gotoraidpost}>
                레이드게시판
              </div>
            </div>
          </div>
          <div className="leftdiv">
            <div className="navbutton" onClick={gotologin}>로그인</div>
          </div>
        </div>
      </div>
    )
}