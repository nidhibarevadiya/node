import React, { useState } from 'react'

const SAMPLE_PRODUCTS = [
  { id: 1, title: 'Ceramic Vase', price: 499 },
  { id: 2, title: 'Handmade Mug', price: 299 }
]

export default function Products() {
  const [products, setProducts] = useState(SAMPLE_PRODUCTS)
  const remove = (id) => setProducts(products.filter(p => p.id !== id))

  const containerStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
  }

  const headingStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#1a202c',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
  }

  const cardStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '15px',
    transition: '0.3s',
    backgroundColor: '#fafafa',
  }

  const titleStyle = {
    fontWeight: '600',
    fontSize: '16px',
    marginBottom: '5px',
    color: '#333',
  }

  const priceStyle = {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  }

  const btnContainer = {
    display: 'flex',
    gap: '8px',
  }

  const editBtn = {
    flex: 1,
    padding: '6px 0',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  }

  const delBtn = {
    flex: 1,
    padding: '6px 0',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#5A9690',
    color: '#fff',
    cursor: 'pointer',
  }

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Products</h2>
      <div style={gridStyle}>
        {products.map(p => (
          <div key={p.id} style={cardStyle}>
            <h3 style={titleStyle}>{p.title}</h3>
            <p style={priceStyle}>Price: ₹{p.price}</p>
            <div style={btnContainer}>
              <button style={editBtn}>Edit</button>
              <button onClick={() => remove(p.id)} style={delBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
