# Song List Manager

A full-stack React application for managing a collection of songs, built as part of the **Addis Software Frontend Developer Test Project**.

---

## ✨ Overview

This app allows users to:

- View a list of songs with title, artist, album, year, and cover image.
- Perform **CRUD operations** (Create, Read, Update, Delete).
- Search for a specific song.
- Navigate between pages using **pagination**.

The frontend is developed in **ReactJS**, styled using **external CSS**, and backed by **MirageJS** (mock backend).

---

## 📂 Project Structure

```
src/
 ├── assets/             # image files like music notes
 ├── components/         # Header, Add_Songs, Search_Song, Song_List, etc.
 ├── context/            # React context for global song state
 ├── pages/              # Homepage and SongPage
 ├── routes.jsx          # Route definitions
 ├── App.jsx             # Main layout
 ├── index.js            # Entry point with MirageJS setup
 ├── styles.css          # App-wide styling (responsive via media queries)
webpack.config.js      # Custom Webpack configuration
.babelrc                # Babel setup for JSX & ES6
```

---

## 🔧 Features Implemented

### Frontend

- [x] Functional React components with Hooks (`useState`, `useEffect`, `useRef`, `useContext`)
- [x] Full CRUD:

  - **Create**: Add a new song via dialog
  - **Read**: Fetch & display list of songs from mock backend
  - **Update**: Edit song information using dialog
  - **Delete**: Remove a song from backend and local state

- [x] Pagination using `react-router-dom`
- [x] Search functionality with timeout-cleared result display
- [x] Responsive design with CSS Media Queries
- [x] Song details page route for viewing more info

### Backend (MirageJS)

- [x] Mock API endpoints:

  - `GET /api/songs`
  - `POST /api/songs`
  - `PUT /api/songs/:id`
  - `DELETE /api/songs/:id`

- [x] Each song includes:

  - `title`, `artist`, `album`, `year`, and `cover` image URL

---

## 🪤 AI Usage Disclosure

Parts of this project were assisted using **ChatGPT** as a learning and code-pairing mentor. Specifically:

- Designing the CRUD logic using API calls(especially edit and delete handling)
- Setting up MirageJS routes and mocking additional song data
- Adding Babel and Dev server to the Webpack configuration file
- Implementing `setTimeout` logic for search result visibility
- Generating placeholder album cover image URLs
- Reviewing project compliance with requirements

All code was carefully reviewed and debugged to ensure full understanding and functionality.

---

## 💻 Technologies Used

- ReactJS (Functional Components)
- MirageJS (mock backend)
- Webpack (manually configured)
- Babel
- External CSS for styling (media queries for responsiveness)
- React Router DOM for page routing & pagination

---

## 🛋️ Missing / Not Fully Implemented

### Redux Toolkit + Redux Saga

- Currently using React Context + `useState`.
- **Reason**: The project is scoped for smaller state management.
- **Future Plan**: Will refactor global state to use Redux Toolkit with Saga for API side effects.

### Emotion / Styled System

- Not implemented.
- **Reason**: Not familiar with Emotion/Styled System yet.
- **Alternative**: Responsive external CSS was used for styling.

### Testing (Bonus)

- Not implemented.
- Could add:

  - Jest unit tests (e.g. for search logic)
  - React Testing Library test (e.g. for rendering list)

### Performance Optimizations

- Lazy loading and code-splitting are not implemented yet.

### Deployment (Bonus)

- App is currently running locally.
- Plan to deploy frontend on **Netlify**.

---

## ⚙️ Webpack Configuration

### Features

- Manual Webpack setup (no Create React App used)
- Babel loader with presets for JSX and modern JS
- CSS loader and style loader for external CSS
- Image and asset support with `asset/resource`
- Dev server with hot reloading on port 3000

### Example Webpack Features

```js
module: {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource'
    }
  ]
},
```

---

## 📃 Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/your-username/song-manager.git
cd song-manager
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run start
```

The app will run on: `http://localhost:3000`

---

## 🌟 Future Improvements

- Integrate Redux Toolkit and Redux Saga for global state
- Convert styling to Emotion or Styled System
- Add unit/component tests
- Improve performance via lazy loading
- Deploy on Netlify (frontend)

---

## 📅 Author

**Saron Abebe**
Frontend Developer | Software Engineering Student

---

> ✨ Thank you for reviewing this project. I look forward to your feedback!
