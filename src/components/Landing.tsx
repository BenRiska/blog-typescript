import React from 'react'
import "./styles/Landing.css"
import plantGif from "../assets/loading.gif"
import yellowIcon from "../assets/yellow-icon.svg"

interface landingProps {
    playMusic: () => void;
    autoLandAnimation: () => void;
}

const Landing: React.FC<landingProps> = ({playMusic, autoLandAnimation}): JSX.Element => {
    return (
        <div className="landing">
            <img className="landing__icon" src={yellowIcon} alt="landing page icon"/>
            <div className="landing__content">
                <img src={plantGif} alt="landing page animation"/>
                <div className="landing__music-selector">
                    <span onClick={autoLandAnimation} className="landing__off">OFF.</span>
                    <span onClick={() => { 
                        autoLandAnimation()
                        playMusic()}} className="landing__on">ON.</span>
                </div>
                <p className="landing__text">Music brings emotion so turn it on for your best experience.</p>
            </div>
        </div>
    )
}

export default Landing;
