import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiKey } from "src/api";
import { Gem, GemData, GemEffect } from "src/types/Types";
import './GemLayer.scss'

export default function GemLayer(name:any){
  const api:string = apiKey  
  const nickname:string = "그때그떨림"

  const [GemData,setGemData] = useState<Gem[]>([]);
  const [GemEffectData, setGemEffectData] = useState<GemEffect[]>([]);
  const [userNickname, setUserNickname ] = useState<string>();

  useEffect(()=>{
    const userName =async (nickname:string) => {
      const settingUserName = setUserNickname(nickname);
      try {
        await settingUserName;
      } catch (error) {
        console.log('error');
      }
    };
    const cardFetchData = async ( name:any ) => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${name.name}/gems`,{
          headers :{
            'Authorization': `Bearer ${apiKey}`
          }
      });
      const responseData:GemData = response.data; 
      console.log(responseData)
      setGemData(responseData.Gems)
      setGemEffectData(responseData.Effects)
    }catch(error){
      console.error(error)
    }};
    userName(name)
    cardFetchData(userNickname);
  },[name,userNickname]);

    return(
      <div className="GemLayerLayout">
        {GemData?.map((Gems)=><div><img className="Gemimg" src={Gems.Icon}/></div>)}
      </div>
  )
}