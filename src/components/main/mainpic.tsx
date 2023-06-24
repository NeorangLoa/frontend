import axios from "axios";
import React, { useState, useEffect } from "react";
import { apiKey } from "src/api";

export default function MainPic(props:any) {

    const [firstabyssImg, setFirstAbyssImg] = useState<any|any>();
    const [secondabyssImg, setSecondAbyssImg] = useState<any|any>();

    const [firstguardianImg, setFirstGuardianImg] = useState<any|any>();
    const [secondguardianImg, setSecondGuardianImg] = useState<any|any>();
    const [thirdguardianImg, setThirdGuardianImg] = useState<any|any>();

    const [firsteventImg, setFirstEventImg] = useState<any|any>();
    const [secondeventImg, setSecondEventImg] = useState<any|any>();
    const [thirdeventImg, setThirdEventImg] = useState<any|any>();
    
    useEffect (() => {
        const abyssimgFetchData = async () => {
            try{
                const response = await axios.get(`https://developer-lostark.game.onstove.com/gamecontents/challenge-abyss-dungeons`,
                {
                    headers :{
                        'Authorization': `Bearer ${apiKey}`
                    }
                });
                const responseData:any = response.data;
                // console.log(response);
                // console.log(responseData);

                const firstData:any = responseData[0];
                const secondData:any = responseData[1];
                // console.log(firstData);

                const firstImg:any = firstData.Image;
                const secondImg:any = secondData.Image;
                // console.log(firstImg);

                setFirstAbyssImg(firstImg);
                setSecondAbyssImg(secondImg);

            } catch(error){
                console.error(error)
            }
        };

        const guardianimgFetchData = async () => {
            try{
                const response = await axios.get(`https://developer-lostark.game.onstove.com/gamecontents/challenge-guardian-raids`,
                {
                    headers :{
                        'Authorization': `Bearer ${apiKey}`
                    }
                });
                const responseData:any = response.data;
                // console.log(response);
                // console.log(responseData);

                const RaidData:any = responseData.Raids;
                // console.log(RaidData);

                const firstData:any = RaidData[0];
                const secondData:any = RaidData[1];
                const thirdData:any = RaidData[2];
                // console.log(firstData);

                const firstImg:any = firstData.Image;
                const secondImg:any = secondData.Image;
                const thirdImg:any = thirdData.Image;
                // console.log(firstImg);

                setFirstGuardianImg(firstImg);
                setSecondGuardianImg(secondImg);
                setThirdGuardianImg(thirdImg);

            } catch(error){
                console.error(error)
            }
        };

        const eventimgFetchData = async () => {
            try {
                const response = await axios.get(`https://developer-lostark.game.onstove.com/news/events`,
                {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                });
                const responseData:any = response.data;
                // console.log(response);
                // console.log(responseData);

                const firstData:any = responseData[0];
                const secondData:any = responseData[1];
                const thirdData:any = responseData[2];
                // console.log(firstData);

                const firstImg:any = firstData.Thumbnail;
                const secondImg:any = secondData.Thumbnail;
                const thirdImg:any = thirdData.Thumbnail;
                // console.log(firstImg);

                setFirstEventImg(firstImg);
                setSecondEventImg(secondImg);
                setThirdEventImg(thirdImg);

            } catch(error) {
                console.error(error);
            }
        }

        abyssimgFetchData();
        guardianimgFetchData();
        eventimgFetchData();
    });


    return (
        <div className="content">
            {props.name === "abyss-dungeons" &&
                <div className="abyss">
                    <img src={firstabyssImg} alt="" />
                    <img src={secondabyssImg} alt="" />
                </div>
            }

            {props.name === "challenge-guardian" &&
                <div className="guardian">
                    <img src={firstguardianImg} alt="" />
                    <img src={secondguardianImg} alt="" />
                    <img src={thirdguardianImg} alt="" />
                </div>
            }

            {props.name === "event" &&
                <div className="event">
                    <img src={firsteventImg} alt="" />
                    <img src={secondeventImg} alt="" />
                    <img src={thirdeventImg} alt="" />
                </div>
            }
        </div>
    )
}