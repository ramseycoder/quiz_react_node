import express from "express";

const PORT = 4000;
const app = express();

app.listen(PORT, () => console.log("server listen on port ", PORT));
