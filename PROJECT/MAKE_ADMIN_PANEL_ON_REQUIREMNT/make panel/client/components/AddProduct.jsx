import React, { useState } from "react";
import { addProduct } from "../api/productAPI";

export default function AddProduct({ onAddSuccess }) {
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", form.name);
    data.append("price", form.price);
    data.append("description", form.description);
    if (image) data.append("image", image);

    try {
      await addProduct(data);
      alert("✅ Product added successfully!");
      setForm({ name: "", price: "", description: "" });
      setImage(null);
      setPreview("");
      onAddSuccess();
    } catch (error) {
      alert("❌ Error adding product");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-4 rounded-lg max-w-md mx-auto"
    >
      <h2 className="text-lg font-semibold mb-3">Add New Product</h2>

      <input
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
        required
      />
      <input
        name="price"
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
      ></textarea>

      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="w-full mb-2"
      />
      {preview && (
        <img src={preview} alt="Preview" className="w-32 h-32 object-cover mb-2 rounded" />
      )}

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Product
      </button>
    </form>
  );
}
