import axios from "axios";
import React, { useEffect } from "react";
import { UserinfoData } from "src/types/Types";
import './charinfo.scss'

export default function Charinfo(){

  const apiKey:string ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNDEzMjAifQ.L_aqWyhSjwLk4oXVqFbURbvn8563A94Yz6FB3T1OjWHeqhQk2xi2AnwkwzLqoOulI6uOVVsDHrydJnkSl41fWjcW67eddodqrhHdR9tLpiKM98XiNVLps5xQfJKxtDrthafzD_IxPl8kDcMZeXALRTn1Ks8cAV2hGqz2K7za8g_Rh3BsfRdgBJNBacF9LjM-uZ9A69vsWyARpw9YH7-UoGWnQ4A0mWgKpxOHuOBqGcHlRTQLPSYqkcP0NTCIiRJDBNgFbwSXAELSPwp5O5PVT1LJYnCzhe4i8JJF1ueo6SpiN6ULB7y_xRRtVIynQ1tEOoMpV7VSIvRS9HVH0WFhKw'
  
  const nickname:string = "그때그떨림"


  useEffect(()=>{
    const cardFetchData = async () => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}/profiles`,{
          headers :{
            'Authorization': `Bearer ${apiKey}`
          }
      });
      const responseData:UserinfoData = response.data; 
      console.log(responseData)
    }catch(error){
      console.error(error)
    }};

    cardFetchData();
  },[]);

    return(
        <div className="detailCharInfoLayout">
          <div className="charRightDiv">
            <div className="charLevelStat">
              <div className="charLevel">
                아이템:1580 전투:Lv 60
              </div>
              <div className="charStat">
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