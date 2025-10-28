# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Tech Stack

Main Tech: react, react-dom
Libraries: react-redux, react-router-dom, @reduxjs/toolkit
Packages: axios, react-icons,
Framework: tailwindcss, @tailwindcss/vite

---

# Folder Structure

Movie_Management_App

- src
  - app
    - store.js (redux store file)
  - assets
  - components
    - FavourateCard.jsx (profile favroute page card)
    - Loader.jsx (loader for loading)
    - MovieCard.jsx (movie card for home and all movies page)
    - WatchLaterCard.jsx (profile watch latter page cards)
  - features
    - movies.js (movie slice)
    - theme.js (theme slice)
    - users.js (user slice)
  - key
    - keydetails.txt (details for api key)
  - Pages
    - auth
      - Login.jsx (login page)
      - Signup.jsx (signup page)
    - layout
      - Layout.jsx (landing page)
    - navigation
      - Navigation.jsx (navigation bar)
    - AllMovies.jsx (all movie page)
    - Details.jsx (movie detail page)
    - Home.jsx (home page)
    - Profile.jsx (profile page)
    - export.js (import and export all file in this folder from this file)
- App.jsx (routing page)
- index.css (main css file)
- main.jsx (main file for render)

---

# Features

<!-- ------------------------------------------- -->

# Home Page

- visible item

  - Popular movie section
  - Top rated movies section
  - Discover movies section
  - Trending movies Section

- work

  - you can add movie to watch later list
  - you can add movie to favroute list
  - you can see movie details on new page
  - you can see movie poster, rating, movie name etc
  - add to favrouter and watch later button disable untill user logged in

<!-- ------------------------------------------- -->

# Profile Page

- user logged in

  - User Name
  - Watch later list
  - Favroute list

- user not logged in

  - Text saying that need to login first too see details

- Word

  - you can remove movie from watch later or favroute list

<!-- ------------------------------------------- -->

# Login Page

- user can login by following details
  - email
  - password

<!-- ------------------------------------------- -->

# Signup Page

- you can signup by providing following details
  - username
  - email
  - password
  - confirm password
