import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditPanel = () => {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const API = "http://localhost:5000";

  useEffect(() => {
    axios.get(`${API}/users`).then((res) => setUsers(res.data));
    axios.get(`${API}/categories`).then((res) => setCategories(res.data));
    axios.get(`${API}/blogs`).then((res) => setBlogs(res.data));
  }, []);

  const handleUserEdit = (id, newName) => {
    axios.put(`${API}/users/${id}`, { id, name: newName }).then(() => {
      setUsers(users.map((u) => (u.id === id ? { id, name: newName } : u)));
    });
  };

  const handleCategoryEdit = (id, newName) => {
    axios.put(`${API}/categories/${id}`, { id, name: newName }).then(() => {
      setCategories(
        categories.map((c) => (c.id === id ? { id, name: newName } : c))
      );
    });
  };

  const handleBlogDelete = (id) => {
    axios.delete(`${API}/blogs/${id}`).then(() => {
      setBlogs(blogs.filter((b) => b.id !== id));
    });
  };

  return (
    <div>
      <h4>Edit Users</h4>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>
                <input
                  defaultValue={u.name}
                  onBlur={(e) => handleUserEdit(u.id, e.target.value)}
                />
              </td>
              <td>
                <small>Click outside input to save</small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Edit Categories</h4>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>
                <input
                  defaultValue={c.name}
                  onBlur={(e) => handleCategoryEdit(c.id, e.target.value)}
                />
              </td>
              <td>
                <small>Click outside input to save</small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Edit/Delete Blogs</h4>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.title}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => navigate(`/edit-blog/${b.id}`)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleBlogDelete(b.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditPanel;
