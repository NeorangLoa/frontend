import React from "react";
import './charinfo.scss'

export default function Charinfo(){


  

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