const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const User = require("./models/User");
const Product = require("./models/Product");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

app.get("/", (_, res) => res.send("API funcionando"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.sync();
    console.log("Base de datos sincronizada");
    console.log(`Servidor corriendo en puerto ${PORT}`);
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
});
