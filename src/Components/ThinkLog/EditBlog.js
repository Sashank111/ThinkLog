import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch blog:", err);
        setBlog(false); // Use false to indicate not found
      });

    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setCategories([]);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };
  if (blog === null) return <p className="text-center mt-5">Loading...</p>;
  if (blog === false)
    return <p className="text-center mt-5 text-danger">Blog not found.</p>;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/blogs/${id}`, blog)
      .then(() => {
        alert("Blog updated successfully!");
        navigate("/account");
      })
      .catch((err) => console.error("Update failed:", err));
  };

  if (!blog) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container py-5">
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="form-control mb-3"
          value={blog.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="body"
          className="form-control mb-3"
          value={blog.body}
          onChange={handleChange}
          placeholder="Full Body"
          required
        />
        <input
          type="text"
          name="snippet"
          className="form-control mb-3"
          value={blog.snippet}
          onChange={handleChange}
          placeholder="Snippet"
          required
        />
        <select
          name="categoryId"
          className="form-control mb-3"
          value={blog.categoryId}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          className="form-control mb-3"
          value={blog.date}
          onChange={handleChange}
          required
        />
        <button className="btn btn-success" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
