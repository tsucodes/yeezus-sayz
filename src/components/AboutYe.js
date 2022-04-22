import React from "react";
import Header from "./Header";

function AboutYe(props) {
        return (
            <div>
               
                <div className="ye"><img alt="kanye west" src="https://wallpapercave.com/dwp2x/wp1839973.jpg"></img></div>
                <div className="facts">
                <div>{props.name}</div>
                <div>{props.hometown}</div>
                <div>{props.career}</div>
                <div>{props.accomplishments}</div>
                <div>{props.networth}</div>
                <div>Did you know?</div>
                </div>
            </div>
        )
    }
    
export default AboutYe



// import React from "react";
// import Fact from "./Fact";
// function AboutYe(props) {
//         return (
//             <div>
//                 <h1>About Ye</h1>
//                 <div className="ye"><img alt="kanye west" src="https://images.thebrag.com/td/uploads/2019/05/kanye-west-768x435.jpg"></img></div>
//                 <div>{props.name}</div>
//                 <div>{props.hometown}</div>
//                 <div>{props.career}</div>
//                 <div>{props.accomplishments}</div>
//                 <div>{props.networth}</div>
//                 <div>Did you know?</div>
//                 <Fact />
//             </div>
//         )
//     }
    
// export default AboutYe

