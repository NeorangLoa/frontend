import React, { useEffect, useState } from "react";
import AccsessoryLayer from "./AccessoryLayer/AccessoryLayer";
import CardLayer from "./CardLayer/CardLayer";
import EquipmentLayer from "./EquipmentLayer/EquipmentLayer";
import GemLayer from "./GemLayer/GemLayer";
import axios from 'axios'

const Chardetail = () => {
  interface Equipment{
    Type:String,
    Name:String,
    Icon:String,
    Grade:String,
    Tooltip:String
  }

  const apiKey:string ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNDEzMjAifQ.L_aqWyhSjwLk4oXVqFbURbvn8563A94Yz6FB3T1OjWHeqhQk2xi2AnwkwzLqoOulI6uOVVsDHrydJnkSl41fWjcW67eddodqrhHdR9tLpiKM98XiNVLps5xQfJKxtDrthafzD_IxPl8kDcMZeXALRTn1Ks8cAV2hGqz2K7za8g_Rh3BsfRdgBJNBacF9LjM-uZ9A69vsWyARpw9YH7-UoGWnQ4A0mWgKpxOHuOBqGcHlRTQLPSYqkcP0NTCIiRJDBNgFbwSXAELSPwp5O5PVT1LJYnCzhe4i8JJF1ueo6SpiN6ULB7y_xRRtVIynQ1tEOoMpV7VSIvRS9HVH0WFhKw'
  
  const nickname:string = "그때그떨림"
  

  const [EquipmentData,setEquipmentData] = useState<Equipment[]>([]);
  const [AccessoryData,setAccessoryData] = useState<Equipment[]>([]);

  useEffect(()=>{
    const equipmentFetchData = async () => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}/equipment`,{
          headers :{
            'Authorization': `Bearer ${apiKey}`
          }
      });
      const responseData = response.data; 
      console.log(responseData);

      const equipmentFilterData = responseData.filter((e:Equipment) => e.Type === '무기'||e.Type === '투구'||e.Type === '어깨'||e.Type === '상의'||e.Type === '하의'||e.Type === '장갑');
      setEquipmentData(equipmentFilterData);
      console.log(equipmentFilterData);

      const accessoryFilterData = responseData.filter((e:Equipment)=> e.Type==='목걸이'||e.Type==='귀걸이'||e.Type==='반지'||e.Type==='팔찌'||e.Type==='어빌리티 스톤')
      setAccessoryData(accessoryFilterData);
      console.log(accessoryFilterData);
    }catch(error){
      console.error(error)
    }};

    equipmentFetchData();
  },[]);


  

  return(
    <div>
      <EquipmentLayer/>
      <AccsessoryLayer/>
      <GemLayer/>
      <CardLayer/>
    </div>
  )
}

export default Chardetail;