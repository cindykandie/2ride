// apps/backend/src/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

// test route
app.get("/", (req, res) => {
  res.send("2Ride API is running 🚴‍♂️");
});

const eventsRoute = require("./routes/events");

app.use("/api/events", eventsRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
