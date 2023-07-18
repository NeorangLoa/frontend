import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Freepostdetail(){
    const location = useLocation();
    const queryParems = new URLSearchParams(location.search);
    const searchTerm = queryParems.get('post');

    return(
        <div>hello world</div>
    )
}