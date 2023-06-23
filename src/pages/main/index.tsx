import React from "react";
import MainComponent from 'src/components/main';
import './index.scss';

export default function Main(){
    return(
        <div className="page">
            <div className="navbar">
                <span>나랑로아</span>
                <span>자유게시판</span>
                <span>레이드 게시판</span>
                <span>로그인</span>
            </div>

            <div className="up">
                <h1 className='title'>나랑로아</h1>
                <div className="search">
                    <input className="searchinput" type="text" placeholder="캐릭터 검색 (?)" />
                    <input className="searchbutton" type="button" />
                </div>
            </div>

            <div className="down">
                <div className="mainForm">
                    <p>자유 게시판</p>
                    <MainComponent />
                </div>
                <div className="mainForm">
                    <p>레이드 게시판</p>
                    <MainComponent />
                </div>
                <div className="mainForm">
                    <p>로스트아크 정보</p>
                    <MainComponent />
                </div>
                <div className="mainForm">
                    <p>로스트아크 정보</p>
                    <MainComponent />
                </div>
                <div className="mainForm">
                    <p>로스트아크 이벤트</p>
                    <MainComponent />
                </div>
            </div>
        </div>
    )
}