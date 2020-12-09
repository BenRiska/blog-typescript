import React from "react"
import yellowCursor from "./assets/yellow-cursor.svg";
import {homeAnimation, prepBlogAnimation} from "./animations";
import './App.css';
import Landing from './components/Landing';
import {useEffect, useState} from "react"
import Cursor from "./cursor"
import darkIcon from "./assets/dark-icon.svg";
import whiteIcon from "./assets/white-icon.svg"
import soundIcon from "./assets/sound.svg"
import darkSoundIcon from "./assets/sound-dark.svg"
import { Switch, Route, useHistory } from "react-router-dom";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog"
const pianoMusic = require("./assets/piano.mp3");

const  App: React.FC = (): JSX.Element => {

  // used to manipulate landing animation
  const [landed, setLanded] = useState(false);
  // used to dertmine whether music should be playing
  const [music, setMusic] = useState(false);
  // used to determine whether screen is light or dark mode
  const [darkMode, setDarkMode] = useState(false)

  let history = useHistory();

   // renders animated cursor on page load
   useEffect(() => {
    new Cursor(document.querySelector(".cursor"));
    setTimeout(() => {
      if(!landed){
      autoLandAnimation()}
    },3000)
  }, [landed])

    // listens for music state change and handles transition 
    useEffect(() => {
      const piano= document.querySelector<HTMLAudioElement>(".piano")!;
      if (music){
        piano.play()
        console.log("playing")
      } else{
        piano.pause()
      }
    }, [music])

    // landing animation - gets rid of landing screen
  const autoLandAnimation = (): void => {
    setLanded(true)
    const body = document.querySelector<HTMLDivElement>("body")!;
    const mainContent = document.querySelector<HTMLDivElement>(".main__content")!;
    homeAnimation(() => {
        mainContent.style.zIndex = "1";
        mainContent.style.opacity = "1";
      })
      body.style.cursor = `url(${yellowCursor}), default`;
      document.documentElement.style
                .setProperty('--cursor-ring', '#f2da87');
  }

  // handles dark mode 
  const toggleDarkMode = () => {
    const app = document.querySelector<HTMLDivElement>(".App")!
    if(darkMode === true){
      app.classList.remove("dark")
    } else{
      app.classList.add("dark")
    }
    setDarkMode(!darkMode)
  }


  // handles music selection from landing page 
  const playMusic = (): void => {
    setMusic(true);
  }

  // home -> blog page transition - triggers blog url push on completion
  const handleBlogSelection = (blogName: string): void => {
    prepBlogAnimation(() => history.push(`/${blogName}`))
  }


  return (
    <div className="App">
      {/* Cursor */}
      <div className="cursor"></div>
      {/* Landing page */}
      <Landing playMusic={playMusic} autoLandAnimation={autoLandAnimation}/>
      {/* Main content */}
      <div className="main__content">
      {/* Invisible audio element */}
      <audio loop className="piano" src={pianoMusic.default}></audio>
      {/* Top bar */}
      <div className="top-bar">
          <div className="logo">
            <img src={darkMode ? darkIcon : whiteIcon} alt="main page icon" className="white-icon"/>
            <img src={darkMode ? darkSoundIcon : soundIcon} onClick={() => setMusic(!music)} alt="main page icon" 
            className={music ? "sound-icon on" : "sound-icon"}/>
          </div>
          <span className="say-hi static-link"><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ben-taylor-tech/">say hi.</a> </span>
      </div>
       {/* bottom bar */}
       <div className="bottom-bar">
          <span className="portfolio static-link">
              <a rel="noreferrer" target="_blank" href="https://portfolio-11585.web.app/">portfolio.</a>
          </span>

          <span className="github static-link">
              <a rel="noreferrer" target="_blank" href="https://github.com/BenRiska">github.</a>
          </span>
        </div>
        {/* Router for page content */}
        <Switch>
            <Route path="/blog/:title">
                <Blog darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Route>

            <Route path="/">
              <BlogList handleBlogSelection={handleBlogSelection}/>
            </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
