import express from "express";
import Event from "../Model/Event.js";
import Registration from "../Model/Registration.js";

const router = express.Router();

router.get("/eventslist", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/events", async (req, res) => {
  try {
    const { name, description, date, time, image, location, category, totalregistered } = req.body;
    const event = new Event({ name, description, date, time, image, location, category, totalregistered });
    const savedEvent = await event.save();
    req.app.locals.io.emit("saveEvent", savedEvent);
    res.status(201).json(savedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { userId, eventId, eventName, eventCategory, name, email, number } = req.body;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    const eventTiming = `${new Date(event.date).toLocaleDateString()} ${event.time}`;
    const registration = new Registration({
      userName: name,
      userId,
      userEmail: email,
      userNumber: number,
      eventId,
      eventName,
      eventCategory,
      eventTiming,
      eventlocation: event.location,
      eventDate: new Date(event.date).toLocaleDateString(),
    });
    const savedRegistration = await registration.save();
    event.totalregistered = event.totalregistered + 1;
    await event.save();
    res.status(201).json(savedRegistration);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/mybooking", async (req, res) => {
  try {
    const orderdata = await Registration.find();
    res.status(200).json(orderdata);
  } catch (error) {
    console.error("Error fetching order data:", error);
    res.status(500).json({ message: "Failed to fetch order data" });
  }
});

export default router;
