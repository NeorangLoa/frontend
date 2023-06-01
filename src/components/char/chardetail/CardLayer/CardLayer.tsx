import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardData, CardEffect } from "src/types/Types";

export default function CardLayer(){

  const apiKey:string ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNDEzMjAifQ.L_aqWyhSjwLk4oXVqFbURbvn8563A94Yz6FB3T1OjWHeqhQk2xi2AnwkwzLqoOulI6uOVVsDHrydJnkSl41fWjcW67eddodqrhHdR9tLpiKM98XiNVLps5xQfJKxtDrthafzD_IxPl8kDcMZeXALRTn1Ks8cAV2hGqz2K7za8g_Rh3BsfRdgBJNBacF9LjM-uZ9A69vsWyARpw9YH7-UoGWnQ4A0mWgKpxOHuOBqGcHlRTQLPSYqkcP0NTCIiRJDBNgFbwSXAELSPwp5O5PVT1LJYnCzhe4i8JJF1ueo6SpiN6ULB7y_xRRtVIynQ1tEOoMpV7VSIvRS9HVH0WFhKw'
  
  const nickname:string = "그때그떨림"

  const [CardData,setCardData] = useState<Card[]>([]);
  const [CardEffectData, setCardEffectData] = useState<CardEffect[]>([]);


  useEffect(()=>{
    const cardFetchData = async () => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}/cards`,{
          headers :{
            'Authorization': `Bearer ${apiKey}`
          }
      });
      const responseData:CardData = response.data; 
      console.log(responseData)
      setCardData(responseData.Cards)
      setCardEffectData(responseData.Effects)
    }catch(error){
      console.error(error)
    }};

    cardFetchData();
  },[]);

  useEffect(()=>{
    console.log(CardData);
  },[CardData]);

  useEffect(()=>{
    console.log(CardEffectData);
  },[CardEffectData])
    return(
      <div>
        카드
      </div>
    )
}