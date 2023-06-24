import axios from "axios";
import React, { useEffect, useState } from "react";
import './index.scss'


export interface PostListType{
    "postId": number,
    "nickname": string,
    "title": string,
    "viewCounts": number
}

const PostList = () => {
    const [listData, setListData] = useState<PostListType[]|undefined>()
    useEffect(()=>{
        const postListData =async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/post/all/0')
                const responseData:PostListType[] = response.data.data;
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
                    자유게시판
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
                                {listDatas.postId}
                            </div>
                            <div className="typelayout">
                                잠담
                            </div>
                            <div className="titlelayout">
                                {listDatas.title}
                            </div>
                            <div className="nicknamelayout">
                                닉네임
                            </div>
                            <div className="datelayout">
                                21.21.21
                            </div>
                            <div className="viewcountlayout">
                                {listDatas.viewCounts}
                            </div>
                        </div>
                        )}
                                {listData?.map((listDatas)=>
                            <div className="bestpostlayout">
                            <div className="postidlayout">
                                {listDatas.postId}
                            </div>
                            <div className="typelayout">
                                잠담
                            </div>
                            <div className="titlelayout">
                                {listDatas.title}
                            </div>
                            <div className="nicknamelayout">
                                닉네임
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

export default PostList;