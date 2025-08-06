import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs?_expand=user")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section className="container text-center py-5">
      <h1 className="display-4 fw-bold">WRITE IT OFF!!</h1>
      <p className="lead mb-4">
        Write the things you want to write, share your thoughts, and explore the
        world of blogging with <span className="text-primary">ThinkLog</span>.
      </p>
      <a href="/WriteABlog" className="btn btn-success mb-5">
        Write Now
      </a>

      <h2 className="mb-4 mt-5">
        <a href="/explore" className="text-dark text-decoration-none">
          Explore Blogs
        </a>
      </h2>

      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100 d-flex flex-column">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.snippet}</p>
              </div>
              <div className="card-footer text-muted small">
                By: {post.username || post.user?.name || "Unknown"} | Category:{" "}
                {post.categoryName || "Unknown"} | Date: {post.date}
              </div>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <p className="text-muted">
            No blogs available. Write your first blog now!
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
