# 🌍 Carbon Maps
Carbon Maps is a full-stack web application designed to help users plan eco-friendly routes and track trip-related data. The project combines an interactive frontend with a lightweight backend API.
---
## 🚀 Features
* 🌐 Interactive map using Mapbox
* 🧭 Route planning interface
* 📊 Trip data handling
* ⚡ Fast React-based UI
* 🔗 Backend API for storing trip data
---
## 🛠️ Tech Stack
### Frontend
* React.js
* Mapbox GL
* React Router
* React Icons
### Backend
* Node.js
* Express.js
* CORS
---
## 📁 Project Structure
```
carbon-maps/
│
├── client/       # React frontend
├── server/       # Node.js backend
└── README.md
```
---
## ⚙️ Installation & Setup
### 1️⃣ Clone the repository
```
git clone <your-repo-url>
cd carbon-maps
```
---
### 2️⃣ Setup Backend
```
cd server
npm install
node server.js
```
Server runs on:
```
http://localhost:5001
```
---
### 3️⃣ Setup Frontend
```
cd client
npm install
npm start
```
App runs on:
```
http://localhost:3000
```
---
## 🔑 Environment Variables
Create a `.env` file inside `client/`:
```
REACT_APP_MAPBOX_TOKEN=your_mapbox_token
```
---
## 📡 API Endpoints
### GET /
Check server status
### POST /save-trip
Save trip data
---
## 📌 Future Improvements
* Add authentication
* Store data in database
* Improve carbon footprint calculation
* Deploy to cloud
---
## 👨‍💻 Author
Kamali K
---
## 📜 License
This project is for educational purposes.
