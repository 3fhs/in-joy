import React from 'react';
import './blogCart.css';

function BlogCard({blog}) {
  return (
    <div className="blog col-xl-3 col-md-6 mb-4">
        <article>
            <div className="post-img">
                <img src={blog.locationPhoto} alt="thats is imazing" className="img-other" />
            </div>

            <p className="post-categry">
                {blog.location}
            </p>

            <h2 className="title">
               <button>{blog.comment}</button> 
            </h2>
            <div className="d-flex align-items-center">
                <img src={blog.photo} alt="thats crazy" className="img-other-thing post-auther-img flex-shrink-" />
                <div className="post-meta">
                    <p className="post-author-list">
                        {blog.name}
                    </p>
                    <p className="post-date">
                        <time dateTime="2024-01-01">
                            {blog.date}
                        </time>
                    </p>
                </div>
            </div>
        </article>
    </div>
  )
}

export default BlogCard;