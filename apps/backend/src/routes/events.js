// apps/backend/src/routes/events.js
const express = require("express");
const router = express.Router();

const events = [
  {
    id: 1,
    title: "Ngong Hills Ride",
    date: "2026-05-10",
  },
  {
    id: 2,
    title: "Karura Forest Ride",
    date: "2026-05-15",
  },
];

router.get("/", (req, res) => {
  res.json(events);
});

module.exports = router;