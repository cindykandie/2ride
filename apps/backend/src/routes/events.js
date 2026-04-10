// apps/backend/src/routes/events.js
const express = require("express");
const router = express.Router();
const db = require("../lib/firestore");

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("events").orderBy("date").get();

    const events = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(events);
  } catch (error) {
    console.error("Failed to load events:", error);
    res.status(500).json({ error: "Failed to load events" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, image, location, date, time, description } = req.body ?? {};

    if (
      !isNonEmptyString(title) ||
      !isNonEmptyString(image) ||
      !isNonEmptyString(location) ||
      !isNonEmptyString(date) ||
      !isNonEmptyString(time)
    ) {
      return res.status(400).json({
        error: "title, image, location, date, and time are required",
      });
    }

    const event = {
      title: title.trim(),
      image: image.trim(),
      location: location.trim(),
      date: date.trim(),
      time: time.trim(),
      ...(isNonEmptyString(description)
        ? { description: description.trim() }
        : {}),
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection("events").add(event);

    return res.status(201).json({
      id: docRef.id,
      ...event,
    });
  } catch (error) {
    console.error("Failed to create event:", error);
    res.status(500).json({ error: "Failed to create event" });
  }
});

module.exports = router;
