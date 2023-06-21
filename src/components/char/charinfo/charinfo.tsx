import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiKey } from "src/api";
import { Effect, Engraving, EngravingsData, Stat, UserinfoData } from "src/types/Types";
import './charinfo.scss'
import { Stats } from "fs";
import { userInfo } from "os";

export default function Charinfo(){

  const api:string = apiKey
  
  const nickname:string = "그때그떨림"

  const [userData, setUserData] = useState<UserinfoData|undefined>();
  const [userAttackData, setuserAttackData] = useState<Stat[]|undefined>();
  const [userHealthData,setuserHealthData] = useState<Stat[]|undefined>();
  const [userengravingData , setuserengravingData] = useState<Effect[]|undefined>();

  useEffect(()=>{
    const profileFetchData = async () => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}/profiles`,{
          headers :{
            'Authorization': `Bearer ${apiKey}`
          }
      });
      const responseData:UserinfoData = response.data; 
      console.log(responseData)
      setUserData(responseData);

      const userStatFilterData= responseData.Stats;
      console.log(userStatFilterData)

      const userAttackStat = userStatFilterData.filter((e:Stat)=> e.Type==='공격력')
      console.log(userAttackStat)
      setuserAttackData(userAttackStat)

      const userHealthstat = userStatFilterData.filter((e:Stat)=> e.Type==='최대 생명력')
      setuserHealthData(userHealthstat)


    }catch(error){
      console.error(error)
    }};

    profileFetchData();
  },[]);

  useEffect(()=>{
    const engravingsFetchData = async () => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}/engravings`,{
          headers :{
            'Authorization': `Bearer ${apiKey}`
          }
      });
      const responseData= response.data;
      console.log(responseData);

      const userengravingFillterData = responseData.Effects;
      console.log(userengravingFillterData);
      setuserengravingData(userengravingFillterData)

    }catch(error){
      console.error(error)
    }};

    engravingsFetchData();
  },[]);



    return(
        <div className="detailCharInfoLayout">
          <div className="charRightDiv">
            <div className="charLevelStat">
              <div className="charLevel">
                전투:{userData?.CharacterLevel}
                아이템:{userData?.ItemAvgLevel}
                원정대레벨:{userData?.ExpeditionLevel}
              </div>
              <div className="charStat"/*이부분 필터링 적용해서 Stats부분 관리*/>
                특화 신속
                1829 500
                특성합 2400
                공격력 {userAttackData?.map((userAttackDatas)=><div>{userAttackDatas.Value}</div>)}
                최대 생명력 {userHealthData?.map((userHealthDatas)=><div>{userHealthDatas.Value}</div>)}
              </div>
            </div>
            <div className="charEngraving">
              {userengravingData?.map((userengravingDatas)=><div> {userengravingDatas.Name} </div>)}
            </div>
          </div>
          <div className="charLeftDiv">
            left
          </div>
        </div>
    )
}