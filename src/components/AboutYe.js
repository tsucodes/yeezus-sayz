import React from "react";

function AboutYe(props) {
   
    return (
        <div>
            <h1>About Ye</h1>
            <div className="ye"><img alt="kanye west" src="https://images.thebrag.com/td/uploads/2019/05/kanye-west-768x435.jpg"></img></div>
            <div>{props.name}</div>
            <div>{props.hometown}</div>
            <div>{props.career}</div>
            <div>{props.accomplishments}</div>
            <div>{props.networth}</div>
        </div>
    )
}
export default AboutYe
