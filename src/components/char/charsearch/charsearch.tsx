import React from "react";
import './charsearch.scss'

export default function Charsearch(){
    return(
        <div className="charsearchlayout">
          <div className="charsearchbar">
            <input placeholder="입력해주세요" className="searchinput">
            </input>
            <button className="charsearchbutton"/>
          </div>
        </div>
    )
}