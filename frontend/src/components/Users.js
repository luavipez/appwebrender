import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ usuario: "", nombre: "", direccion: "" });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((res) => setUsers(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/users`, form);
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
    setUsers(res.data);
    setForm({ usuario: "", nombre: "", direccion: "" });
  };

  return (
    <div>
      <h2>Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Usuario" value={form.usuario} onChange={e => setForm({...form, usuario: e.target.value})} />
        <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} />
        <input placeholder="Dirección" value={form.direccion} onChange={e => setForm({...form, direccion: e.target.value})} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.nombre} - {u.usuario} - {u.direccion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
