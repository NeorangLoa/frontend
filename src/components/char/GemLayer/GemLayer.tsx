import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiKey } from "src/api";
import { Gem, GemData, GemEffect } from "src/types/Types";
import './GemLayer.scss'

export default function GemLayer(){

  


  const api:string = apiKey  
  const nickname:string = "그때그떨림"

  const [GemData,setGemData] = useState<Gem[]>([]);
  const [GemEffectData, setGemEffectData] = useState<GemEffect[]>([]);


  useEffect(()=>{
    const cardFetchData = async () => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}/cards`,{
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

    cardFetchData();
  },[]);

  useEffect(()=>{
    console.log(GemData);
  },[GemData]);

  useEffect(()=>{
    console.log(GemEffectData);
  },[GemEffectData])
    return(
      <div className="GemLayerLayout">
        보석
      </div>
  )
}