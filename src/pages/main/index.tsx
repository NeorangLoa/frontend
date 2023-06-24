import React, { useEffect, useState } from "react";
import MainComponent from 'src/components/main';
import './index.scss';
import { apiKey } from "src/api";
import { useNavigate } from "react-router-dom";


export default function Main(){

    const api:string = apiKey

    const [name, setName] = useState('');

    const onSearch = (e:any) => {
      setName(e.target.value)
      console.log(name);
    }
  

    const navigate = useNavigate();
  
    const handleSearch = () =>{
      const queryParems = new URLSearchParams();
      queryParems.set('q',name);
      const queryString = queryParems.toString();
      navigate(`/char?${queryString}`);
    }

    return(
        <div className="page">
            <div className="up">
                <h1 className='title'>나랑로아</h1>
                <div className="search">
                    <input className="searchinput" type="text" placeholder="검색할 캐릭터명을 입력하세요" onChange={onSearch} value={name}  />
                    <input className="searchbutton" onClick={handleSearch} type="button" />
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