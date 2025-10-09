import React, { useState } from "react";
import { updateProduct } from "../api/productAPI";

export default function EditProduct({ product, onClose, onUpdateSuccess }) {
  const [form, setForm] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
  });
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

    await updateProduct(product._id, data);
    alert("✅ Product updated!");
    onUpdateSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold mb-3">Edit Product</h3>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 mb-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 mb-2 rounded"
        />
        <input type="file" onChange={handleFile} className="w-full mb-2" />
        {preview && <img src={preview} className="w-24 h-24 object-cover rounded mb-2" />}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
