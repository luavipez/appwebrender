import React from "react";
import Users from "./components/Users";
import Products from "./components/Products";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>CRUD Usuarios y Productos</h1>
      <Users />
      <hr />
      <Products />
    </div>
  );
}

export default App;
