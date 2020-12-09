import {useState, useEffect} from 'react'
import blogTitles from "../blogTitles.js"
import {openDropdownAnimation, closeDropdownAnimation, showGridItems, removeGridItems, showListItems, removeListItems, easeBlogs} from "../animations"
import gridLayoutIcon from "../assets/grid-layout-icon.svg"
import vertLayoutIcon from "../assets/vert-layout.svg"
import expandIcon from "../assets/expand-arrow-icon.svg"
import Grid from "./Grid"
import List from "./List"
import "./styles/BlogList.css"


interface blogListProps {
    handleBlogSelection: (blogName: string) => void;
}

const BlogList: React.FC<blogListProps> = ({handleBlogSelection}): JSX.Element => {

    const [dropdown, setDropdown] = useState(false)
    const [topic, setTopic] = useState("All")
    const [grid, setGrid] = useState(false)
    const [gridIcon, setGridIcon] = useState(false)
    const [blogs, setBlogs] = useState(blogTitles) 

    useEffect(() => {
        easeBlogs()
    },[])

    // listens for when the list grid changes and triggers animation
    useEffect(() => {
        if(grid){
            showGridItems()
        } else{
            showListItems()
        }
    }, [grid, blogs])

    const handleDropdown = () => {
        if(dropdown){
            closeDropdownAnimation()
            setDropdown(false)
        } else{
            openDropdownAnimation()
            setDropdown(true)
        }
    }

     // handles blog selection
     const handleSelect = (choice: string): void | undefined => {

        if(choice === topic){
            return
        }

        handleDropdown()
        setTopic(choice);

        let filteredBlogs: any = [];

        if(choice === "All"){
            filteredBlogs = blogTitles;
        } else{
        filteredBlogs = blogTitles.filter(blog => {
            let condition = false;
            blog.categories.forEach(cat => {
                if (cat.includes(choice)){
                    condition = true;
                }
            })
            return condition;
        })
        }

    grid === true ? removeGridItems(() => setBlogs(filteredBlogs)) : removeListItems(() => setBlogs(filteredBlogs));
    }

    // handles layout change
    const handleLayout = (newLayout: string): void => {
        if(newLayout === "grid"){
            setGridIcon(true)
            removeListItems(() => setGrid(true))
        } else{
            setGridIcon(false)
            removeGridItems(() => setGrid(false))
        }
    }


    return (
        <>
        <div className="blogList">
            {/* toggle catagory and grid display*/}
            <div className="blogList__toggle">
                <div className="blogList__topics-container">
                    <span className="blogList__small-screen">You are reading</span>
                    {" "}
                    <div onClick={handleDropdown} className="blogList__filter-wrap">
                        <div className="blogList__filter-aligner">
                        <span>{topic}</span>
                        <img src={expandIcon} alt="expand blog topics list"/>
                        </div>
                        <span className="blogList__underline"></span>
                        <ul className="blogList__topics">
                            <li onClick={() => handleSelect("All")} className={topic === "All" ? "selected" : ""}>All</li>
                            <li onClick={() => handleSelect("Design")} className={topic === "Design" ? "selected" : ""}>Design</li>
                            <li onClick={() => handleSelect("Living")} className={topic === "Living" ? "selected" : ""}>Living</li>
                            <li onClick={() => handleSelect("Working")} className={topic === "Working" ? "selected" : ""}>Working</li>
                        </ul>
                    </div>
                    {" "}
                    <span>blogs.</span>
                </div>
                <div className="blogList__layout">
                    <img onClick={() => handleLayout("grid")} className={gridIcon ? "active" : ""} src={gridLayoutIcon} alt="blog list toggle button"/>
                    <img onClick={() => handleLayout("list")} className={!gridIcon ? "active" : ""} src={vertLayoutIcon} alt="blog list toggle button"/>
                </div>
            </div>
            {/* blog list */}
            <div className="blogList__container">
            {grid ? (<Grid handleBlogSelection={handleBlogSelection} blogs={blogs}/>) : (<List handleBlogSelection={handleBlogSelection} blogs={blogs}/>)}
            </div>
        </div>
        </>
    )
}

export default BlogList
