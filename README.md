# 🤖 Chatbot Project

A clean and modern chatbot frontend built with **React**.
---

## 🚀 Live Demo

👉 [Click here to open the app](https://mojoschuck.github.io/chatbot-project/)

---

## 📦 Tech Stack

- ⚛️ [React](https://reactjs.org/) – UI Library
- ⚡ [Vite](https://vitejs.dev/) – Build Tool
- 🧠 [SuperSimpleDev Chatbot API](https://supersimple.dev/projects/chatbot) – Simulated bot (coin flip, date, dice roll)
- 🎨 CSS – Styling
- 🌐 [GitHub Pages](https://pages.github.com/) – Deployment

---

## 📁 Project Structure

```bash
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, GIFs, icons
│   ├── components/     # React components (ChatMessage, ChatInput, etc.)
│   ├── App.jsx         # Main component
│   ├── main.jsx        # Entry point
│   ├── App.css         # Component styles
│   └── index.css       # Global styles
├── dist/               # Auto-generated build output
├── index.html
├── package.json
├── vite.config.js
```

---

## 🧑‍💻 Local Development

```bash
# Clone the repository
git clone https://github.com/mojoschuck/chatbot-project.git
cd chatbot-project

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## 🏗️ Build & Deployment

### Build the app:

```bash
npm run build
```

The production-ready code will be in the `dist/` folder.

### Deploy to GitHub Pages:

```bash
npm run deploy
```

This script:
- Builds the project
- Pushes `dist/` to the `gh-pages` branch
- Updates your GitHub Pages site

> The `vite.config.js` file is already configured with the correct `base` path.

---

## 📝 Features

- 🧠 Chatbot that can:
  - Tell the current date
  - Roll a dice
  - Flip a coin
- ✍️ Input via Enter key or Send button
- 🔄 Auto-scroll to the latest message
- ⏳ Loading animation with a GIF

---

## ✅ To Do / Ideas

- [ ] Add more bot commands (weather, jokes, etc.)
- [ ] Save chat history
- [ ] Dark mode
- [ ] Responsive mobile layout

---

## 📸 Screenshots

![Chat Screenshot](./src/assets/react-basics.gif)
<img width="400" alt="image" src="https://github.com/user-attachments/assets/efe20429-3cee-4b11-8569-dc0928ca097c" />

<img width="400" alt="image" src="https://github.com/user-attachments/assets/4a78d0d1-cddd-4ed7-ba5b-18de42b271c1" />



---

## 📄 License

MIT – Feel free to use, remix, and improve this project 🚀
