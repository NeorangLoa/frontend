import axios from "axios";
import React, { useEffect, useState } from "react";
import './index.scss'


export interface RaidPostListType{
    postRaidId: number,
    nickname: string,
    title: string,
    viewCounts: number,
    maxAttacker: number,
    maxSupporter: number,
    raidName: string,
    raidItemLevel: string
}


const RaidpostList = () => {
    const [listData, setListData] = useState<RaidPostListType[]|undefined>()
    useEffect(()=>{
        const postListData =async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/postRaid/all/0')
                const responseData:RaidPostListType[] = response.data.data;
                console.log(responseData);
                setListData(responseData);
            } catch (error) {
                console.log(error)
            }
        }

        postListData()
    },[])

    return(
        <div className="postlistlayout">
            <div className="postlistmain">
                <div className="AD">
                    AD
                </div>
                <div className="boardname">
                    레이드 게시판
                </div>
                <div className="postlistbestpost">
                    <div className="bestpostname">
                        <div className="bestpostnametext">
                            추천 게시물
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="postlistnewpost">
                번호 제목 작성자 작성일 조회 개추
                {listData?.map((listDatas)=>
                            <div className="bestpostlayout">
                            <div className="postidlayout">
                                {listDatas.postRaidId}
                            </div>
                            <div className="typelayout">
                                잠담
                            </div>
                            <div className="titlelayout">
                                {listDatas.title}
                            </div>
                            <div className="nicknamelayout">
                                {listDatas.nickname}
                            </div>
                            <div className="datelayout">
                                21.21.21
                            </div>
                            <div className="viewcountlayout">
                                {listDatas.viewCounts}
                            </div>
                        </div>
                        )}
                </div>
                <div className="writebuttonlayout">
                    <div>
                        글쓰기
                    </div>
                </div>
                <div className="pagenationlayout">
                    페이지네이션
                </div>
            </div>
        </div>
    )
}

export default RaidpostList;