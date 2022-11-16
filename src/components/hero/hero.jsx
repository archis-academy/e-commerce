import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import "./hero.scss"
export default function Hero(){

    const [backgroundImg , setbackgroundImg]= useState("/assets/CauroselSlider1.jpg");

    return ( 
    <div className="caurosel" style={{backgroundImage : `url(${backgroundImg})`}}>
        <div className="bottomBar">
            <div className="scroll">
                <div className="scrollText"> SCROLL</div>
                <span className="scrollLine"></span>
            </div>
            <div className="navigation">
                <button><img src="/assets/CauroselNavigationButtonLeft.png" alt="" /></button>
                <button><img src="/assets/CauroselNavigationButtonRight.png" alt=""/></button>
            </div>
        </div>
    </div> )
}