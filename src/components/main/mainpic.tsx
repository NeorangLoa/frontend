import axios from "axios";
import React, { useState, useEffect } from "react";
import { apiKey } from "src/api";

export default function MainPic(props:any) {

    const [abyssData, setAbyssData] = useState<any|any>([]);
    const [guardianData, setGuardianData] = useState<any|any>([]);
    const [eventData, setEventData] = useState<any|any>([]);
    
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
                // console.log(responseData.length);
                
                const abyssData = responseData;
                // console.log(abyssData);

                const abyssImg = [];
                for (let i = 0; i < abyssData.length; i++) {
                    abyssImg[i] = abyssData[i].Image;
                }
                // console.log(abyssImg);

                setAbyssData( abyssImg );

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
    
                const guardianData = RaidData;
                // console.log(guardianData);

                const guardianImg = [];
                for (let i = 0; i < guardianData.length; i++) {
                    guardianImg[i] = guardianData[i].Image;
                }
                // console.log(guardianImg);

                setGuardianData( guardianImg );
    
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

                const eventData = responseData;
                // console.log(eventData);

                const eventImg = [];
                for (let i = 0; i < eventData.length; i++) {
                    eventImg[i] = eventData[i].Thumbnail;
                }
                // console.log(eventImg);

                setEventData( eventImg );

            } catch(error) {
                console.error(error);
            }
        }

        abyssimgFetchData();
        guardianimgFetchData();
        eventimgFetchData();
    }, []);

    return (
        <div className="content">
            {props.name === "abyss-dungeons" &&
                <div className="abyss">
                    {
                        abyssData.map((imageURL:any, index:any) => (
                            <img src={imageURL} alt="" key={index} />
                        ))
                    }
                </div>
            }

            {props.name === "challenge-guardian" &&
                <div className="guardian">
                    {
                        guardianData.map((imageURL:any, index:any) => (
                            <div>
                                <img src={imageURL} alt="" key={index} />
                            </div>
                        ))
                    }
                </div>
            }

            {props.name === "event" &&
                <div className="event">
                    {
                        eventData.map((imageURL:any, index:any) => (
                            <img src={imageURL} alt="" key={index} />
                        ))
                    }
                </div>
            }
        </div>
    )
}