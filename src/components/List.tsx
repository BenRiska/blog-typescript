import React from 'react'
import "./styles/List.css"


interface blogListProps {
    handleBlogSelection: (blogName: any) => void;
    blogs: any;
}

const List: React.FC<blogListProps> = ({handleBlogSelection, blogs}): JSX.Element => {
    return (
        <div  className="list">
        {blogs.map((blog: any) =>  {
            if(blog.placeholder){
                return <div key={blog.id} data-index={blog.id} className="list-item">
                <h1 style={{textDecoration: "line-through", color: "grey"}}>Work in progress.</h1>
                <span className="length">Coming soon.</span>
                </div>
            }
            else{
                return <div key={blog.id} onClick={() => handleBlogSelection(blog.url)} data-index={blog.id} className="list-item">
                <h1>{blog.title}</h1>
                <span className="length">{blog.duration} min read</span>
                </div>
            }
        })}
    </div>
    )
}

export default List
