📬 [Subscription Tracker API](https://staynodejs.onrender.com/)

A backend API for managing user subscriptions and reminders, built with Node.js, Express, and MongoDB.
The project uses Mongoose for data modeling, Arcjet for security, and Upstash Workflow for background jobs.
Deployed on Render with a clean src/ project structure.

🚀 Tech Stack

Node.js (ES Modules)

Express.js

MongoDB Atlas

Mongoose

Arcjet – security & request protection

Upstash Workflow – background jobs & reminders

Render – deployment & hosting

📁 Project Structure
.
├── src
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── database/
│   └── workflows/
├── .env
├── package.json
└── README.md

⚙️ Environment Variables

Create a .env file and define:

PORT=5500
MONGO_URI=your_mongodb_connection_string
ARCJET_KEY=your_arcjet_key
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token

▶️ Running Locally
npm install
npm run dev


Server runs at:

http://localhost:5500

🌐 Deployment

Deployed on Render

Start command:

node src/server.js


MongoDB Atlas IP access configured for Render

✨ Features

User authentication & authorization

Subscription management

Secure API with Arcjet

Background workflows & reminders via Upstash

Scalable MongoDB schema with Mongoose

📌 License

MIT
