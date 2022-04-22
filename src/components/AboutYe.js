import React from "react";
import Facts from "./Facts";
import cover from "../images/aboutyecover.jpeg";

function AboutYe(props) {
    let facts = props.facts.map((facts, index) =>{
        return  <Facts fact={facts} key={index}/>
    })
        return (
            <div>

                <div className="ye"><img alt="kanye west" src={cover}></img></div>
                <div className="name">{props.name}</div>
                <div className="info">
                <div className="home">{props.hometown}</div>
                <div className="work">{props.career}</div>
                <div className="award">{props.accomplishments}</div>
                <div className="worth">{props.networth}</div>
                </div>
                <h1>Did you Know Ye?</h1>
                <ul>
                    {facts}
                </ul>
               
            </div>
        )
    }
    
export default AboutYe
