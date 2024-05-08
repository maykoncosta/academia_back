import express from "express";
import cors from "cors";
import { checkDatabase } from "./config/config.js";
import clientRoutes from "./route/clientRoutes.js";
import authRoutes from "./route/authRoutes.js";
import { authenticate } from "./middleware.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/auth", authRoutes);
app.use("/clientes", authenticate, clientRoutes);

const PORT = process.env.PORT || 3000;

checkDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Falha ao inicializar o banco de dados:", error);
  });
