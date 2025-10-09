import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/productAPI";
import EditProduct from "./EditProduct";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this product?")) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-3">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-3 rounded-lg bg-white shadow-sm">
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p>₹{product.price}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => setEditingProduct(product)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingProduct && (
        <EditProduct
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onUpdateSuccess={fetchProducts}
        />
      )}
    </div>
  );
}
