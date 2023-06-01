import React, { useEffect, useState } from "react";
import AccsessoryLayer from "./AccessoryLayer/AccessoryLayer";
import CardLayer from "./CardLayer/CardLayer";
import EquipmentLayer from "./EquipmentLayer/EquipmentLayer";
import GemLayer from "./GemLayer/GemLayer";
import axios from 'axios'
import { EquipmentData } from "src/types/Types";
import { apiKey } from "src/api";

const Chardetail = () => {


  const api:string = apiKey
  
  // const nickname:string = "그때그떨림"
  


  // const [EquipmentData,setEquipmentData] = useState<EquipmentData[]>([]);
  // const [AccessoryData,setAccessoryData] = useState<EquipmentData[]>([]);

  // useEffect(()=>{
  //   const equipmentFetchData = async () => {
  //     try{
  //       const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}/equipment`,{
  //         headers :{
  //           'Authorization': `Bearer ${apiKey}`
  //         }
  //     });
  //     const responseData = response.data; 
  //     console.log(responseData)

  //     const equipmentFilterData = responseData.filter((e:EquipmentData) => e.Type === '무기'||e.Type === '투구'||e.Type === '어깨'||e.Type === '상의'||e.Type === '하의'||e.Type === '장갑');
  //     setEquipmentData(equipmentFilterData);

  //     const accessoryFilterData = responseData.filter((e:EquipmentData)=> e.Type==='목걸이'||e.Type==='귀걸이'||e.Type==='반지'||e.Type==='팔찌'||e.Type==='어빌리티 스톤')
  //     setAccessoryData(accessoryFilterData);
  //   }catch(error){
  //     console.error(error)
  //   }};

  //   equipmentFetchData();
  // },[]);

  // useEffect(()=>{
  //   console.log(EquipmentData);
  // },[EquipmentData]);

  // useEffect(()=>{
  //   console.log(AccessoryData);
  // },[AccessoryData])


  

  return(
    <div>
      {/* <EquipmentLayer EquipmentData={EquipmentData}/> */}
      <AccsessoryLayer />
      <GemLayer/>
      <CardLayer/>
    </div>
  )
}

export default Chardetail;