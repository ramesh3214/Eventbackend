// models/Event.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
   
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    image: { type: String ,default:"https://img.freepik.com/free-vector/party-people-silhouettes-background_23-2147491613.jpg?t=st=1738974038~exp=1738977638~hmac=0e02476be946b6531fd936f21531ed16f27f6c2436212f137e1de00ca354cb6a&w=740" },
    location: { type: String, required: true },
    category: { type: String, required: true },
    totalregistered: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
