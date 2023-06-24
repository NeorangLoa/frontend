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

const Chardetail = (name:any) => {


  const api:string = apiKey
  
  const nickname:string = "그때그떨림"
  
  const [EquipmentData,setEquipmentData] = useState<EquipmentData[]>([]);
  const [AccessoryData,setAccessoryData] = useState<EquipmentData[]>([]);
  const [userNickname, setUserNickname ] = useState<string>();
  const [EquipmentDataProps, setEquipmentDataProps] = useState<EquipmentProps[]>([]);

  useEffect(()=>{
    const userName =async (nickname:string) => {
      const settingUserName =setUserNickname(nickname);
      try {
        await settingUserName;
      } catch (error) {
        console.log('error');
      }
    };

    const equipmentFetchData = async (name:any) => {
      try{
        const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${name.name}/equipment`,{
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
    userName( name );
    equipmentFetchData(userNickname);
  },[name,userNickname]);



  return(
    <div className="chardetaillayout">
      <div className="EquipmentLayout">
        {EquipmentData?.map((data:EquipmentData,index:any) =>(
          <div  className="EquipmentdetailLayout">
            <img className="Equipmentimg" src={data.Icon}/>
            {data.Name}
          </div>
        ))}
      </div>
      <div className="AccessoryLayout">
        {AccessoryData?.map((data:EquipmentData,index:any)=>(
          <div>
            <img className="Equipmentimg" src={data.Icon}/>
            {data.Name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chardetail;