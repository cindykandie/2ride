// apps/backend/src/index.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// test route
app.get("/", (req, res) => {
  res.send("2Ride API is running 🚴‍♂️");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const eventsRoute = require("./routes/events");

app.use("/api/events", eventsRoute);