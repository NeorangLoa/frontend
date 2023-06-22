import React, { useEffect } from "react";
import Chardetail from "src/components/char/chardetail/chardetail";
import Charinfo from "src/components/char/charinfo/charinfo";
import Charsearch from "src/components/char/charsearch/charsearch";
import Nav from "src/components/common/nav/nav";
import '../char/char.scss'
import GemLayer from "src/components/char/GemLayer/GemLayer";
import CardLayer from "src/components/char/CardLayer/CardLayer";
import { useLocation } from "react-router-dom";

export default function Char(){

    const location = useLocation();
    const queryParems = new URLSearchParams(location.search);
    const searchTerm = queryParems.get('q');


    return(
        <div className="charlayout">
            <Nav/>
            <Charsearch/>
            <div className="charinfolayout">
                <Charinfo name={searchTerm}/>
                <div>charNav</div>
                <Chardetail/>
                <GemLayer/>
                <CardLayer/>
            </div>
        </div>
    )
}