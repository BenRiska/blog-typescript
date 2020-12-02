import React from 'react'
import "./styles/List.css"


interface blogListProps {
    handleBlogSelection: (blogId: any, blogName: any) => void;
    blogs: any;
}

const List: React.FC<blogListProps> = ({handleBlogSelection, blogs}): JSX.Element => {
    return (
        <div  className="list">
        {blogs.map((title: any) =>  {
            if(title.placeholder){
                return <div key={title.id} data-index={title.id} className="list-item">
                <h1 style={{textDecoration: "line-through", color: "grey"}}>Work in progress.</h1>
                <span className="length">Coming soon.</span>
                </div>
            }
            else{
                return <div key={title.id} onClick={() => handleBlogSelection(title.id, title.url)} data-index={title.id} className="list-item">
                <h1>{title.title}</h1>
                <span className="length">{title.duration} min read</span>
                </div>
            }
        })}
    </div>
    )
}

export default List
