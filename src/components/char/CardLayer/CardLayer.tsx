import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiKey } from "src/api";
import { Card, CardData, CardEffect } from "src/types/Types";
import './CardLayer.scss'


export default function CardLayer(name:any){


  const api:string = apiKey

  const nickname:string = "그때그떨림"

  const [CardData,setCardData] = useState<Card[]>([]);
  const [CardEffectData, setCardEffectData] = useState<CardEffect[]>([]);
  const [userNickame, setUserNickname ] = useState<string>();


  useEffect(()=>{
    const userName =async (nickname:string) => {
      const settingUserName =setUserNickname(nickname);
      try {
        await settingUserName;
      } catch (error) {
        console.log('error');
      }
    };
    const cardFetchData = async ( name:any) => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${name.name}/cards`,{
          headers :{
            'Authorization': `Bearer ${apiKey}`
          }
      });
      const responseData:CardData = response.data; 
      //console.log(responseData)
      setCardData(responseData.Cards)
      setCardEffectData(responseData.Effects)
    }catch(error){
      console.error(error)
    }};
    userName(name);
    cardFetchData(userNickame);
  },[name,userNickame]);
  
    return(
      <div className="CardLayerLayout">
         {CardData?.map((CardDatas)=><div><img className="Gemimg" src={CardDatas.Icon}/></div>)}
      </div>
    )
}