import React from "react";
import MainBoard from "src/components/main/mainboard";
import MainPic from "src/components/main/mainpic";

export default function Main(props:any) {
    return(
        <div className="mainForm">
            <p>{props.name}</p>

            {props.name === "자유 게시판" &&
                <div className="componentContent">
                    <MainBoard />
                </div>
            }
            {props.name === "레이드 게시판" &&
                <div className="componentContent">
                    <MainBoard />
                </div>
            }

            {props.name === "어비스 던전" &&
                <div className="componentContent">
                    <MainPic name="abyss-dungeons" />
                </div>
            }
            {props.name === "도전 가디언" &&
                <div className="componentContent">
                    <MainPic name="challenge-guardian" />
                </div>
            }

            {props.name === "로스트아크 이벤트" &&
                <div className="componentContent">
                    <MainPic name="event" />
                </div>
            }
        </div>
    )
}