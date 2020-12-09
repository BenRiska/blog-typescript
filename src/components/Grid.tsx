import React from 'react'
import "./styles/Grid.css"

interface blogListProps {
    handleBlogSelection: (blogName: any) => void;
    blogs: any;
}

const Grid: React.FC<blogListProps> = ({handleBlogSelection, blogs}): JSX.Element => {
    return (
        <div className="grid">
        {blogs.map((blog: any) =>  {
            if(blog.placeholder){
                return <div data-index={blog.id} className="grid-item">
                            <h1 style={{textDecoration: "line-through", color: "grey"}}>Work in progress.</h1>
                            <span className="loader-bar"><span></span></span>
                            <p className="categories">coming soon</p>
                        </div>
            } else{  
            return <div onClick={() => handleBlogSelection(blog.url)} data-index={blog.id} className="grid-item">
                        <h1>{blog.title}</h1>
                        <span className="loader-bar"><span></span></span>
                        <p className="categories">{blog.categories.join(", ")}.</p>
                        <div className="small-text">
                            <span className="date">{blog.uploaded}</span>
                            <span className="length">{blog.duration} min read</span>
                        </div>
                    </div>
            }
        })}
        
    </div>
    )
}

export default Grid
