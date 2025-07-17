import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ nombre: "", marca: "", precio: "" });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`).then((res) => setProducts(res.data));    
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/products`, form);
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
    setProducts(res.data);
    setForm({ nombre: "", marca: "", precio: "" });
  };

  return (
    <div>
      <h2>Productos</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} />
        <input placeholder="Marca" value={form.marca} onChange={e => setForm({...form, marca: e.target.value})} />
        <input placeholder="Precio" value={form.precio} onChange={e => setForm({...form, precio: e.target.value})} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.nombre} - {p.marca} - {p.precio}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
