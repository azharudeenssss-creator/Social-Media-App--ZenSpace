# ZenSpace 🌐

ZenSpace is a lightweight social media app built with a clean, framework-free frontend (single HTML file) and designed to simulate core social features like posts, likes, comments, follows, and notifications.

This version focuses on simplicity and clarity — everything runs in the browser with zero dependencies.

---

## 🚀 Features

* Create and view posts
* Like, comment, and repost
* Follow / unfollow users
* Notification system with badge
* Infinite scrolling feed
* Simple view routing (no framework)

---

## 🧠 How It Works

This project uses in-memory data and browser APIs to simulate a real social media app.

| Section                            | Description                                                |
| ---------------------------------- | ---------------------------------------------------------- |
| `users[] / seedPosts[]`            | Mock data store (replace with API later)                   |
| `renderPost()`                     | Builds each post UI dynamically                            |
| `IntersectionObserver`             | Handles infinite scrolling using a sentinel element        |
| `toggleLike / addComment / repost` | Updates post interactions in memory                        |
| `simulateSocketNotifications()`    | Simulates real-time notifications (replace with WebSocket) |
| `addNotif()`                       | Adds notifications and updates badge UI                    |
| `toggleFollow()`                   | Manages follow state using a Set                           |
| `showView()`                       | Simple client-side routing without frameworks              |

---

## 📂 Project Structure

```
index.html   # Entire app (HTML + CSS + JS+ Playwright) 
```

---

---

## 📂 Project Structure

```txt
ZenSpace-SocialApp
│
├── social-media-app
│   ├── website.html
│   └── tests
│       └── app.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

---

## ▶️ Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/azharudeenssss@creator/ZenSpace-SocialApp.git
```

### 2. Open Project

```Powershell
cd ZenSpace-SocialApp
```

### 3. Start Local Server

```bash
live-server --port=8080
```

### 4. Open Browser

```txt
http://127.0.0.1:8080/social-media-app/website.html
```

---

## 🧪 Playwright Testing

This project includes automated testing using Playwright.

### Run Tests

```bash
npx playwright test --headed
```

### Run Specific Test

```bash
npx playwright test -g "Create new post" --headed
```

### Open Report

```bash
npx playwright show-report
```

---

## 🔄 Upgrading to Full Stack

You can extend this project into a full MERN stack application.

Possible upgrades:

- MongoDB database
- Express backend API
- React frontend
- JWT authentication
- Real-time Socket.IO notifications
- Cloud image uploads
- Persistent user profiles

---

## 📌 Future Improvements

- Image upload support
- Persistent database
- Real-time messaging
- Mobile optimization
- Better animations
- User authentication
- Profile customization

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a pull request

---
---

## 🔄 Upgrading to Full Stack (Optional)

You can extend this into a full MERN app:

* Replace `users[]` and `seedPosts[]` with a backend API
* Use MongoDB for persistent storage
* Add authentication with JWT
* Replace `simulateSocketNotifications()` with real-time sockets (Socket.IO)

---

## 📌 Future Improvements

* Image upload support
* Persistent database
* Real-time chat
* Better UI/UX design
* Mobile optimization

---

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repo and submit a pull request.

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Your Name

S.Mohamed Azharudeen | https://www.linkedin.com/in/mohamed-azharudeen-/

⭐ If you found this useful, consider starring the repo!

## Website Screenshot

<img width="1904" height="998" alt="Screenshot 2026-04-18 210311" src="https://github.com/user-attachments/assets/3948dec6-86af-410a-82b9-5f563d79aa2d" >
<img width="1917" height="1009" alt="Screenshot 2026-04-18 210331" src="https://github.com/user-attachments/assets/96e9da38-dd35-4c22-ab80-1adb2bc11025" />
<img width="1914" height="1017" alt="Screenshot 2026-04-18 210358" src="https://github.com/user-attachments/assets/2e41effc-bb13-4452-8d77-ea5c15610837" />
<img width="1901" height="1014" alt="Screenshot 2026-04-18 210417" src="https://github.com/user-attachments/assets/1e5082f7-fa34-4051-a440-b2435c105901" />
<img width="1919" height="1017" alt="Screenshot 2026-04-18 210435" src="https://github.com/user-attachments/assets/ce6f29cd-c6c6-4643-9de5-c0935e126863" />



