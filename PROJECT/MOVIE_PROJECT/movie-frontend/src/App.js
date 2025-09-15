import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // 👈 Create this file

const API_URL = "http://localhost:8090/movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({ title: "", year: "", rating: "" });
  const [editId, setEditId] = useState(null);

  // Fetch movies
  const fetchMovies = async () => {
    const res = await axios.get(API_URL);
    setMovies(res.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Add or Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const movieData = {
      title: form.title,
      year: Number(form.year), // ✅ ensure number
      rating: Number(form.rating),
    };

    if (editId) {
      await axios.put(`${API_URL}/${editId}`, movieData);
      setEditId(null);
    } else {
      await axios.post(API_URL, movieData);
    }
    setForm({ title: "", year: "", rating: "" });
    fetchMovies();
  };

  // Delete
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchMovies();
  };

  // Edit
  const handleEdit = (movie) => {
    setForm({
      title: movie.title,
      year: movie.year,
      rating: movie.rating,
    });
    setEditId(movie._id);
  };

  return (
    <div className="container">
      <h1>🎬 Movie Project</h1>

      <form onSubmit={handleSubmit} className="movie-form">
        <input
          type="text"
          placeholder="Movie Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Release Year"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          required
        />
        <button type="submit" className="btn primary">
          {editId ? "Update Movie" : "Add Movie"}
        </button>
      </form>

      <table className="movie-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m._id}>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.rating}</td>
              <td>
                <button className="btn edit" onClick={() => handleEdit(m)}>
                  ✏️ Edit
                </button>
                <button className="btn delete" onClick={() => handleDelete(m._id)}>
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
