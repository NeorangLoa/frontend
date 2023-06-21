import React from "react";
import Chardetail from "src/components/char/chardetail/chardetail";
import Charinfo from "src/components/char/charinfo/charinfo";
import Charsearch from "src/components/char/charsearch/charsearch";
import Nav from "src/components/common/nav/nav";
import '../char/char.scss'
import GemLayer from "src/components/char/chardetail/GemLayer/GemLayer";
import CardLayer from "src/components/char/chardetail/CardLayer/CardLayer";

export default function Char(){

    return(
        <div className="charlayout">
            <Nav/>
            <Charsearch/>
            <div className="charinfolayout">
                <Charinfo/>
                <div>charNav</div>
                <Chardetail/>
                <GemLayer/>
                <CardLayer/>
            </div>
        </div>
    )
}