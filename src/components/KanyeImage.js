import React from "react";
import kanye1 from '../images/kanye-blackshirt.jpeg';
import kanye2 from '../images/kanye-blue.jpg';
import kanye3 from '../images/kanye-fire.jpeg';
import kanye4 from  '../images/kanye-greyshirt.jpeg';
import kanye5 from  '../images/kanye-hands-up.jpg';
import kanye6 from  '../images/kanye-jean.jpeg';
import kanye7 from  '../images/kanye-live.jpeg';
import kanye8 from  '../images/kanye-red.png';
import kanye9 from  '../images/kanye-speech.jpeg';
import kanye10 from  '../images/kanye-sunday-service.webp';
import kanye11 from  '../images/kanye-west.jpeg';
import kanye12 from  '../images/kanye-whiteshirt.webp';
import kanye13 from '../images/kanye-arms.webp';
import kanye14 from '../images/kanye-jesus-is-king.webp';

function KanyeImage(){
    const images = [kanye1, kanye2, kanye3, kanye4, kanye5, kanye6, kanye7, kanye8, kanye9, kanye10, kanye11, kanye12, kanye13, kanye14];
    const randomImage = images[Math.floor(Math.random()* images.length)]
    return(
        <div>
            <img className="kanye"alt="img" src={randomImage}/>
        </div>
    )
}
export default KanyeImage