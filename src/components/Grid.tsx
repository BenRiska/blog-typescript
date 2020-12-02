import React from 'react'
import "./styles/Grid.css"

interface blogListProps {
    handleBlogSelection: (blogId: any, blogName: any) => void;
    blogs: any;
}

const Grid: React.FC<blogListProps> = ({handleBlogSelection, blogs}): JSX.Element => {
    return (
        <div className="grid">
        {blogs.map((title: any) =>  {
            if(title.placeholder){
                return <div data-index={title.id} className="grid-item">
                            <h1 style={{textDecoration: "line-through", color: "grey"}}>Work in progress.</h1>
                            <span className="loader-bar"><span></span></span>
                            <p className="categories">coming soon</p>
                        </div>
            } else{  
            return <div onClick={() => handleBlogSelection(title.id,  title.url)} data-index={title.id} className="grid-item">
                        <h1>{title.title}</h1>
                        <span className="loader-bar"><span></span></span>
                        <p className="categories">{title.categories.join(", ")}.</p>
                        <div className="small-text">
                            <span className="date">{title.uploaded}</span>
                            <span className="length">{title.duration} min read</span>
                        </div>
                    </div>
            }
        })}
        
    </div>
    )
}

export default Grid
