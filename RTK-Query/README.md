# 🧠 Redux Toolkit Query Demo – Posts App

A simple React application demonstrating **Redux Toolkit Query (RTK Query)** for fetching, caching, and mutating API data.

This project shows how to:

- Fetch all posts
- Fetch a single post by ID
- Add a new post using mutation
- Handle loading & error states
- Show optimistic UI preview

---

## 🚀 Features

- 📡 Fetch posts using RTK Query
- 🔎 Fetch post by ID dynamically
- ➕ Add new post with mutation
- ⚡ Automatic caching & refetching
- 🧠 Simplified async logic (no thunk needed)
- 🎨 Clean UI using Tailwind CSS

---

## 🛠 Tech Stack

- React.js
- Redux Toolkit
- RTK Query
- Tailwind CSS
- JSONPlaceholder API

---

## 📁 Project Structure

```bash
src/
│
├── redux/
│   ├── api.js            # RTK Query API slice
│   └── store.js          # Redux store setup
│
├── App.jsx               # Main UI
└── main.jsx              # React entry point
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/rtk-query-demo.git
```

Move into project folder:

```bash
cd rtk-query-demo
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🧠 How RTK Query Works Here

1. API slice defines endpoints (`getPosts`, `getPostById`, `addPost`)
2. RTK Query auto-generates hooks
3. Components call hooks directly
4. Redux store manages caching automatically
5. UI updates instantly on state change

---

## 🎯 Learning Outcomes

This project demonstrates:

- How RTK Query replaces manual async logic
- How caching works automatically
- How to use mutations safely with `.unwrap()`
- How to structure Redux Toolkit projects
- How to manage API state without reducers
