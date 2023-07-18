import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiKey } from "src/api";
import { Effect, Engraving, EngravingsData, Stat, UserinfoData } from "src/types/Types";
import './charinfo.scss'
import { Stats } from "fs";
import { userInfo } from "os";

export default function Charinfo(name:any){


  const api:string = apiKey

  const [userData, setUserData] = useState<UserinfoData|undefined>();
  const [userAttackData, setuserAttackData] = useState<Stat[]|undefined>();
  const [userHealthData,setuserHealthData] = useState<Stat[]|undefined>();
  const [userengravingData , setuserengravingData] = useState<Effect[]|undefined>();
  const [userNickame, setUserNickname ] = useState<string>();

  useEffect (() => {
    const userName =async (nickname:string) => {
      const settingUserName =setUserNickname(nickname);
      try {
        await settingUserName;
      } catch (error) {
        console.log('error');
      }
    };
    const profileFetchData = async ( name:any ) => {
      try{
        console.log('이름들어감?')
        console.log(name.name)
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${name.name}/profiles`,{
          headers :{
            'Authorization': `Bearer ${apiKey}`
          }
      });
      const responseData:UserinfoData = response.data;

      setUserData(responseData);

      const userStatFilterData= responseData.Stats;
      //console.log(userStatFilterData)

      const userAttackStat = userStatFilterData.filter((e:Stat)=> e.Type==='공격력')
     // console.log(userAttackStat)
      setuserAttackData(userAttackStat)

      const userHealthstat = userStatFilterData.filter((e:Stat)=> e.Type==='최대 생명력')
      setuserHealthData(userHealthstat)


    }catch(error){
      console.error(error)
    }};
    const engravingsFetchData = async ( name:any ) => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${name.name}/engravings`,{
          headers :{
            'Authorization': `Bearer ${apiKey}`
          }
      });
      const responseData= response.data;
      //console.log(responseData);
      const userengravingFillterData = responseData.Effects;
      //console.log(userengravingFillterData);
      setuserengravingData(userengravingFillterData)
    }catch(error){
      console.error(error)
    }};

    userName(name);
    console.log('왜')
    console.log(userNickame)
    profileFetchData( userNickame );
    engravingsFetchData(userNickame);
  },[name,userNickame])

    return(
        <div className="detailCharInfoLayout">
          <div className="charLeftDiv">
            <div className="charLevelStat">
              <div className="charLevel">
                <div>
                  전투:{userData?.CharacterLevel}
                </div>
                <div>
                  아이템:{userData?.ItemAvgLevel}
                </div>
                {/* <div>
                  원정대레벨:{userData?.ExpeditionLevel}
                </div> */}
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
          <div className="charRightDiv">
            Right
          </div>
        </div>
    )
}