import axios from "axios";
import React, { useEffect, useState } from "react";


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
        <div>
            <div>
                {listData?.map((listDatas)=><div>{listDatas.title}</div>)}
            </div>
        </div>
    )
}

export default PostList;