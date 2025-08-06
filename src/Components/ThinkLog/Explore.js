import React, { useEffect, useState } from "react";
import axios from "axios";

const Explore = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs?_expand=user&_expand=category")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center fw-bold">Explore Blogs</h1>

      {loading ? (
        <p className="text-center">Loading blogs...</p>
      ) : error ? (
        <p className="text-danger text-center">{error}</p>
      ) : blogs.length === 0 ? (
        <p className="text-muted text-center">No blogs found.</p>
      ) : (
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="card h-100 d-flex flex-column">
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.snippet}</p>
                </div>
                <div className="card-footer text-muted small">
                  By: {blog.username || "Unknown"} | Category:{" "}
                  {blog.categoryName || "Unknown"} | Date: {blog.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
