// Component for Blogs

import "./Blog.css";
import { useEffect, useState } from "react";

function Blogs() {
  const [displayBlog, setDisplayBlog] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogResponse = await fetch("/api/blogs").then((blogResponse) => {
          return blogResponse.json();
        });
        console.log(blogResponse);
        setDisplayBlog(blogResponse);
      } catch (error) {
        console.error("Error fetching blog", error);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div className="blogs">
      <h2>Blogs</h2>
      <p>Test</p>
    </div>
  );
}

export default Blogs;
