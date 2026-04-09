const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("API running");
});

app.get("/api/health", (req, res) => {
    res.json({ ok: true });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});