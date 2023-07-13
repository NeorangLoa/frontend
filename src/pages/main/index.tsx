import React from "react";
import MainComponent from 'src/components/main/maincomponent';
import './index.scss';

export default function Main() {
    return(
        <div className="page">
            <div className="up">
                <div className="upForm">
                    <h1 className='title'>나랑로아</h1>
                    <div className="search">
                        <input className="searchinput" type="text" placeholder="캐릭터 검색" />
                        <input className="searchbutton" type="button" />
                    </div>
                </div>
            </div>

            <div className="down">
                <div className="downForm">
                    <MainComponent name="자유 게시판" />
                    <MainComponent name="레이드 게시판" />
                    <MainComponent name="어비스 던전" />
                    <MainComponent name="도전 가디언" />
                    <MainComponent name="로스트아크 이벤트" className="LoAevent" />
                </div>
            </div>
        </div>
    )
}