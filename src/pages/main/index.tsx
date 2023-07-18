import React from "react";
import MainComponent from 'src/components/main/maincomponent';
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
        if (name === ''){
          alert("이름을 입력해주세요")
        }else{
          const queryParems = new URLSearchParams();
          queryParems.set('q',name);
          const queryString = queryParems.toString();
          navigate(`/char?${queryString}`);
        }
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