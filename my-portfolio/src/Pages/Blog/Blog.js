// Component for Blogs

import "./Blog.css";
import { useEffect, useState } from "react";

function Blogs() {
  const [displayBlog, setDisplayBlog] = useState([]);

  //   Function to fetch blogs from database
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogResponse = await fetch("/api/blogs").then((blogResponse) => {
          return blogResponse.json();
        });
        console.log(blogResponse);

        // Format the date for each blog item
        const blogsWithFormattedDate = blogResponse.map((blog) => {
          const dateFromDatabase = new Date(blog.date);
          const year = dateFromDatabase.getFullYear();
          const month = dateFromDatabase.getMonth() + 1;
          const day = dateFromDatabase.getDate();

          const englishDateStyle = `${day < 10 ? "0" : ""}${day}-${
            month < 10 ? "0" : ""
          }${month}-${year}`;

          return { ...blog, englishDateStyle }; // Add formatted date to blog object
        });
        setDisplayBlog(blogsWithFormattedDate);
      } catch (error) {
        console.error("Error fetching blog", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blogs">
      <h2>Welcome to my Blog</h2>
      <div className="blogContainer">
        {Array.isArray(displayBlog) &&
          displayBlog.map((blog, index) => (
            <div key={index} className="blogItem">
              <h3>{blog.headline}</h3>
              <div className="blogDetails">
                <h6>{blog.author}</h6>
                <p>{blog.englishDateStyle}</p>
              </div>
              <p>{blog.body}</p>
              <a href={blog.blogLink} target="_blank" rel="noreferrer">
                {blog.blogLink}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blogs;
