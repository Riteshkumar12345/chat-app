
# 💬 Real-Time Chat App

A real-time chat application built using **React (frontend)**, **Node.js/Express (backend)**, and **Socket.IO** for seamless real-time messaging. MongoDB is used for persistent chat storage.

---

## 🚀 Features

- 🔒 User Authentication (Register & Login)
- 💬 Real-time one-to-one messaging
- 🟢 Online/offline user indicator
- 🔔 Message notifications
- 📱 Responsive Design (mobile + desktop)
- 🔄 Socket.IO integration for real-time updates

---

## 🛠 Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React, Context API     |
| Backend    | Node.js, Express.js    |
| Real-time  | Socket.IO              |
| Database   | MongoDB + Mongoose     |
| Styling    | Tailwind CSS / Custom CSS |

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/real-time-chat-app.git
cd real-time-chat-app
```

### 2. Install dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd ../client
npm install
```

---

## ⚙️ Environment Setup

### 📁 `/server/.env`
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 📁 `/client/.env`
```
REACT_APP_API_URL=http://localhost:5000
```

---

## ▶️ Running the Application

**Start Backend**
```bash
cd server
npm run dev
```

**Start Frontend**
```bash
cd ../client
npm start
```

---

## 📸 Screenshots

Add your screenshots in a `/screenshots` folder:

```markdown
![Login](screenshots/login.png)
![Chat Page](screenshots/chat.png)
```

---

## 📁 Folder Structure

```
real-time-chat-app/
├── client/        # React frontend
├── server/        # Node.js backend
├── README.md
```

---

## 🌐 Deployment

You can deploy it here:
- **Frontend**: Vercel / Netlify
- **Backend**: Render / Railway / Cyclic
- **Database**: MongoDB Atlas

---

## 🙌 Contributing

Feel free to fork this repo and submit a pull request.

---



