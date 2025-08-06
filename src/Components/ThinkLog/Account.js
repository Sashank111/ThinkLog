import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const users = [
  { username: "john", password: "1111", userId: 1, name: "John Doe" },
  { username: "jane", password: "2222", userId: 2, name: "Jane Smith" },
  { username: "ash", password: "3333", userId: 3, name: "ASH" },
];

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userBlogs, setUserBlogs] = useState([]);
  const navigate = useNavigate();

  const handleLogin = () => {
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      setIsLoggedIn(true);
      setLoggedInUser(matchedUser);
      fetchUserBlogs(matchedUser.userId);
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  const fetchUserBlogs = (userId) => {
    axios
      .get(`http://localhost:5000/blogs?userId=${userId}&_expand=category`)
      .then((res) => setUserBlogs(res.data))
      .catch((err) => console.error("Error fetching user blogs:", err));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
    setUserBlogs([]);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container py-5">
      {!isLoggedIn ? (
        <div className="text-center">
          <h2>User Login</h2>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Welcome, {loggedInUser.name}</h3>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <h4>Your Blog Posts</h4>
          <div className="row">
            {userBlogs.length === 0 ? (
              <p className="text-muted">No blog posts yet.</p>
            ) : (
              userBlogs.map((post) => (
                <div className="col-md-6 mb-4" key={post.id}>
                  <div className="card h-100 d-flex flex-column">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.snippet}</p>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => navigate(`/edit-blog/${post.id}`)}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="card-footer text-muted small">
                      By: {loggedInUser.username} | Category:{" "}
                      {post.category.name} | Date: {post.date}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
