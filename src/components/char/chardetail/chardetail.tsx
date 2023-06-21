import React, { useEffect, useState } from "react";
import axios from 'axios'
import { EquipmentData } from "src/types/Types";
import { apiKey } from "src/api";
import './chardetail.scss'


export interface EquipmentProps{
  detail: {  
    Type:    string;
    Name:    string;
    Icon:    string;
    Grade:   string;
    Tooltip: string;
  }
}

const Chardetail = () => {


  const api:string = apiKey
  
  const nickname:string = "그때그떨림"
  


  const [EquipmentData,setEquipmentData] = useState<EquipmentData[]>([]);
  const [AccessoryData,setAccessoryData] = useState<EquipmentData[]>([]);

  const [EquipmentDataProps, setEquipmentDataProps] = useState<EquipmentProps[]>([]);

  useEffect(()=>{
    const equipmentFetchData = async () => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}/equipment`,{
          headers :{
            'Authorization': `Bearer ${apiKey}`
          }
      });
      const responseData = response.data; 

      const equipmentFilterData = responseData.filter((e:EquipmentData) => e.Type === '무기'||e.Type === '투구'||e.Type === '어깨'||e.Type === '상의'||e.Type === '하의'||e.Type === '장갑');
      setEquipmentData(equipmentFilterData);

      const accessoryFilterData = responseData.filter((e:EquipmentData)=> e.Type==='목걸이'||e.Type==='귀걸이'||e.Type==='반지'||e.Type==='팔찌'||e.Type==='어빌리티 스톤')
      setAccessoryData(accessoryFilterData);



    }catch(error){
      console.error(error)
    }};

    equipmentFetchData();
  },[]);

  useEffect(()=>{
    
  },[EquipmentData]);

  useEffect(()=>{
    
  },[AccessoryData])



  return(
    <div>
      <div className="EquipmentLayout">
        장비
      </div>
      <div className="AccessoryLayout">
        악세
      </div>
    </div>
  )
}

export default Chardetail;