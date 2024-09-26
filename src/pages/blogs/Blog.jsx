import React, { useEffect, useState } from 'react';
import './blog.css';
import BlogCard from '../../componentes/blogscart/BlogCard';

function Blog() {
    const [blogs, setBlogs] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:4000/reviews")
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch(error => console.log("Error fetching data:", error));
      }
    
      useEffect(() => {
        fetchData();
      }, []);

  return (
    <section id='blogs' className='blogs'>
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">
                    Our Blog
                </h4>
            </div>
            <div className="row mt-5">
                {blogs && blogs.length > 0 && blogs.map(blog => 
                    <BlogCard blog={blog} key={blog.id}/>
                )}
            </div>
        </div>
    </section>
  )
}

export default Blog;