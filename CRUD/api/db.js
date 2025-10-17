import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false
});

db.connect(err => {
    if (err) {
        console.error("Erro na conexão com o MySQL:", err);
    } else {
        console.log("✅ Conectado ao MySQL da Aiven!");
    }
});
