import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiKey } from "src/api";
import { Card, CardData, CardEffect } from "src/types/Types";

export default function CardLayer(){


  const api:string = apiKey

  // const nickname:string = "그때그떨림"

  // const [CardData,setCardData] = useState<Card[]>([]);
  // const [CardEffectData, setCardEffectData] = useState<CardEffect[]>([]);


  // useEffect(()=>{
  //   const cardFetchData = async () => {
  //     try{
  //       const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}/cards`,{
  //         headers :{
  //           'Authorization': `Bearer ${apiKey}`
  //         }
  //     });
  //     const responseData:CardData = response.data; 
  //     console.log(responseData)
  //     setCardData(responseData.Cards)
  //     setCardEffectData(responseData.Effects)
  //   }catch(error){
  //     console.error(error)
  //   }};

  //   cardFetchData();
  // },[]);

  // useEffect(()=>{
  //   console.log(CardData);
  // },[CardData]);

  // useEffect(()=>{
  //   console.log(CardEffectData);
  // },[CardEffectData])
    return(
      <div>
        카드
      </div>
    )
}