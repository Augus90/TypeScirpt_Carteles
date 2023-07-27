import express from "express";
import router from "./network/routes";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({extended: false}));

router(app);

app.listen(PORT);

console.log(`La app esta escuchando en http://localhost:${PORT}`);