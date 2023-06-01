import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiKey } from "src/api";
import { UserinfoData } from "src/types/Types";
import './charinfo.scss'

export default function Charinfo(){

  const api:string = apiKey
  
  // const nickname:string = "그때그떨림"

  // const [userData, setUserData] = useState<UserinfoData>();

  // useEffect(()=>{
  //   const cardFetchData = async () => {
  //     try{
  //       const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}/profiles`,{
  //         headers :{
  //           'Authorization': `Bearer ${apiKey}`
  //         }
  //     });
  //     const responseData:UserinfoData = response.data; 
  //     console.log(responseData)
  //     setUserData(responseData);
  //   }catch(error){
  //     console.error(error)
  //   }};

  //   cardFetchData();
  // },[]);

    return(
        <div className="detailCharInfoLayout">
          <div className="charRightDiv">
            <div className="charLevelStat">
              <div className="charLevel">
                전투:
                아이템:
              </div>
              <div className="charStat"/*이부분 필터링 적용해서 Stats부분 관리*/>
                특화 신속
                1829 500
                특성합 2400
                공격력 40000  
                최대 생명력 140244 
              </div>
            </div>
            <div className="charEngraving">
              각인
            </div>
          </div>

          <div className="charLeftDiv">
            left
          </div>
        </div>
    )
}