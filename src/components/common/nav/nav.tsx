import React from "react";
import './nav.scss'

export default function Nav(){
    return(
      <div className="navlayout">
        <div className="space_between">
          <div className="rightdiv">
            <div className="navdiv">
              <div className="navbutton">
                나랑로아
              </div>
              <div className="navbutton">
                자유게시판
              </div>
              <div className="navbutton">
                레이드게시판
              </div>
            </div>
          </div>
          <div className="leftdiv">
            <div className="navbutton">로그인</div>
          </div>
        </div>
      </div>
    )
}