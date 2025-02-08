# OSM Events - Backend

This project is the backend for **OSM Events**, a dynamic event management application that enables users to browse, register, and manage events seamlessly. The backend is built with Node.js, Express, and MongoDB, and it leverages Socket.IO for real-time updates.

## Overview

**OSM Events - Backend** provides a robust RESTful API for event management and user registration. It handles real-time event updates, registration handling, and data storage with MongoDB. This backend is designed to scale and efficiently manage event-related data.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Tech Stack](#tech-stack)
- [License](#license)
- [Contact](#contact)

## Features

- **RESTful API:** Create, retrieve, and update events and registrations.
- **Real-Time Updates:** Integrated with Socket.IO to broadcast live event updates.
- **Robust Data Management:** Utilizes MongoDB and Mongoose for efficient data storage and retrieval.
- **Registration Handling:** Allows users to register for events and updates event registration counts automatically.

## Installation

### Prerequisites

- **Node.js:** Version 14.x or higher.
- **MongoDB:** Ensure a MongoDB instance is available.
- **Package Manager:** npm or yarn.

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ramesh3214/Eventbackend.git
   cd Eventbackend
2.**Install Dependencies:**
```bash

npm install


3.Configuration
Environment Variables:

Create a .env file in the root directory of the backend and add the following variables (adjust values as needed):

.env
PORT=8080
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Socket.IO Setup:

The backend is configured to use Socket.IO for real-time event updates. Ensure your front-end and any other connected clients are set up to receive these updates.

4.Usage
Running the Backend
Start the backend server by running:

bash

node server.js
The server will run on the port specified in your .env file (default is 8080).

API Endpoints
Events
GET /api/eventslist
Returns a list of events sorted by date.

POST /api/events
Creates a new event.

Request Body Example:

json

{
  "name": "Event Name",
  "description": "Event Description",
  "date": "2023-12-31",
  "time": "18:00",
  "image": "image_url",
  "location": "Event Location",
  "category": "Conference",
  "totalregistered": 0
}
Registrations
POST /api/register
Registers a user for an event and increments the event's total registration count.

Request Body Example:

json

{
  "userId": "user_id",
  "eventId": "event_id",
  "eventName": "Event Name",
  "eventCategory": "Event Category",
  "name": "User Name",
  "email": "user@example.com",
  "number": "1234567890"
}
GET /api/mybooking
Retrieves all booking registrations.

Tech Stack
Backend Framework: Node.js, Express
Database: MongoDB, Mongoose
Real-Time Communication: Socket.IO
Utilities: Axios, ESLint
License
This project is licensed under the MIT License.

Contact
For any questions or feedback, please contact:
Email: sahramesh1501@gmail.com
GitHub: ramesh3214

