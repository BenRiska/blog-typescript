import {useState, useEffect} from 'react'
import {showBlogAnimation, removeBlogAnimation} from "../animations";
import { useHistory, useParams } from "react-router-dom";
import "./styles/Blog.css"
import leftArrowIcon from "../assets/left-arrow-grey.svg"
import leftArrowIconDark from "../assets/left-arrow-grey2-dark.svg"
import sunIcon from "../assets/sun.svg"
import moonIcon from "../assets/moon-stars.svg"
import {blogs} from "../blogs"



interface blog1Props {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

interface paramTypes {
    title: string
}

const Blog: React.FC<blog1Props> = ({darkMode, toggleDarkMode}): JSX.Element  => {
    // handles font size state
    const [fontSize, setFontSize] = useState("medium")

    let history = useHistory();
    // blog id from url
    let { title } = useParams<paramTypes>();
    // blog fetched from json
    const blog: any = blogs.filter((blog: any) => (blog.id === parseInt(title)))[0];

     // init blog animation on component mount
     useEffect(() => {
        showBlogAnimation()
    }, [])

    // handles font change
    const handleFontChange = (size: string) => {
        if(size === "small"){
            setFontSize(size)
            document.documentElement.style
            .setProperty('--blog-text', '16px');
            document.documentElement.style
            .setProperty('--blog-title-text', '30px');
            document.documentElement.style
            .setProperty('--blog-subtitle-text', '24px');
            document.documentElement.style
            .setProperty('--blog-subtitle-small-text', '20px');
            document.documentElement.style
            .setProperty('--blog-padding', '1rem 0');
        } else if(size ==="medium"){
            setFontSize(size)
            document.documentElement.style
            .setProperty('--blog-text', '22px');
            document.documentElement.style
            .setProperty('--blog-title-text', '36px');
            document.documentElement.style
            .setProperty('--blog-subtitle-text', '28px');
            document.documentElement.style
            .setProperty('--blog-subtitle-small-text', '26px');
            document.documentElement.style
            .setProperty('--blog-padding', '1.4rem 0');
        } else if (size === "large"){
            setFontSize(size)
            document.documentElement.style
            .setProperty('--blog-text', '28px');
            document.documentElement.style
            .setProperty('--blog-title-text', '40px');
            document.documentElement.style
            .setProperty('--blog-subtitle-text', '34px');
            document.documentElement.style
            .setProperty('--blog-subtitle-small-text', '30px');
            document.documentElement.style
            .setProperty('--blog-padding', '1.8rem 0');
        }
    }

    // handles light/dark mode
    const  handleDarkMode = () => {
        const slider: any = document.querySelector(".slider")
     if(!darkMode){
         document.documentElement.style
             .setProperty('--bg', '#162039');
         document.documentElement.style
             .setProperty('--normal-text-color', 'white');
         document.documentElement.style
             .setProperty('--text', 'white');
         document.documentElement.style
             .setProperty('--card-bg', 'rgb(30, 30, 30)');
             document.documentElement.style
             .setProperty('--border-color', 'rgba(255,255,255, 0.1)');
             toggleDarkMode()
             slider.style.animation = "0.2s ease-in-out 0s 1 normal forwards running slider-animation"
     } else{
         document.documentElement.style
             .setProperty('--bg', 'white');
         document.documentElement.style
             .setProperty('--normal-text-color', 'black');
         document.documentElement.style
             .setProperty('--text', 'black');
         document.documentElement.style
             .setProperty('--card-bg', 'white');
             document.documentElement.style
             .setProperty('--border-color', 'rgba(0,0,0, 0.1)');
             toggleDarkMode()
             slider.style.animation = "0.2s ease-in-out 0s 1 normal forwards running slider-animation-reverse"
     }
    }

    // handles clipboard link
    const pasteToClipboard = () => {
        const copyLink: any = document.querySelector(".blog-link");
        navigator.clipboard.writeText(`https://blog-6a15f.web.app/blog/${title}`);
        if (!copyLink.classList.contains("clicked")){
          copyLink.classList.add("clicked");
          setTimeout(() => {copyLink.classList.remove("clicked")}, 1000)
        }
      }


    return (
        <div className="blog-1 blog">
            {/* options for font size & dark mode*/}
        <div className="options">
            <p onClick={e => {
                darkMode && handleDarkMode()
                removeBlogAnimation(() => setTimeout(() => history.push("/"), 1000))
                }} className="back">
                <img src={darkMode ? leftArrowIconDark : leftArrowIcon} alt="back icon"/> Back
            </p>
            <div className="option-controls">
                <div className="font-size">
                    <span onClick={()=> handleFontChange("small")} className={fontSize === "small" ? "small-font selected" : "small-font"}>A</span>
                    <span onClick={()=> handleFontChange("medium")}  className={fontSize === "medium" ? "medium-font selected" : "medium-font"}>A</span>
                    <span onClick={()=> handleFontChange("large")}  className={fontSize === "large" ? "large-font selected" : "large-font"}>A</span>
                </div>
                <div onClick={handleDarkMode} className="dark-mode">
                    <div className={darkMode ? "slider dark" : "slider light"}>
                        <img className="sun" src={sunIcon} alt="light mode icon"/>
                        <img className="moon" src={moonIcon} alt="light mode icon"/>
                    </div>
                </div>
            </div>
        </div>
        {/* blog content */}
        <div className="blog-content">
        <div className="blog-container">
        <div className="blog-container-2">
        <div className="header">
            <div className="header-info">
            <div className="header-topic">{blog.categories.join(", ")}</div>
                <div className="header-time">{blog.duration} min read</div>
            </div>
            <h1>{blog.title}</h1>
        </div>
        <div className="blog-body">
                {blog.content.map((el: any) => {
                    if(el.element === "h2"){
                    return <h2 className={el.className ? el.className : undefined}>{el.content}</h2>
                    } else if (el.element === "p"){
                    return <p className={el.className ? el.className : undefined}>{el.content}</p>
                    } else if (el.element === "img"){
                        return <img className={el.className ? el.className : undefined} src={`http://blog-6a15f.web.app/images/${el.url}`} alt={el.alt}/>
                    } else if (el.element === "ul"){
                        return <ul>
                            {el.children.map((child: any) => 
                            (<li><span>- </span>{child.content}</li>)
                            )}
                        </ul>
                    }
                    return null
                    })}
        </div>
        {/* blog footer */}
        <div className="blog-footer">
            <div className="footer-media">
                <div className="media-links">
                {/* <div  className="twitter"></div> */}
                <div onClick={pasteToClipboard}  className="copy-link blog-link">
                </div>
                {/* <div  className="linkedin">
                </div> */}
                </div>
            </div>
            <div className="footer-read-more">
                Thanks for reading.
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Blog
