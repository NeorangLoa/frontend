import React, { useEffect, useState } from "react";
import Chardetail from "src/components/char/chardetail/chardetail";
import Charinfo from "src/components/char/charinfo/charinfo";
import Charsearch from "src/components/char/charsearch/charsearch";
import Nav from "src/components/common/nav/nav";
import '../char/char.scss'
import axios from "axios";

export default function Char(){
      const apiKey:string ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNDEzMjAifQ.L_aqWyhSjwLk4oXVqFbURbvn8563A94Yz6FB3T1OjWHeqhQk2xi2AnwkwzLqoOulI6uOVVsDHrydJnkSl41fWjcW67eddodqrhHdR9tLpiKM98XiNVLps5xQfJKxtDrthafzD_IxPl8kDcMZeXALRTn1Ks8cAV2hGqz2K7za8g_Rh3BsfRdgBJNBacF9LjM-uZ9A69vsWyARpw9YH7-UoGWnQ4A0mWgKpxOHuOBqGcHlRTQLPSYqkcP0NTCIiRJDBNgFbwSXAELSPwp5O5PVT1LJYnCzhe4i8JJF1ueo6SpiN6ULB7y_xRRtVIynQ1tEOoMpV7VSIvRS9HVH0WFhKw'
      
      const nickname:string = "그때그떨림"
      
    
    //   const [EquipmentData,setEquipmentData] = useState<ArmoryEquipment[]>([]);
    //   const [AccessoryData,setAccessoryData] = useState<ArmoryEquipment[]>([]);


    
      useEffect(()=>{
        const equipmentFetchData = async () => {
          try{
            const response = await axios.get(`https://developer-lostark.game.onstove.com/armories/characters/${nickname}`,{
              headers :{
                'Authorization': `Bearer ${apiKey}`
              }
          });
          const responseData = response.data; 
          console.log(responseData);
          
          const armoryProfileFilterData = responseData.filter((e:Welcome)=>e.ArmoryProfile);
          setArmoryProfileData(armoryProfileFilterData);
          console.log(armoryProfileData)

        //   const profileFilterData = responseData.filter((e:charactersInfo)=> e.ArmoryProfile);
        //   const equipmentFilterData = responseData.filter((e:charactersInfo)=> e.ArmoryEquipment);
        //   const engravingsFilterData = responseData.filter((e:charactersInfo)=>e.ArmoryEngraving);
        //   const cardFilterData = responseData.filter((e:charactersInfo)=>e.ArmoryCard);
        //   const gemFilterData = responseData.filter((e:charactersInfo)=>e.ArmoryGem);

        //   console.log(equipmentFilterData)

    
        //   const equipmentInputData = equipmentFilterData.filter((e:ArmoryEquipment) => e.Type === '무기'||e.Type === '투구'||e.Type === '어깨'||e.Type === '상의'||e.Type === '하의'||e.Type === '장갑');
        //   setEquipmentData(equipmentInputData);
        //   console.log(equipmentInputData);
    
        //   const accessoryInputData = equipmentFilterData.filter((e:ArmoryEquipment)=> e.Type==='목걸이'||e.Type==='귀걸이'||e.Type==='반지'||e.Type==='팔찌'||e.Type==='어빌리티 스톤')
        //   setAccessoryData(accessoryInputData);
        //   console.log(accessoryInputData);
        }catch(error){
          console.error(error)
        }};
    
        equipmentFetchData();
      },[]);
    

    return(
        <div className="charlayout">
            <Nav/>
            <Charsearch/>
            <div className="charinfolayout">
                <Charinfo/>
                <div>charNav</div>
                <Chardetail/>
            </div>
        </div>
    )
}